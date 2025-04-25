import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function DepremHaritasi({ depremler }) {
    return (
        <MapContainer center={[39, 35]} zoom={6}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {depremler.map((deprem) => (
                <Marker position={[deprem.enlem, deprem.boylam]}>
                    <Popup>{deprem.yer} - Büyüklük: {deprem.buyukluk}</Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}