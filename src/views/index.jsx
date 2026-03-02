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
    <div className="app-container">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
          background: linear-gradient(135deg, #e8f5e9 0%, #e0f7fa 100%);
          color: #1b5e20;
          line-height: 1.6;
        }

        .app-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 2rem;
        }

        h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #2e7d32;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #00695c;
          margin-bottom: 0.75rem;
        }

        section {
          margin-bottom: 4rem;
        }

        /* Hero Section */
        section:first-child {
          background: linear-gradient(135deg, #4caf50 0%, #00bcd4 100%);
          padding: 3rem;
          border-radius: 24px;
          box-shadow: 0 8px 32px rgba(46, 125, 50, 0.2);
          text-align: center;
          color: white;
        }

        section:first-child h2 {
          color: white;
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        section:first-child p {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.95);
          max-width: 900px;
          margin: 0 auto 1.5rem;
          line-height: 1.8;
        }

        /* Plant Grid */
        .plants-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .plant-card {
          background: white;
          border-radius: 20px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0, 150, 136, 0.15);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 2px solid transparent;
          position: relative;
          overflow: hidden;
        }

        .plant-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 6px;
          background: linear-gradient(90deg, #4caf50, #00bcd4, #26a69a);
          border-radius: 20px 20px 0 0;
        }

        .plant-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(0, 150, 136, 0.25);
          border-color: #26a69a;
        }

        .plant-card h3 {
          font-size: 1.75rem;
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
          color: #00695c;
        }

        .plant-card .scientific-name {
          font-style: italic;
          color: #00897b;
          font-size: 0.95rem;
          margin-bottom: 1.5rem;
          opacity: 0.9;
        }

        .plant-info {
          margin: 0.75rem 0;
        }

        .plant-info strong {
          color: #2e7d32;
          font-weight: 600;
          display: inline-block;
          min-width: 140px;
        }

        .difficulty-badge {
          display: inline-block;
          padding: 0.4rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-top: 0.5rem;
        }

        .difficulty-badge.beginner {
          background: #c8e6c9;
          color: #2e7d32;
        }

        .difficulty-badge.intermediate {
          background: #b2ebf2;
          color: #00695c;
        }

        .difficulty-badge.expert {
          background: #ffccbc;
          color: #d84315;
        }

        /* Care Basics Cards */
        .care-basics-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .care-card {
          background: white;
          border-radius: 20px;
          padding: 2rem 2.5rem;
          box-shadow: 0 4px 16px rgba(76, 175, 80, 0.12);
          border-left: 6px solid #4caf50;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .care-card:nth-child(2) {
          border-left-color: #00bcd4;
        }

        .care-card:nth-child(3) {
          border-left-color: #26a69a;
        }

        .care-card:nth-child(4) {
          border-left-color: #66bb6a;
        }

        .care-card:nth-child(5) {
          border-left-color: #00acc1;
        }

        .care-card:hover {
          box-shadow: 0 8px 28px rgba(76, 175, 80, 0.2);
          transform: translateX(8px);
        }

        .care-card h3 {
          margin-bottom: 1rem;
          font-size: 1.6rem;
        }

        .care-card p {
          color: #37474f;
          line-height: 1.8;
          font-size: 1.05rem;
        }

        /* Filter Section */
        section:nth-child(2) {
          background: white;
          padding: 2.5rem;
          border-radius: 24px;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
        }

        /* No Results Message */
        .no-results {
          text-align: center;
          padding: 3rem;
          background: white;
          border-radius: 20px;
          color: #00695c;
          font-size: 1.2rem;
          box-shadow: 0 4px 16px rgba(0, 150, 136, 0.1);
        }

        /* Care Basics Section */
        section:last-child {
          background: white;
          padding: 3rem;
          border-radius: 24px;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
        }

        section:last-child > p {
          text-align: center;
          color: #546e7a;
          font-size: 1.1rem;
          max-width: 800px;
          margin: 0 auto 2rem;
          line-height: 1.8;
        }

        @media (max-width: 768px) {
          .app-container {
            padding: 1rem;
          }

          .plants-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          h2 {
            font-size: 2rem;
          }

          section:first-child h2 {
            font-size: 2.2rem;
          }

          .care-card {
            padding: 1.5rem;
          }
        }
      `}</style>

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
          <div className="plants-grid">
            {filteredPlants.map(plant => (
              <article key={plant.id} className="plant-card">
                <h3>{plant.commonName}</h3>
                <p className="scientific-name">{plant.scientificName}</p>
                <div className="plant-info">
                  <strong>Light Needs:</strong> {plant.lightNeeds}
                </div>
                <div className="plant-info">
                  <strong>Watering:</strong> {plant.wateringSchedule}
                </div>
                <div className="plant-info">
                  <strong>Soil:</strong> {plant.soilComposition}
                </div>
                <div className="plant-info">
                  <strong>Type:</strong> {plant.plantType}
                </div>
                <div className="plant-info">
                  <strong>Difficulty:</strong>
                  <span className={`difficulty-badge ${plant.difficultyLevel.toLowerCase()}`}>
                    {plant.difficultyLevel}
                  </span>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="no-results">No matching plant guides found.</p>
        )}
      </section>

      <section>
        <h2>Plant Care Basics</h2>
        <p>
          These principles apply to most indoor plants. Use them together with the specific guides above to
          create a care routine that suits both your plants and your home.
        </p>
        <div className="care-basics-container">
          {generalCareBasics.map((topic, index) => (
            <article key={index} className="care-card">
              <h3>{topic.title}</h3>
              <p>{topic.content}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
