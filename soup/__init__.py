from flask import Flask, render_template, request

from soup import config

def create_app(config_class=config.DevConfig):
    app = Flask(__name__, static_url_path="/static")
    app.config.from_object(config_class)

    @app.route("/", methods=["GET"])
    def root():
        return render_template("index.html")

    return app
