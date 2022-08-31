import logging
from flask import Flask, render_template, request, send_from_directory
from flask_mobility import Mobility
from features.kickstarter import data as ks_data
from features.cards import all_sets_data
import os

app = Flask(__name__)
Mobility(app)

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
    return render_template('proxies.html', is_mobile=request.MOBILE)


@app.route("/kickstarter", methods=['GET'])
def kickstarter():
    return render_template('kickstarter.html', zets=ks_data, is_mobile=request.MOBILE)


@app.route("/pod", methods=['GET'])
def print_on_demand():
    return render_template('pod.html', is_mobile=request.MOBILE)


@app.route("/cards", methods=['GET'])
def all_cards():
    return render_template('cards.html', zets=all_sets_data, is_mobile=request.MOBILE)


if __name__ == '__main__':
    app.config['TEMPLATES_AUTO_RELOAD'] = True
    app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
    app.run(port=8080)
