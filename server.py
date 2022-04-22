from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def show_homepage():
    """Show the application's homepage."""

    return render_template('homepage.html')


@app.route('/cards')
def show_cards():
    """Show all trading cards."""

    return render_template('cards.html')


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
