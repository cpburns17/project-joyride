from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin


metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

db = SQLAlchemy(metadata=metadata)


class Transporter_Post(db.Model, SerializerMixin):
    __tablename__ = 'transporters_table'
    serialize_rules = ['-comments.passenger', '-comments.transporter', '-user.passengers', '-user.transporters']

    id = db.Column(db.Integer, primary_key = True)
#can give vehicle name 
    vehicle = db.Column(db.String, nullable = False)
#number of spots available for passengers
    seats = db.Column(db.Integer)
#type of event (concert, festival, general commute, work?)
    event = db.Column(db.String, nullable = False)
#this is where the person is located (cross streets? address?)
    location = db.Column(db.String, nullable = False)
#this is to share general info 
    details = db.Column(db.String)
#this is for special requests (ie: compensation, requirements to drive/ride, etc.)
    request = db.Column(db.String)
#this is so each post has an assigned user id
    user_id = db.Column(db.Integer, db.ForeignKey('users_table.id'))


    user = db.relationship('User', back_populates = 'transporters')
    comments = db.relationship('Comments', back_populates = 'transporter')




class User(db.Model, SerializerMixin):
    __tablename__ = 'users_table'
    serialize_rules = ['-passengers.user', '-transporters.user', '-comments.user']
    id = db.Column(db.Integer, primary_key = True)

    name = db.Column(db.String, nullable = False)
#validate age >= 18
    age = db.Column(db.Integer, nullable = False)
#social media (can just be a url link)
    social = db.Column(db.String)

    username = db.Column(db.String, nullable = False)
    password = db.Column(db.String, nullable = False)
    # where should we have the cascade delete?

    # transporter_id = db.Column(db.Integer, db.ForeignKey('transporters_table.id'))
    # passenger_id = db.Column(db.Integer, db.ForeignKey('passengers_table.id'))

    passengers = db.relationship('Passenger_Post', back_populates = 'user')
    transporters = db.relationship('Transporter_Post', back_populates = 'user')
    comments = db.relationship('Comments', back_populates = 'user')


    @validates('age')
    def validate_age(self, key, age):
        if not age >= 18:
            raise ValueError('Must be over 18')
        return age





class Passenger_Post(db.Model, SerializerMixin):
    __tablename__ = 'passengers_table'
    serialize_rules = ['-comments.passenger', '-comments.transporter', '-user.passengers', '-user.transporters']
    id = db.Column(db.Integer, primary_key = True)
#give 2 options to choose from such as $ or None
    offer = db.Column(db.String, nullable = False)
#type of event (concert, festival, general commute, work?)
    event = db.Column(db.String, nullable = False)
#this is where the person is located (cross streets? address?)
    location = db.Column(db.String, nullable = False)
#this is to share general info 
    details = db.Column(db.String)
#this is for special requests (ie: compensation, requirements to drive/ride, etc.)
    request = db.Column(db.String)
#this is so each post has an assigned user id
    user_id = db.Column(db.Integer, db.ForeignKey('users_table.id'))


    user = db.relationship('User', back_populates = 'passengers')
    comments = db.relationship('Comments', back_populates = 'passenger')

class Comments(db.Model, SerializerMixin):
    __tablename__ = 'comments_table'
    serialize_rules = [ '-user.comments']

    id = db.Column(db.Integer, primary_key = True)
    text = db.Column(db.String, nullable = False)

    user_post_id = db.Column(db.Integer, db.ForeignKey('users_table.id'), nullable = True)
    transporter_post_id = db.Column(db.Integer, db.ForeignKey('transporters_table.id'), nullable = True)
    passenger_post_id = db.Column(db.Integer, db.ForeignKey('passengers_table.id'), nullable = True)


    passenger = db.relationship('Passenger_Post', back_populates = 'comments')
    transporter = db.relationship('Transporter_Post', back_populates = 'comments')
    user = db.relationship('User', back_populates = 'comments')


