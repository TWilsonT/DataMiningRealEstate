import sys

from flask import Flask, render_template, request, redirect, Response, session
import random, json
import pickle

from sklearn.tree import DecisionTreeRegressor
import numpy as np


app = Flask(__name__)

#
#   FUNCTIONS TO TRAIN MODEL AND GET FINAL VALUES ETC
val = 0

#
def getFinalValue():
    return val
######

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
    return render_template('final-estimate.html', value=str(session['value']))


@app.route('/receiver', methods = ['POST'])
def worker():
    # read json + reply
    data = request.get_json()
    print(type(data))
    result = ''
    input = []
    for d in data:
        print(d)
        for i in d:
        	print (d[i])
        	input.append(d[i])

    print(input)
    


    val = regressor.predict(np.array(input).reshape(1,-1))
    session['value'] = str(val)
    return result

if __name__ == '__main__':
    #
    #   Here I loaded the model and test data from binary files
    #   If we can load the data from the web interface into the right format, we should be able to use
    #   the predict function to get a price
	regressor = pickle.load(open("regressor.p", "rb"))
	#X_test = pickle.load(open("X_test.p", "rb"))
	#y_test = pickle.load(open("y_test.p", "rb"))

	#print("Score: ", regressor.score(X_test, y_test))
	#print("Sample Predictions: " + str(regressor.predict(X_test[:5])))
	app.secret_key = 'A'

	app.run()
    # run!
