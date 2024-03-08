import React from 'react';
import { MapContainer, TileLayer, Polygon, Polyline, Popup } from 'react-leaflet';

const Map = () => {
  // Coordinates for the new Polygon
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
    <MapContainer center={[42.181262, -73.3150159]} zoom={13.5} style={{ height: '300px', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Render the new Polygon */}
      <Polygon pathOptions={polygonOptions} positions={polygonCoordinates}>
        <Popup>
          <div>
            <p>New Polygon Geometry</p>
          </div>
        </Popup>
      </Polygon>

      {/* Render the new LineString */}
      <Polyline pathOptions={polylineOptions} positions={lineStringCoordinates}>
        <Popup>
          <div>
            <p>New LineString Geometry</p>
          </div>
        </Popup>
      </Polyline>
    </MapContainer>
  );
};

export default Map;
