document.addEventListener('DOMContentLoaded', function() {
    const map = L.map('map').setView([39, 35], 6);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // Risk verilerini çek ve haritayı güncelle
    fetch('/api/risk-analizi')
        .then(response => response.json())
        .then(data => {
            const riskTablosu = document.querySelector('#risk-tablosu tbody');
            riskTablosu.innerHTML = '';
            
            for (const [sehir, bilgi] of Object.entries(data)) {
                // Tabloya ekle
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${sehir}</td>
                    <td class="${bilgi.risk > 5 ? 'risk-yuksek' : 'risk-orta'}">
                        ${bilgi.risk.toFixed(2)}
                    </td>
                `;
                riskTablosu.appendChild(row);
                
                // Haritaya işaretle
                const marker = L.marker([bilgi.lat, bilgi.lon]).addTo(map)
                    .bindPopup(`<b>${sehir}</b><br>Risk Puanı: ${bilgi.risk.toFixed(2)}`);
                
                // Risk seviyesine göre renklendir
                if (bilgi.risk > 5) {
                    marker.setIcon(L.icon({
                        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
                        iconSize: [25, 41]
                    }));
                }
            }
        });
});
