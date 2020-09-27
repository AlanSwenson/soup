"""command line commmands to make our lives easier"""
from flask_script import Manager

from soup import create_app
from soup.extensions import db

manager = Manager(create_app)

@manager.command
def initdb():
    """ Initialize database.
    """
    app = create_app()
    with app.app_context():
        db.drop_all()
        db.create_all()
        db.session.commit()
        print("---old db removed---")
        print("---new db created---")

if __name__ == "__main__":
    manager.run()
