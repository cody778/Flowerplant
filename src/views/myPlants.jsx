import '../App.css'
import PlantList from '../components/PlantList';
import Searchfield from '../components/SearchField';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';


export default function MyPlants() {
  const navigate = useNavigate();
  const [plants, setPlants] = useState(() => {
    const savedPlants = localStorage.getItem("plants");
    return savedPlants ? JSON.parse(savedPlants) : [];
  });

  const [filterText, setFilterText] = useState(() => {
    const savedFilter = localStorage.getItem('filterText');
    return savedFilter ? savedFilter : '';
  });

  useEffect(() => {
    localStorage.setItem('filterText', filterText);
  }, [filterText]);

  useEffect(() => {
    localStorage.setItem("plants", JSON.stringify(plants));
  }, [plants]);

  const sortedPlants = plants.toSorted((a, b) => 
    a.commonName.localeCompare(b.commonName, "en", {sensitivity: "base"}));

  const filteredPlants = sortedPlants.filter(plant =>
    plant.commonName.toLowerCase().includes(filterText.toLowerCase())
  );

  const handleInputChange = (e) => {
    setFilterText(e.target.value);
  }

  return (
    <>
      <button onClick={() => navigate("/create")}>
        Create New Care Plan
      </button>
      {filteredPlants.length > 0 ? (
        <div>
          <Searchfield filterText={filterText} onInputChange={handleInputChange} />
          <PlantList plants={filteredPlants} setPlants={setPlants} />
        </div>
      ) : (
        <p>No plant guides found.</p>
      )}
    </>
  )
}

 