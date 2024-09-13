from geopy.geocoders import Nominatim
from geopy.exc import GeocoderTimedOut
import requests

def get_ip_address():
    response = requests.get('https://api.ipify.org?format=json')
    ip = response.json().get('ip')
    return ip

def get_location(ip_address):
    try:
        response = requests.get(f'https://ipapi.co/{ip_address}/json/')
        location_data = response.json()
        return location_data
    except requests.RequestException as e:
        print(f"Error getting location: {e}")
        return None

def main():
    ip_address = get_ip_address()
    if not ip_address:
        print("Could not get IP address.")
        return

    print(f"Your IP address: {ip_address}")

    location_data = get_location(ip_address)
    if location_data:
        print(f"Location data: {location_data}")

        # Extracting relevant information
        city = location_data.get('city', 'Unknown city')
        region = location_data.get('region', 'Unknown region')
        country = location_data.get('country_name', 'Unknown country')
        latitude = location_data.get('latitude', 'Unknown latitude')
        longitude = location_data.get('longitude', 'Unknown longitude')

        print(f"Location: {city}, {region}, {country}")
        print(f"Coordinates: Latitude: {latitude}, Longitude: {longitude}")
    else:
        print("Could not get location data.")

if __name__ == "__main__":
    main()
