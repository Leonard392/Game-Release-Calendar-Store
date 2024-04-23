"""empty message

Revision ID: e104d39bce5d
Revises: d2352eafcd49
Create Date: 2024-04-22 20:53:06.537035

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e104d39bce5d'
down_revision = 'd2352eafcd49'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('favorite_game', schema=None) as batch_op:
        batch_op.add_column(sa.Column('game_id', sa.Integer(), nullable=False))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('favorite_game', schema=None) as batch_op:
        batch_op.drop_column('game_id')

    # ### end Alembic commands ###