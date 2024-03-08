import React from 'react';
import Header from '../common/Header';
import { MapContainer, TileLayer, Polyline, Popup, Polygon } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import backgroundImage from '../../assets/header.jpg';

const RouteDisplay: React.FC = () => {
    const polygonCoordinates = [
        [42.18514260000001, -73.32477189999996],
        [42.17878500000001, -73.3266359],
        [42.1716728, -73.32380679999997],
        [42.1716196, -73.3169791],
        [42.171886499999985, -73.31352370000003],
        [42.1735294, -73.31083869999998],
        [42.17918930000001, -73.31233739999996],
        [42.1837662, -73.31399350000002],
        [42.18541250000001, -73.31471490000003],
        [42.18647230000001, -73.32279619999996],
        [42.18514260000001, -73.32477189999996]
      ];
    
      // Coordinates for the new LineString
      const lineStringCoordinates = [
        [42.1788852, -73.31362900000003, 385.27],
        [42.179593200000014, -73.31401520000003, 369.32],
        [42.1802039, -73.3143531, 356.72999999999996],
        [42.181262, -73.3150159, 333.52],
        [42.18216020000001, -73.31626030000002, 304.86],
        [42.1833966, -73.31751860000003, 265.77],
        [42.183457, -73.317842, 262.77]
      ];
    
      // Style options for the new Polygon and LineString
      const polygonOptions = { color: 'green', fillColor: 'green' };
      const polylineOptions = { color: 'blue' };

      
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

    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <MapContainer center={[42.181262, -73.3150159]} zoom={13.5} style={{ height: '500px', width: '100%' }}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Polygon pathOptions={polygonOptions} positions={polygonCoordinates}>
              <Popup>
                <div>
                  <p>New Polygon Geometry</p>
                </div>
              </Popup>
            </Polygon>

            <Polyline pathOptions={polylineOptions} positions={lineStringCoordinates}>
              <Popup>
                <div>
                  <p>New LineString Geometry</p>
                </div>
              </Popup>
            </Polyline>
          </MapContainer>
        </div>

        <div>
          <div className="content-section bg-white rounded p-8 shadow-md">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">Destination Level: Intermediate</h2>

            <p className="text-gray-800">
              Welcome to Mountain Bliss Resort, your premier intermediate-level ski destination. Nestled in the heart of the
              picturesque mountains, our resort offers a perfect blend of thrilling slopes and serene landscapes.
            </p>

            <p className="text-gray-800 mt-4">
              Intermediate skiers will find a variety of well-maintained trails catering to different abilities. From
              gently winding paths for those looking to improve their skills to more challenging slopes for the adventurous,
              Mountain Bliss has it all.
            </p>

            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Trail Highlights</h3>
              <ul className="list-disc pl-4">
                <li>Wide range of intermediate-level slopes</li>
                <li>Breathtaking views of snow-capped peaks</li>
                <li>Cozy chalets for rest and relaxation</li>
                <li>Apres-ski activities and entertainment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default RouteDisplay;
