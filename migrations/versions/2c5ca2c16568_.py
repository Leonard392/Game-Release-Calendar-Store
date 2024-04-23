"""empty message

Revision ID: 2c5ca2c16568
Revises: e104d39bce5d
Create Date: 2024-04-23 19:10:33.373178

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2c5ca2c16568'
down_revision = 'e104d39bce5d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('favorite_platform',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('platform_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    with op.batch_alter_table('favorite_creator', schema=None) as batch_op:
        batch_op.add_column(sa.Column('creator_id', sa.Integer(), nullable=False))

    with op.batch_alter_table('favorite_store', schema=None) as batch_op:
        batch_op.add_column(sa.Column('store_id', sa.Integer(), nullable=False))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('favorite_store', schema=None) as batch_op:
        batch_op.drop_column('store_id')

    with op.batch_alter_table('favorite_creator', schema=None) as batch_op:
        batch_op.drop_column('creator_id')

    op.drop_table('favorite_platform')
    # ### end Alembic commands ###