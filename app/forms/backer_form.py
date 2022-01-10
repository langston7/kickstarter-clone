from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.validators import DataRequired, ValidationError

def not_less_than_zero(form, field):
  if field.data < 0:
    raise ValidationError('Can not donate less than 0')

class BackerForm(FlaskForm):
  additional_funding = IntegerField('additional_funding', validators=[DataRequired(), not_less_than_zero])
  project_id = IntegerField('project_id')
  user_id = IntegerField('user_id')
