import '../App.css'
import Searchfield from '../components/SearchField';
import FilterField from '../components/filterField';
import { useState } from "react";


export default function Index() {
  const [filterText, setFilterText] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState('');
  const [wateringFilter, setWateringFilter] = useState('');
  const [soilFilter, setSoilFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');

  const predefinedPlants = [
    {
      id: 1,
      commonName: "Snake Plant",
      scientificName: "Sansevieria trifasciata",
      lightNeeds: "Low to bright indirect light. Avoid harsh midday sun, which can scorch the leaves.",
      wateringSchedule: "Every 2-3 weeks",
      soilComposition: "Cactus & succulent mix",
      difficultyLevel: "Beginner",
      plantType: "Succulent",
      family: "Asparagaceae",
    },
    {
      id: 2,
      commonName: "Monstera Deliciosa",
      scientificName: "Monstera deliciosa",
      lightNeeds: "Bright indirect light",
      wateringSchedule: "Once a week",
      soilComposition: "Aroid mix with bark/perlite",
      difficultyLevel: "Intermediate",
      plantType: "Aroid",
      family: "Araceae",
    },
    {
      id: 3,
      commonName: "Peace Lily",
      scientificName: "Spathiphyllum wallisii",
      lightNeeds: "Low to medium indirect light. Avoid direct sun, which can cause leaf burn.",
      wateringSchedule: "Keep soil evenly moist",
      soilComposition: "Moisture-retentive mix",
      difficultyLevel: "Intermediate",
      plantType: "Flowering foliage",
      family: "Araceae",
    },
    {
      id: 4,
      commonName: "Pothos",
      scientificName: "Epipremnum aureum",
      lightNeeds: "Low to bright indirect light. Very versatile but grows fastest and fullest in bright, indirect light.",
      wateringSchedule: "Every 2-3 days",
      soilComposition: "Standard + perlite",
      difficultyLevel: "Beginner",
      plantType: "Vining foliage",
      family: "Araceae",
    }
  ];

  const generalCareBasics = [
    {
      title: "Light",
      content:
        "Most common houseplants evolved under the canopy of larger trees, so they prefer bright, indirect light rather than harsh direct sun. Place plants near an east- or north-facing window for gentle light, or a bit farther back from a bright south- or west-facing window. Watch the leaves: pale or scorched patches often mean too much light, while leggy, stretched growth usually means too little."
    },
    {
      title: "Water",
      content:
        "Overwatering is the number one cause of houseplant problems. Before you water, insert a finger 23 cm into the soil: if it still feels moist, wait a few days. Water thoroughly until it drains from the bottom of the pot, then discard any excess from the saucer so roots are not sitting in water. In warmer, brighter months plants dry out faster; in winter, they use less water and the soil should stay drier for longer."
    },
    {
      title: "Soil & Pots",
      content:
        "Use a quality potting mix that matches the plant type: airy, chunky mixes for aroids like Monstera, grit and sand for succulents and cacti, and moisture‑retentive but well‑draining mixes for foliage plants. Always choose pots with drainage holes so excess water can escape. Repot every 1–2 years or when roots circle the pot or emerge from the drainage holes."
    },
    {
      title: "Humidity & Temperature",
      content:
        "Most tropical houseplants enjoy temperatures between 18-26°C and appreciate higher humidity than a typical dry room. Keep plants away from cold drafts, radiators, and air conditioners. To raise humidity, group plants together, use a pebble tray with water beneath the pots, or run a small humidifier nearby."
    },
    {
      title: "Feeding & General Health",
      content:
        "During the growing season (spring and summer), feed plants every 4-6 weeks with a balanced, diluted liquid fertilizer, unless the plant has special needs. Trim yellow or damaged leaves to encourage new growth, and rotate pots every few weeks so plants grow evenly towards the light. Regularly check for pests such as spider mites, aphids, or mealybugs and treat early with a gentle insecticidal soap or neem‑oil spray."
    }
  ];

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
  const filteredPlants = predefinedPlants.filter(plant => {
    const textMatch =
      plant.commonName.toLowerCase().includes(filterText.toLowerCase()) ||
      plant.scientificName.toLowerCase().includes(filterText.toLowerCase());

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
    <>
      <section>
        <h2>Welcome to FlowerPlant</h2>
        <p>
          FlowerPlant is your friendly companion for understanding and caring for your indoor plants. 
          Use these ready‑made plant guides to learn what each plant needs and to inspire how you care for 
          your own collection.
        </p>
        <p>
          As a general rule, most houseplants prefer bright, indirect light, evenly moist but well-drained soil, 
          and good airflow around the leaves. Always check the top of the soil before watering, use pots with 
          drainage holes, and adjust care based on the season - plants grow faster and drink more in spring and 
          summer, and slow down in autumn and winter.
        </p>
      </section>

      <section>
        <Searchfield 
          filterText={filterText} 
          onInputChange={handleInputChange}
        />
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

        {filteredPlants.length > 0 ? (
          <div>
            {filteredPlants.map(plant => (
              <article key={plant.id}>
                <h3>{plant.commonName}</h3>
                <p><strong>Scientific Name:</strong> {plant.scientificName}</p>
                <p><strong>Light Needs:</strong> {plant.lightNeeds}</p>
                <p><strong>Watering Schedule:</strong> {plant.wateringSchedule}</p>
                <p><strong>Soil Composition:</strong> {plant.soilComposition}</p>
                <p><strong>Difficulty Level:</strong> {plant.difficultyLevel}</p>
              </article>
            ))}
          </div>
        ) : (
          <p>No matching plant guides found.</p>
        )}
      </section>

      <section>
        <h2>Plant Care Basics</h2>
        <p>
          These principles apply to most indoor plants. Use them together with the specific guides above to
          create a care routine that suits both your plants and your home.
        </p>
        {generalCareBasics.map((topic, index) => (
          <article key={index}>
            <h3>{topic.title}</h3>
            <p>{topic.content}</p>
          </article>
        ))}
      </section>
    </>
  )
}

 