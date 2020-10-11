"""Flask config."""
import os
from dotenv import load_dotenv

basedir = os.path.abspath(os.path.dirname(__file__))
load_dotenv(os.path.join(basedir, ".env"))


class Config:
    """Base config."""

    SECRET_KEY = os.environ.get("SECRET_KEY")
    STATIC_FOLDER = "static"
    TEMPLATES_FOLDER = "templates"
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    S3_BUCKET = os.environ.get("S3_BUCKET")
    S3_KEY = os.environ.get("S3_KEY")
    S3_SECRET = os.environ.get("S3_SECRET_ACCESS_KEY")
    S3_LOCATION = f"http://{S3_BUCKET}.s3.amazonaws.com/"


class ProdConfig(Config):
    FLASK_ENV = "production"
    DEBUG = False
    TESTING = False
    SQLALCHEMY_DATABASE_URI = os.environ.get("DATABASE_URL")


class DevConfig(Config):
    FLASK_ENV = "development"
    DEBUG = True
    TESTING = True
    SQLALCHEMY_DATABASE_URI = os.environ.get("DATABASE_URL")
