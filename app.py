from flask import Flask, request, render_template, jsonify
from time import sleep
from gtts import gTTS
import os
app = Flask(__name__)

_dir = 'static/media/'

@app.route('/')
def index():

	return render_template('index.html')



@app.route('/tts', methods=['GET', 'POST'])
def text_to_speech():
	if request.method == 'POST':
			data = request.get_json()
			text = data.get('text')
			textID = data.get('textID')
			#Conversion begins here
			media = gTTS(text=text, lang='en') #Convert the text sent
			sleep(0.5)
			location = str(_dir + textID + '.mp3')
			media.save(location)

			return jsonify(location=location, mediaID=textID)



		
if __name__ == '__main__':
	app.run(debug=True, threaded=True)