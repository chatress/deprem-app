// app.js
fetch('https://api.orhanaydogdu.com.tr/deprem/kandilli/live')
    .then(response => response.json())
    .then(data => {
        data.result.forEach(deprem => {
            document.getElementById('depremler').innerHTML += `
                <div class="deprem">
                    <strong>${deprem.title}</strong> - Büyüklük: ${deprem.mag}
                </div>
            `;
        });
    });
