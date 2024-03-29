"""empty message

Revision ID: 6db90c2f0768
Revises: 
Create Date: 2024-01-26 11:57:09.564701

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6db90c2f0768'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users_table',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('age', sa.Integer(), nullable=False),
    sa.Column('social', sa.String(), nullable=True),
    sa.Column('username', sa.String(), nullable=False),
    sa.Column('password', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('passengers_table',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('offer', sa.String(), nullable=False),
    sa.Column('event', sa.String(), nullable=False),
    sa.Column('location', sa.String(), nullable=False),
    sa.Column('details', sa.String(), nullable=True),
    sa.Column('request', sa.String(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['users_table.id'], name=op.f('fk_passengers_table_user_id_users_table')),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('transporters_table',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('vehicle', sa.String(), nullable=False),
    sa.Column('seats', sa.Integer(), nullable=True),
    sa.Column('event', sa.String(), nullable=False),
    sa.Column('location', sa.String(), nullable=False),
    sa.Column('details', sa.String(), nullable=True),
    sa.Column('request', sa.String(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['users_table.id'], name=op.f('fk_transporters_table_user_id_users_table')),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('comments_table',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('text', sa.String(), nullable=False),
    sa.Column('user_post_id', sa.Integer(), nullable=True),
    sa.Column('transporter_post_id', sa.Integer(), nullable=True),
    sa.Column('passenger_post_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['passenger_post_id'], ['passengers_table.id'], name=op.f('fk_comments_table_passenger_post_id_passengers_table')),
    sa.ForeignKeyConstraint(['transporter_post_id'], ['transporters_table.id'], name=op.f('fk_comments_table_transporter_post_id_transporters_table')),
    sa.ForeignKeyConstraint(['user_post_id'], ['users_table.id'], name=op.f('fk_comments_table_user_post_id_users_table')),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('comments_table')
    op.drop_table('transporters_table')
    op.drop_table('passengers_table')
    op.drop_table('users_table')
    # ### end Alembic commands ###
