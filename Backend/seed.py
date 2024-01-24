#!/usr/bin/env python3
from random import randint, choice as rc
from app import app
from models import db, Transporter_Post, Passenger_Post, User
from faker import Faker

fake = Faker()

def create_transporter_post():
    transporters = []
    for _ in range(5):
        t = Transporter_Post(
            vehicle= fake.sentence(nb_words=1),
            seats = randint(1, 8),
            event = fake.sentence(nb_words=2),
            location = fake.address(),
            details = fake.text(),
            request = fake.sentence(),
        )
        transporters.append(t)

    return transporters


def create_user():
    users = []
    for _ in range(5):
        u = User(
            name = fake.name(),
            age = randint(18, 99),
            social = fake.sentence(),
            username = fake.name(),
            password = fake.text(),
        )
        users.append(u)

    return users

def create_passenger_post():
    passengers = []
    for _ in range(5):
        p = Passenger_Post(
            offer = fake.sentence(),
            event = fake.sentence(nb_words=2),
            location = fake.address(),
            details = fake.text(),
            request = fake.sentence(),
        )
        passengers.append(p)

    return passengers


if __name__ == '__main__':
    with app.app_context():
        print('clearing DB...')
        Transporter_Post.query.delete()
        Passenger_Post.query.delete()
        User.query.delete()

        print('Seeding Transporter Posts...')
        transporters = create_transporter_post()
        db.session.add_all(transporters)
        db.session.commit()

        print('Seeding Passenger Posts...')
        passengers = create_passenger_post()
        db.session.add_all(passengers)
        db.session.commit()

        print('Seeding Users...')
        users = create_user()
        db.session.add_all(users)
        db.session.commit()

        print('Seeding complete!')



