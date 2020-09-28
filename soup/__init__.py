from flask import Flask, render_template, request

from soup import config, forms

from .extensions import db, migrate

def create_app(config_class=config.DevConfig):
    app = Flask(__name__, static_url_path="/static")
    app.config.from_object(config_class)

    with app.app_context():
        initialize_extensions(app)

    @app.route("/", methods=["GET"])
    def root():
        return render_template("index.html")

    @app.route("/add", methods=["GET", "POST"])
    def add():
        form = forms.RecipeForm()
        if form.validate():
            if form.ingredients:
                print(form.ingredients.data)
                print(form.title.data)
                print(form.link.data)
                print(form.data)

        return render_template("add.html", form=form)
    
    @app.route("/search", methods=["GET"])
    def search():
        return render_template("search.html")

    return app

def initialize_extensions(app):
    db.init_app(app)
    migrate.init_app(app, db)