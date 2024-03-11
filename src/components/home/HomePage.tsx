import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../common/Header';
import backgroundImage from '../../assets/header.jpg';
import './RoutingForm.css';

const RoutingForm: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [skiAreas, setSkiAreas] = useState<string[]>([]);
  const [selectedArea, setSelectedArea] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(selectedArea);
    if (selectedArea) {
      navigate(`/RouteDisplay/${selectedArea}`);
    }
  };

  useEffect(() => {
    // Perform the API call with the searchQuery value
    if (searchQuery.trim() !== '') {
      fetch(`https://api.openskimap.org/search?query=${searchQuery}`)
        .then(response => response.json())
        .then(data => {
          // Assuming the API response contains an array of ski areas
          setSelectedArea(null);
        
          const areas = data.map((area) => ({ id: area.properties.id, name: area.properties.name }));

          setSkiAreas(areas);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    } else {
      // Clear skiAreas when searchQuery is empty
      setSkiAreas([]);
    }
  }, [searchQuery]);

  return (
    <>
      <Header />
      <div className="bg-img pt-[5%] pb-[10%]" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
        <div className="grid grid-cols-1">
          <div className="text-center">
            <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-6xl mb-6 mt-5">Let the journey begin...</h1>
            <p className="text-white/70 text-xl max-w-xl mx-auto">Planning for a trip? We will organize your trip with the best places and within the best budget!</p>

            <div className="mt-6">
              <form 
              onSubmit={handleSubmit}
              className="w-[85%] m-auto p-4 bg-white dark:bg-slate-900 rounded-xl shadow dark:shadow-gray-700">
                <div className="registration-form text-dark text-start">
                  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                    <div>
                      <label className="form-label font-medium text-slate-900 dark:text-white">Search Ski Areas:</label>
                      <div className="relative mt-2">
                      <div className="">
        <input
          name="name"
          type="text"
          id="job-keyword"
          value={searchQuery}
          onChange={handleInputChange}
          className="w-full py-2 px-3 ps-10 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
          placeholder="Search"
        />
        {/* Display the autocomplete dropdown with ski areas */}
        {skiAreas.length > 0 && !selectedArea && (
          <ul className="autocomplete-dropdown">
            {skiAreas.map((area, index) => (
              <li key={index} onClick={() => setSelectedArea(area.id)}>
                {area.name}
              </li>
            ))}
          </ul>
        )}
      </div>
            {/* Selected ski area */}
            {selectedArea && (
              <p className="text-white/70 text-xl max-w-xl mx-auto mt-2">Selected Ski Area: {selectedArea}</p>
            )}
                      </div>


                    </div>

                    <div>
                      <label className="form-label font-medium text-slate-900 dark:text-white">No. of person:</label>
                      <div className="relative mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users size-[18px] absolute top-[10px] start-3">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                        <select
                          className="form-select w-full py-2 px-3 ps-10 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                        >
                          <option> Skill Level Selection</option>
                          <option>Beginner</option>
                          <option>Professional</option>
                          <option>Normal</option>
                        </select>
                      </div>


                     
                    </div>
                    <div className="mt-8">
                  <input type="submit" id="search-buy" name="search" className="py-1 px-5 h-10 inline-block tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md w-full cursor-pointer" value="Search" />
                </div>
                  </div>{/*end grid*/}
                </div>{/*end container*/}
              </form>{/*end form*/}

         
            </div>
          </div>
        </div>{/*end grid*/}
      </div>
    </>
  );
};

export default RoutingForm;
