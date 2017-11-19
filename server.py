import sys

from flask import Flask, render_template, request, redirect, Response
import random, json

app = Flask(__name__)

def getFinalValue():
    return 65;

@app.route('/index')
def index():
    # serve index template
    return render_template('index.html')

@app.route('/quick-start')
def quickStart():
    # serve index template
    return render_template('quick-start.html')

@app.route('/detailed-start')
def detailedStart():
    # serve index template
    return render_template('detailed-start.html')

@app.route('/final-estimate')
def finalEstimate():
    # serve index template
    return render_template('final-estimate.html', value=getFinalValue())


@app.route('/receiver', methods = ['POST'])
def worker():
    # read json + reply
    data = request.get_json()
    result = ''

    for item in data:
        # loop over every row
        result += str(item['make']) + '\n'

    print (result)
    return result

if __name__ == '__main__':
    # run!
    app.run()