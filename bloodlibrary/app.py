import logging
from flask import Flask, render_template, request, send_from_directory
from flask_mobility import Mobility
from features.kickstarter import data as ks_data
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
    return render_template('proxies.html')


@app.route("/kickstarter", methods=['GET'])
def kickstarter():
    return render_template('kickstarter.html', zets=ks_data, is_mobile=request.MOBILE)


@app.route("/pod", methods=['GET'])
def print_on_demand():
    return render_template('pod.html')


if __name__ == '__main__':
    app.run(port=8080)
