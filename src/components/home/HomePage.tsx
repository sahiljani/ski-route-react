import './RoutingForm.css';
import backgroundImage from '../../assets/header.jpg';
// useNavigate 
import { useNavigate } from 'react-router-dom';
import Header from '../common/Header';



const RoutingForm: React.FC = () => {
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  navigate('/RouteDisplay');
  };

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
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search size-[18px] absolute top-[10px] start-3">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    <input name="name" type="text" id="job-keyword" className="w-full py-2 px-3 ps-10 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Search" />
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
                    <select className="form-select w-full py-2 px-3 ps-10 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-100 dark:border-gray-800 focus:ring-0">
                      <option> Skill Level Selection</option>
                      <option>Beginner</option>
                      <option>Professional</option>
                      <option>Normal</option>
                     
                    </select>
                  </div>
                </div>

                <div className="lg:mt-[35px]">
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