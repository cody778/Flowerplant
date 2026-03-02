import { Link } from "react-router-dom"

export default function PlantItem({ plant, deleteHandler }) {
    return (
        <>
            <h3>{plant.commonName}</h3>
            <p><strong>Scientific Name:</strong> {plant.scientificName}</p>
            <p><strong>Light Needs:</strong> {plant.lightNeeds}</p>
            <p><strong>Watering Schedule:</strong> {plant.wateringSchedule}</p>
            <p><strong>Soil Composition:</strong> {plant.soilComposition}</p>
            <p><strong>Difficulty Level:</strong> {plant.difficultyLevel}</p>
            <div>
                <Link to={`/update/${plant.id}`}>
                    <button>Update</button>
                </Link>
                <button onClick={() => deleteHandler(plant.id)}>Delete</button>
            </div>
        </>
    )
}