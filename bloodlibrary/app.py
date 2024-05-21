import logging
from flask import Flask, render_template, request, send_from_directory, Response, g
from flask_mobility import Mobility
from features.kickstarter import data as ks_data
from features.cards import all_sets_data
from features.pod import build_js_data
from auth import authenticate_user, LoginForm
from requests import get
import os

app = Flask(__name__)
app.secret_key = os.getenv('SECRET', 'secret_value')
Mobility(app)
pod_js_data = build_js_data()

if __name__ != '__main__':
    gunicorn_logger = logging.getLogger('gunicorn.error')
    app.logger.handlers = gunicorn_logger.handlers
    app.logger.setLevel(gunicorn_logger.level)


app.logger.info("Running...")


@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'),
                               'favicon.ico', mimetype='image/vnd.microsoft.icon')


@app.route("/", methods=['GET'])
def proxies():
    return render_template('proxies.html', is_mobile=g.is_mobile)


@app.route("/kickstarter", methods=['GET'])
def kickstarter():
    return render_template('kickstarter.html', zets=ks_data, is_mobile=g.is_mobile)


@app.route("/pod", methods=['GET'])
def print_on_demand():
    return render_template('pod.html', is_mobile=g.is_mobile, js_data=pod_js_data)


@app.route("/roulette", methods=['GET'])
def roulette():
    return render_template('roulette.html', is_mobile=g.is_mobile)


@app.route("/deck/export", methods=['GET'])
def deck_export():
    deck_id = request.args.get('id')
    rs = get('https://api.vtesdecks.com/1.0/decks/'+deck_id+'/export?type=LACKEY')
    if rs.status_code == 200:
        return Response(
            rs.text,
            mimetype='text/plain',
            headers={'Content-disposition': f'attachment; filename=deck_{deck_id}.txt'})


@app.route("/cards", methods=['GET'])
def all_cards():
    return render_template('cards.html', zets=all_sets_data, is_mobile=g.is_mobile)


@app.route("/login", methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if request.method == 'GET':
        return render_template('login.html', form=form, is_mobile=g.is_mobile)

    elif request.method == 'POST':
        if form.validate_on_submit():
            user_data = authenticate_user(form.name.data, form.password.data)
            if user_data:
                return render_template('local_store.html',
                                       token=user_data['token'],
                                       name=user_data['displayName'],
                                       avatar=user_data['profileImage'],
                                       )
            else:
                return render_template('login.html', form=form, errors=["Login failed"], is_mobile=g.is_mobile)


if __name__ == '__main__':
    app.config['TEMPLATES_AUTO_RELOAD'] = True
    app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
    app.run(port=8080)
