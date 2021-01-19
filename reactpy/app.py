from flask import Flask, jsonify, render_template, request

@app.route('/')
def home_page():
    return render_template('/build/index.html')
    
app.run(port=3300)