import requests
from .models import Proyect


def generate_request(url, params={}):
    response = requests.get(url, params=params)

    if response.status_code == 200:
        return response.json()


def get_repos(params={}):
    response = generate_request('https://api.github.com/users/linyers/repos')
    if response:
        return response
    return ''