from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect
from django.views.generic import TemplateView


def splash(requests):
    return render(requests, 'pages/index.html', {} )

def giphy(requests):
    return render(requests, 'pages/giphy.html', {} )

def profile(requests):
    return render(requests, 'pages/profile.html', {} )
