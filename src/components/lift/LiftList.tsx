import React, { useEffect, useState } from 'react';
import Header from '../common/Header';
import backgroundImage from '../../assets/header.jpg';

interface Entry {
  id: number;
  latitude: number;
  longitude: number;
  priority: number;
  note: string;
  status: string;
}

const RouteDisplay: React.FC = () => {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [modalOpen, setModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    latitude: 0,
    longitude: 0,
    priority: 1,
    note: '',
    status: 'open',
  });
  const [locationFetched, setLocationFetched] = useState(false);

  const [editingEntryId, setEditingEntryId] = useState<number | null>(null);

  useEffect(() => {
    // Get user's current location using geolocation API
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setFormData((prevFormData) => ({ ...prevFormData, latitude, longitude }));
        setLocationFetched(true);
      },
      (error) => {
        console.error('Error getting user location:', error);
      }
    );
  }, []); 



  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleAddEntry = () => {
    const newEntry: Entry = {
      id: entries.length + 1,
      ...formData,
    };

    setEntries(prevEntries => [...prevEntries, newEntry]);
    setModalOpen(false);
  };

  const handleEditEntry = (id: number) => {
    const entryToEdit = entries.find(entry => entry.id === id);
    if (entryToEdit) {
      setFormData(entryToEdit);
      setEditingEntryId(id);
      setModalOpen(true);
    }
  };

  const handleUpdateEntry = () => {
    if (editingEntryId !== null) {
      const updatedEntries = entries.map(entry =>
        entry.id === editingEntryId ? { ...entry, ...formData } : entry
      );

      setEntries(updatedEntries);
      setModalOpen(false);
      setEditingEntryId(null);
    }
  };

  const handleDeleteEntry = (id: number) => {
    const updatedEntries = entries.filter(entry => entry.id !== id);
    setEntries(updatedEntries);
  };

  const getStatusBadgeColor = (status: string) => {
    return status === 'open' ? 'bg-green-500' : 'bg-red-500';
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
    <div className="container mx-auto p-4">
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded mb-4"
        onClick={() => {
          setFormData({
            latitude: 0,
            longitude: 0,
            priority: 1,
            note: '',
            status: 'open',
          });
          setModalOpen(true);
        }}
      >
        Add Entry
      </button>

      <div className="grid grid-cols-3 gap-4">
  {entries.map((entry) => (
    <div key={entry.id} className="border p-4 relative">
      <div className={`absolute top-2 right-2 ${getStatusBadgeColor(entry.status)} text-white px-2 py-1 rounded`}>
        {entry.status}
      </div>
      <p>Latitude: {entry.latitude}</p>
      <p>Longitude: {entry.longitude}</p>
      <p>Priority: {entry.priority}</p>
      <p>Note: {entry.note}</p>
      <p>
  🗺️ <a
    style={{ color: '#0066cc', textDecoration: 'underline' }}
    target="_blank"
    href={`https://maps.google.com/?q=${entry.latitude},${entry.longitude}`}
  >
    Navigate
  </a>
</p>
      <div className="mt-2">
        <button
          className="bg-yellow-500 text-white py-1 px-2 mr-2"
          onClick={() => handleEditEntry(entry.id)}
        >
          Edit
        </button>
        <button
          className="bg-red-500 text-white py-1 px-2"
          onClick={() => handleDeleteEntry(entry.id)}
        >
          Delete
        </button>
      </div>
    </div>
  ))}
</div>

      {modalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-4 rounded w-1/2">
            <h2 className="text-lg font-bold mb-4">{editingEntryId !== null ? 'Edit Entry' : 'Add Entry'}</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Latitude</label>
                <input
                  type="number"
                  name="latitude"
                  value={formData.latitude}
                  onChange={handleInputChange}
                  className="border p-2 w-full"
                  disabled={!locationFetched} 
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Longitude</label>
                <input
                  type="number"
                  name="longitude"
                  value={formData.longitude}
                  onChange={handleInputChange}
                  className="border p-2 w-full"
                  disabled={!locationFetched}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Priority</label>
                <input
                  type="number"
                  name="priority"
                  value={formData.priority}
                  onChange={handleInputChange}
                  className="border p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Note</label>
                <textarea
                  name="note"
                  value={formData.note}
                  onChange={handleInputChange}
                  className="border p-2 w-full"
                ></textarea>
              </div>
              <div>
                <button
                  type="button"
                  className="bg-blue-500 text-white py-2 px-4 rounded mr-2"
                  onClick={editingEntryId !== null ? handleUpdateEntry : handleAddEntry}
                >
                  {editingEntryId !== null ? 'Update Entry' : 'Add Entry'}
                </button>
                <button
                  type="button"
                  className="bg-gray-500 text-white py-2 px-4 rounded"
                  onClick={() => {
                    setModalOpen(false);
                    setEditingEntryId(null);
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default RouteDisplay;
