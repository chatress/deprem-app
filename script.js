// Örnek veri (API yerine kullanıyoruz)
const sampleData = [
  {
    location: "Kahramanmaraş",
    magnitude: 4.5,
    time: "2025-04-25 14:30"
  },
  {
    location: "İzmir",
    magnitude: 3.2,
    time: "2025-04-25 13:20"
  },
  {
    location: "Balıkesir",
    magnitude: 2.9,
    time: "2025-04-25 12:45"
  }
];

function displayEarthquakes(data) {
  const container = document.getElementById("earthquake-list");
  container.innerHTML = "";

  data.forEach(eq => {
    const div = document.createElement("div");
    div.className = "earthquake";
    div.innerHTML = `
      <strong>Yer:</strong> ${eq.location}<br />
      <strong>Büyüklük:</strong> ${eq.magnitude}<br />
      <strong>Zaman:</strong> ${eq.time}
    `;
    container.appendChild(div);
  });
}

// Gerçek API eklendiğinde bu fonksiyon kullanılacak
function fetchEarthquakes() {
  // Şimdilik sahte veri ile dolduruyoruz
  displayEarthquakes(sampleData);
}

window.onload = fetchEarthquakes;
