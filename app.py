# Import
from flask import Flask, render_template

# Create app
app = Flask(__name__)

# Routes
@app.route('/')
def home():
    return render_template("index.html")

# Start
if __name__ == '__main__':
    app.run(debug = True)