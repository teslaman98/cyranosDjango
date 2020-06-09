from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect
from django.views.generic import TemplateView


def splash(requests):
    return render(requests, 'pages/index.html', {} )
