import requests
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField
from wtforms.validators import DataRequired


class LoginForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    password = PasswordField('password', validators=[DataRequired()])


def authenticate_user(user, password):
    login_data = {'username': user, 'password': password}
    user_data = requests.post('http://api.vtesdecks.com/1.0/auth/login', data=login_data).json()
    if 'token' in user_data:
        return user_data
    else:
        return None
