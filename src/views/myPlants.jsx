import '../index.css';
import PlantList from '../components/PlantList';
import Searchfield from '../components/SearchField';
import FilterField from '../components/filterField';
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

  const [difficultyFilter, setDifficultyFilter] = useState('');
  const [wateringFilter, setWateringFilter] = useState('');
  const [soilFilter, setSoilFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('filterText', filterText);
  }, [filterText]);

  useEffect(() => {
    localStorage.setItem("plants", JSON.stringify(plants));
  }, [plants]);

  const sortedPlants = plants.toSorted((a, b) => 
    a.commonName.localeCompare(b.commonName, "en", {sensitivity: "base"}));

  const difficultyOptions = ["Beginner", "Intermediate", "Expert"];
  const wateringOptions = [
    "Every 2-3 weeks",
    "Once a week",
    "Every 2-3 days",
    "Keep soil evenly moist",
  ];
  const soilOptions = [
    "Cactus & succulent mix",
    "Aroid mix with bark/perlite",
    "Standard + perlite",
    "Moisture-retentive mix",
    "Orchid bark mix",
    "African violet mix",
  ];
  const typeOptions = [
    "Succulent",
    "Aroid",
    "Flowering foliage",
    "Vining foliage",
    "Cactus",
    "Fern",
  ];

  const filteredPlants = sortedPlants.filter((plant) => {
    const textMatch =
      plant.commonName?.toLowerCase().includes(filterText.toLowerCase()) ||
      plant.scientificName?.toLowerCase().includes(filterText.toLowerCase());

    const difficultyMatch = !difficultyFilter || plant.difficultyLevel === difficultyFilter;
    const wateringMatch = !wateringFilter || plant.wateringSchedule === wateringFilter;
    const soilMatch = !soilFilter || plant.soilComposition === soilFilter;
    const typeMatch = !typeFilter || plant.plantType === typeFilter;

    return textMatch && difficultyMatch && wateringMatch && soilMatch && typeMatch;
  });

  const handleInputChange = (e) => {
    setFilterText(e.target.value);
  }

  return (
    <section className="index-page">
      <div className="index-section">
        <div className="myplants-header-row">
          <h2 className="index-plant-section-title">My plants</h2>
          <button className="btn-primary" onClick={() => navigate("/create")}>
            Create New Care Plan
          </button>
        </div>
        {filteredPlants.length > 0 ? (
          <div className="myplants-content">
            <div className="myplants-search">
              <Searchfield filterText={filterText} onInputChange={handleInputChange} />
            </div>
            <FilterField
              difficultyFilter={difficultyFilter}
              onDifficultyChange={(e) => setDifficultyFilter(e.target.value)}
              wateringFilter={wateringFilter}
              onWateringChange={(e) => setWateringFilter(e.target.value)}
              soilFilter={soilFilter}
              onSoilChange={(e) => setSoilFilter(e.target.value)}
              typeFilter={typeFilter}
              onTypeChange={(e) => setTypeFilter(e.target.value)}
              difficultyOptions={difficultyOptions}
              wateringOptions={wateringOptions}
              soilOptions={soilOptions}
              typeOptions={typeOptions}
            />
            <PlantList plants={filteredPlants} setPlants={setPlants} />
          </div>
        ) : (
          <p>No plant guides found.</p>
        )}
      </div>
    </section>
  )
}

 