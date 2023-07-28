# Import
from flask import Flask, render_template

# Create app
app = Flask(__name__)

# Routes
@app.route('/')
def home():
    return render_template("index.html")

@app.route('/en')
def en():
    return render_template("index_en.html")

@app.route('/de')
def de():
    return render_template("index_de.html")

@app.route('/menu')
def menu():
    return render_template("menu.html")

@app.route('/menu_en')
def menu_en():
    return render_template("menu_en.html")

@app.route('/menu_de')
def menu_de():
    return render_template("menu_de.html")

# Start
if __name__ == '__main__':
    app.run(host="0.0.0.0", debug=True)