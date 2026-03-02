import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Create() {
  const [plants, setPlants] = useState(() => {
    const savedPlants = localStorage.getItem("plants");
    return savedPlants ? JSON.parse(savedPlants) : [];
  });

  const [commonName, setCommonName] = useState("");
  const [scientificName, setScientificName] = useState("");
  const [lightNeeds, setLightNeeds] = useState("");
  const [wateringSchedule, setWateringSchedule] = useState("");
  const [soilComposition, setSoilComposition] = useState("");
  const [difficultyLevel, setDifficultyLevel] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("plants", JSON.stringify(plants));
  }, [plants]);

  function createHandler(e) {
    e.preventDefault();
    const highestId = plants.length > 0 ? Math.max(...plants.map(plant => plant.id)) : -1;
    const newPlant = { 
      id: highestId + 1, 
      commonName,
      scientificName,
      lightNeeds,
      wateringSchedule,
      soilComposition,
      difficultyLevel
    };
    setPlants([...plants, newPlant]);
    navigate("/myPlants");
  }

  return (
    <form onSubmit={createHandler}>
      <h2>Create New Plant Guide</h2>
      <div>
        <label htmlFor="commonName">Common Name:</label>
        <input
          type="text"
          id="commonName"
          value={commonName}
          required 
          onChange={(e) => setCommonName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="scientificName">Scientific Name:</label>
        <input
          type="text"
          id="scientificName"
          value={scientificName}
          required 
          onChange={(e) => setScientificName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="lightNeeds">Light Needs:</label>
        <select
          id="lightNeeds"
          value={lightNeeds}
          required 
          onChange={(e) => setLightNeeds(e.target.value)}
        >
          <option value="">Select light level</option>
          <option value="Low light">Low light</option>
          <option value="Medium indirect light">Medium indirect light</option>
          <option value="Bright indirect light">Bright indirect light</option>
          <option value="Full sun / very bright">Full sun / very bright</option>
        </select>
      </div>
      <div>
        <label htmlFor="wateringSchedule">Watering Schedule:</label>
        <select
          id="wateringSchedule"
          value={wateringSchedule}
          required 
          onChange={(e) => setWateringSchedule(e.target.value)}
        >
          <option value="">Select watering</option>
          <option value="Every 2-3 weeks">Every 2-3 weeks</option>
          <option value="Once a week">Once a week</option>
          <option value="Every 2-3 days">Every 2-3 days</option>
          <option value="Keep soil evenly moist">Keep soil evenly moist</option>
        </select>
      </div>
      <div>
        <label htmlFor="soilComposition">Soil Composition:</label>
        <select
          id="soilComposition"
          value={soilComposition}
          required 
          onChange={(e) => setSoilComposition(e.target.value)}
        >
          <option value="">Select soil type</option>
          <option value="Cactus & succulent mix">Cactus & succulent mix</option>
          <option value="Aroid mix with bark/perlite">Aroid mix with bark/perlite</option>
          <option value="Standard + perlite">Standard + perlite</option>
          <option value="Moisture-retentive mix">Moisture-retentive mix</option>
          <option value="Orchid bark mix">Orchid bark mix</option>
          <option value="African violet mix">African violet mix</option>
        </select>
      </div>
      <div>
        <label htmlFor="difficultyLevel">Difficulty Level:</label>
        <select
          id="difficultyLevel"
          value={difficultyLevel}
          required 
          onChange={(e) => setDifficultyLevel(e.target.value)}
        >
          <option value="">Select level</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Expert">Expert</option>
        </select>
      </div>
      <button type="submit">Create Plant Guide</button>
    </form>
  )
}