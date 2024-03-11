// Header.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSOSClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirmationYes = () => {
    // Play the SOS sound
    const audio = new Audio('/sos.mp3');
    audio.play();

    // Close the confirmation popup
    setShowConfirmation(false);
  };

  const handleConfirmationNo = () => {
    // Close the confirmation popup
    setShowConfirmation(false);
  };

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          {/* Your SVG and span here */}
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <Link to="/" className="mr-5 hover:text-gray-900">
    Home
  </Link>
  <Link to="/RouteDisplay" className="mr-5 hover:text-gray-900">
    Route Display
  </Link>

  <Link to="/amenities" className="mr-5 hover:text-gray-900">
    Amenities
  </Link>
  <Link to="/lift" className="mr-5 hover:text-gray-900">
    Lifts
  </Link> 
          <Link to="" className="mr-5 hover:text-gray-900" onClick={handleSOSClick}>
            SOS
          </Link>
        </nav>
    

        {/* Confirmation Modal */}
        {showConfirmation && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-4 rounded-md text-center">
              <p>Are you sure you want to send an SOS signal?</p>
              <button className="bg-blue-500 text-white py-1 px-4 rounded mx-2" onClick={handleConfirmationYes}>
                Yes
              </button>
              <button className="bg-gray-500 text-white py-1 px-4 rounded mx-2" onClick={handleConfirmationNo}>
                No
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
