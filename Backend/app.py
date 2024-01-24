from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS

from models import db, User, Passenger_Post, Transporter_Post, Comments #import models

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins" : "*"}})
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

migrate = Migrate(app, db)

db.init_app(app)

@app.get('/')
def index():
    return "Home"

@app.get('/all_posts')
def get_all_posts():
    transporter_posts = Transporter_Post.query.all()
    passenger_posts = Passenger_Post.query.all()
    return {
        "transporter_posts": [t.to_dict() for t in transporter_posts],
        "passenger_posts": [p.to_dict() for p in passenger_posts]
    }

#USER
@app.get('/users')
def get_users():
    users = User.query.all()
    return [u.to_dict() for u in users]

@app.post('/users')
def create_user():
    try:
        data = request.json
        new_user = User(name=data.get("name"), age=data.get("age"), social=data.get("social"), transporter_id=data.get("transporter_id"), passenger_id=data.get("passenger_id"))
        db.session.add(new_user)
        db.session.commit()
        return new_user.to_dict(), 201
    except Exception as e:
        print(e)
        return { "errors": ["validation errors"] }, 400

@app.patch('/users/<int:id>')
def patch_user(id):
    current_user = db.session.get(User, id)
    if not current_user:
        return {"error": "User not found"}, 404
    try:
        data = request.json
        for key in data:
            setattr(current_user, key, data[key])
            db.session.add(current_user)
            db.session.commit()
            return current_user.to_dict(), 202
    except Exception as e:
        print(e)
        return {"errors": ["validation errors"]}, 400

@app.delete('/users/<int:id>')
def delete_user(id):
    current_user = db.session.get(User, id) 
    if not current_user:
        return {"error": "User not found"}, 404
    db.session.delete(current_user)
    db.session.commit()
    return {}, 204


#PASSENGER POST
@app.get('/passenger_posts')
def get_passenger_posts():
    passenger_posts = Passenger_Post.query.all()
    return [p.to_dict() for p in passenger_posts]

@app.post('/passenger_posts')
def create_passenger_post():
    try:
        data = request.json
        new_passenger_post = Passenger_Post(offer=data.get("offer"), event=data.get("event"), location=data.get("location"), details=data.get("details"), request=data.get("request"))
        db.session.add(new_passenger_post)
        db.session.commit()
        return new_passenger_post.to_dict(), 201
    except Exception as e:
        print(e)
        return { "errors": ["validation errors"] }, 400
    
    
@app.patch('/passenger_posts/<int:id>')
def patch_passenger_post(id):
    current_passenger_post = db.session.get(Passenger_Post, id)
    if not current_passenger_post:
        return {"error": "Post not found"}, 404
    try:
        data = request.json
        for key in data:
            setattr(current_passenger_post, key, data[key])
            db.session.add(current_passenger_post)
            db.session.commit()
            return current_passenger_post.to_dict(), 202
    except Exception as e:
        print(e)
        return {"errors": ["validation errors"]}, 400
    
@app.delete('/passenger_posts/<int:id>')
def delete_passenger_post(id):
    current_passenger_post = db.session.get(Passenger_Post, id) 
    if not current_passenger_post:
        return {"error": "Post not found"}, 404
    db.session.delete(current_passenger_post)
    db.session.commit()
    return {}, 204

@app.get('/transporter_posts')
def get_transporter_posts():
    transporter_posts = Transporter_Post.query.all()
    return [t.to_dict() for t in transporter_posts]

@app.post('/transporter_posts')
def create_transporter_post():
    try:
        data = request.json
        new_transporter_post = Transporter_Post(vehicle=data.get("vehicle"), seats=data.get("seats"), event=data.get("event"), location=data.get("location"), details=data.get("details"), request=data.get("request"))
        db.session.add(new_transporter_post)
        db.session.commit()
        return new_transporter_post.to_dict(), 201
    except Exception as e:
        print(e)
        return { "errors": ["validation errors"] }, 400
    
@app.patch('/transporter_posts/<int:id>')
def patch_transporter_post(id):
    current_transporter_post = db.session.get(Transporter_Post, id)
    if not current_transporter_post:
        return {"error": "Post not found"}, 404
    try:
        data = request.json
        for key in data:
            setattr(current_transporter_post, key, data[key])
        db.session.add(current_transporter_post)
        db.session.commit()
        return current_transporter_post.to_dict(), 202
    except Exception as e:
        print(e)
        return {"errors": ["validation errors"]}, 400
    
@app.delete('/transporter_posts/<int:id>')
def delete_transporter_post(id):
    current_transporter_post = db.session.get(Transporter_Post, id) 
    if not current_transporter_post:
        return {"error": "Post not found"}, 404
    db.session.delete(current_transporter_post)
    db.session.commit()
    return {}, 204

#

@app.get('/comments')
def get_comments():
    all_comments = Comments.query.all()
    return [c.to_dict() for c in all_comments]




@app.post('/comments')
def create_comment():
    try:
        data = request.json
        new_comment = Comments(text=data.get("text"), user_post_id=data.get("user_post_id"), transporter_post_id=data.get("transporter_post_id"), passenger_post_id=data.get("passenger_post_id"))
        db.session.add(new_comment)
        db.session.commit()
        return new_comment.to_dict(), 201
    except Exception as e:
        print(e)
        return { "errors": ["validation errors"] }, 400


if __name__ == '__main__':
    app.run(port=5555, debug=True)