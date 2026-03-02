import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function Update() {
  const { id } = useParams();
  const [plants, setPlants] = useState(() => {
    const savedPlants = localStorage.getItem("plants");
    return savedPlants ? JSON.parse(savedPlants) : [];
  });

  const plant = plants.find(plant => plant.id === Number(id));
  
  const [commonName, setCommonName] = useState("");
  const [scientificName, setScientificName] = useState("");
  const [lightNeeds, setLightNeeds] = useState("");
  const [wateringSchedule, setWateringSchedule] = useState("");
  const [soilComposition, setSoilComposition] = useState("");
  const [difficultyLevel, setDifficultyLevel] = useState("");
  
  let navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("plants", JSON.stringify(plants));
  }, [plants]);

  useEffect(() => {
    if (plant) {
      setCommonName(plant.commonName);
      setScientificName(plant.scientificName);
      setLightNeeds(plant.lightNeeds);
      setWateringSchedule(plant.wateringSchedule);
      setSoilComposition(plant.soilComposition);
      setDifficultyLevel(plant.difficultyLevel);
    }
  }, [plant]);

  function updateHandler(e) {
    e.preventDefault();
    const updatedPlant = { 
      id: Number(id), 
      commonName,
      scientificName,
      lightNeeds,
      wateringSchedule,
      soilComposition,
      difficultyLevel
    };
    setPlants(plants.map((plant) => plant.id === Number(id) ? updatedPlant : plant));
    navigate("/myPlants");
  }

  return (
    <>
      <form onSubmit={updateHandler}>
        <h2>Update Plant Guide</h2>
        <div>
          <label htmlFor="id">ID:</label>
          <input
            type="number"
            id="id"
            value={id}
            disabled
          />
        </div>
        <div>
          <label htmlFor="commonName">Common Name:</label>
          <input
            type="text"
            id="commonName"
            value={commonName}
            onChange={(e) => setCommonName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="scientificName">Scientific Name:</label>
          <input
            type="text"
            id="scientificName"
            value={scientificName}
            onChange={(e) => setScientificName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lightNeeds">Light Needs:</label>
          <textarea
            id="lightNeeds"
            value={lightNeeds}
            onChange={(e) => setLightNeeds(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="wateringSchedule">Watering Schedule:</label>
        <select
          id="wateringSchedule"
          value={wateringSchedule}
          onChange={(e) => setWateringSchedule(e.target.value)}
        >
          <option value="Low - every 2–3 weeks">Low - every 2–3 weeks</option>
          <option value="Moderate - about once a week">Moderate - about once a week</option>
          <option value="High - keep soil evenly moist">High - keep soil evenly moist</option>
        </select>
        </div>
        <div>
          <label htmlFor="soilComposition">Soil Composition:</label>
        <select
          id="soilComposition"
          value={soilComposition}
          onChange={(e) => setSoilComposition(e.target.value)}
        >
          <option value="Cactus & succulent mix">Cactus & succulent mix</option>
          <option value="Aroid mix with bark and perlite">Aroid mix with bark and perlite</option>
          <option value="Standard potting mix with perlite">Standard potting mix with perlite</option>
          <option value="Moisture-retentive mix with peat or coco coir">Moisture-retentive mix with peat or coco coir</option>
        </select>
        </div>
        <div>
          <label htmlFor="difficultyLevel">Difficulty Level:</label>
          <select
            id="difficultyLevel"
            value={difficultyLevel}
            onChange={(e) => setDifficultyLevel(e.target.value)}
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Expert">Expert</option>
          </select>
        </div>
        <button type="submit">Update Plant Guide</button>
      </form>
    </>
  )
}