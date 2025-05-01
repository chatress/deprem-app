import requests
import pandas as pd
from math import radians, sin, cos, sqrt, atan2

def haversine(lon1, lat1, lon2, lat2):
    lon1, lat1, lon2, lat2 = map(radians, [lon1, lat1, lon2, lat2])
    dlon = lon2 - lon1
    dlat = lat2 - lat1
    a = sin(dlat/2)**2 + cos(lat1) * cos(lat2) * sin(dlon/2)**2
    return 6371 * 2 * atan2(sqrt(a), sqrt(1-a))

def deprem_verilerini_al():
    url = "https://deprem.afad.gov.tr/apiv2/event/filter?limit=100"
    response = requests.get(url)
    return response.json()

def risk_analizi_yap():
    sehirler = {
        "İstanbul": {"lat": 41.0082, "lon": 28.9784, "risk": 0},
        "İzmir": {"lat": 38.4192, "lon": 27.1287, "risk": 0},
        "Ankara": {"lat": 39.9334, "lon": 32.8597, "risk": 0}
    }
    
    depremler = deprem_verilerini_al()
    
    for deprem in depremler:
        for sehir, bilgi in sehirler.items():
            mesafe = haversine(deprem['longitude'], deprem['latitude'], 
                             bilgi['lon'], bilgi['lat'])
            if mesafe < 200:  # 200 km içindeki depremler
                sehirler[sehir]['risk'] += deprem['magnitude'] / (mesafe + 1)
    
    return sehirler