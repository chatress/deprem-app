from flask import Flask, render_template, jsonify
import veri_isleme

app = Flask(__name__)

@app.route('/')
def ana_sayfa():
    return render_template('index.html')

@app.route('/api/deprem-verileri')
def deprem_verileri():
    veriler = veri_isleme.deprem_verilerini_al()
    return jsonify(veriler)

@app.route('/api/risk-analizi')
def risk_analizi():
    riskler = veri_isleme.risk_analizi_yap()
    return jsonify(riskler)

if __name__ == '__main__':
    app.run(debug=True)