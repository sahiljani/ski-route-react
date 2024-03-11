import React, { useState, useEffect } from 'react';
import { FaCoffee, FaParking, FaWifi, FaShoppingBasket } from 'react-icons/fa';
import Header from '../common/Header';
import backgroundImage from '../../assets/header.jpg';

function AmenitiesPage() {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [amenities, setAmenities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const amenitiesData = await fetchAmenitiesData(currentLocation);
        setAmenities(amenitiesData);
      } catch (error) {
        console.error('Error fetching amenities data:', error);
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting current location:', error.message);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }

    if (currentLocation) {
      fetchData();
    }
  }, [currentLocation]);

  const fetchAmenitiesData = async (location) => {
    // Replace this with your actual API call
    // Example: const response = await fetch(`your-api-endpoint?lat=${location.latitude}&lon=${location.longitude}`);
    // const data = await response.json();
    // return data.amenities;

    // For the sake of this example, return mock data
    return [
      { name: 'Coffee Shop', icon: <FaCoffee />, details: 'Free Wi-Fi and cozy atmosphere' },
      { name: 'Parking Lot', icon: <FaParking />, details: 'Ample parking space available' },
      { name: 'Wi-Fi Zone', icon: <FaWifi />, details: 'High-speed internet connectivity' },
      { name: 'Grocery Store', icon: <FaShoppingBasket />, details: 'Fresh produce and daily essentials' },
    ];
  };

  return (
    <>
    <Header />
    <div className="bg-img bg-cover bg-center pt-[5%] pb-[10%]" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="grid grid-cols-1">
        <div className="text-center text-white">
          <div className="hero-section">
            <h1 className="font-bold text-4xl lg:text-6xl mb-4 mt-5">Explore the Adventure</h1>
            <p className="text-white/70 text-xl max-w-xl mx-auto">
              Embark on a thrilling journey at Mountain Bliss Resort, your ultimate intermediate-level ski destination.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-semibold mb-4">Amenities Nearby</h2>
      {currentLocation ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {amenities.map((amenity, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {amenity.icon}
                <h3 className="ml-2 text-xl font-semibold">{amenity.name}</h3>
              </div>
              <p className="text-gray-600">{amenity.details}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading current location...</p>
      )}
    </div>
    </>
  );
}

export default AmenitiesPage;
