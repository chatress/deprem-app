fetch('https://api.orhanaydogdu.com.tr/deprem/live.php?limit=10')
    .then(response => response.json())
    .then(data => {
        const liste = document.getElementById("depremListesi");
        liste.innerHTML = "";
        data.result.forEach(deprem => {
            const item = document.createElement("div");
            item.className = "deprem";
            item.innerHTML = `<strong>${deprem.lokasyon}</strong><br>
                Tarih: ${deprem.date}<br>
                Büyüklük: ${deprem.mag} - Derinlik: ${deprem.depth} km`;
            liste.appendChild(item);
        });
    })
    .catch(error => {
        document.getElementById("depremListesi").innerText = "Veriler alınamadı.";
        console.error("Hata:", error);
    });
