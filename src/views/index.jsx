import '../index.css';
import Searchfield from '../components/SearchField';
import FilterField from '../components/filterField';
import PlantList from '../components/PlantList';
import { useState } from "react";
import plant1Img from '../images/Plant 1.jpg';
import plant2Img from '../images/Plant 2.jpg';
import plant3Img from '../images/Plant 3.jpg';
import plant4Img from '../images/Plant 4.jpg';
import heroFoliage from '../images/Background Foliage.jpg';

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
      imageUrl: plant1Img,
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
      imageUrl: plant2Img,
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
      imageUrl: plant3Img,
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
      imageUrl: plant4Img,
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
    <div className="index-page">
      <div className="index-page-inner">
        <section
          className="index-hero-band"
          style={{ '--hero-image': `url(${heroFoliage})` }}
        >
          <div className="index-hero-band-inner">
            <div className="index-hero-card">
              <h2 className="index-hero-title">
                Welcome to <span className="index-hero-highlight">FlowerPlant</span>
              </h2>
              <p className="index-hero-body">
                FlowerPlant is your friendly companion for understanding and caring for your indoor plants.
                Use these ready-made plant guides to learn what each plant needs and to inspire how you care for
                your own collection.
              </p>
              <p className="index-hero-body-muted">
                As a general rule, most houseplants prefer bright, indirect light, evenly moist but well-drained soil,
                and good airflow around the leaves. Always check the top of the soil before watering, use pots with
                drainage holes, and adjust care based on the season - plants grow faster and drink more in spring and
                summer, and slow down in autumn and winter.
              </p>
            </div>
          </div>
        </section>

        <section className="index-section">
          <div className="index-controls-card">
            <div className="index-controls-header">
              <div>
                <h3 className="index-controls-title">Explore plant guides</h3>
                <p className="index-controls-subtitle">
                  Search by name and refine by difficulty, watering, soil, and type.
                </p>
              </div>
              <div className="index-pill">
                {filteredPlants.length} guide{filteredPlants.length === 1 ? '' : 's'} visible
              </div>
            </div>

            <div className="index-controls-fields">
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
            </div>
          </div>

          {filteredPlants.length > 0 ? (
            <>
              <div className="index-plant-header-row">
                <h2 className="index-plant-section-title">Plant library</h2>
              </div>
              <PlantList plants={filteredPlants} showActions={false} />
            </>
          ) : (
            <div className="index-empty-state">
              No matching plant guides found. Try clearing a few filters or
              searching by a broader name.
            </div>
          )}
        </section>

        <section className="index-section index-care-section">
          <h2 className="index-care-title">Plant care basics</h2>
          <p className="index-care-intro">
            These principles apply to most indoor plants. Pair them with the plant-specific
            guides above to create a care routine that fits both your plants and your home.
          </p>

          <div className="index-care-stack">
            {generalCareBasics.map((topic, index) => (
              <article key={index} className="index-care-card">
                <div className="index-care-label">{topic.title}</div>
                <div className="index-care-body">{topic.content}</div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
