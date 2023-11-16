# Import
from flask import Flask, render_template, request, send_from_directory

# Create app
app = Flask(__name__, static_folder='static')

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

@app.route('/cookies')
def cookies():
    return render_template("cookies.html")

@app.route('/cookies_en')
def cookies_en():
    return render_template("cookies_en.html")

@app.route('/cookies_de')
def cookies_de():
    return render_template("cookies_de.html")

@app.route('/robots.txt')
def static_from_root():
    return send_from_directory(app.static_folder, request.path[1:])

# Start
if __name__ == '__main__':
    app.run(debug=True)