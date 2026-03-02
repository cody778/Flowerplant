import { Link } from "react-router-dom"

export default function PlantItem({ plant, deleteHandler, showActions = true }) {
    return (
        <article className="plant-card">
            {plant.imageUrl && (
                <div className="plant-card-media">
                    <img
                        className="plant-card-img"
                        src={plant.imageUrl}
                        alt={plant.commonName}
                        loading="lazy"
                    />
                </div>
            )}
            <div className="plant-card-header">
                <h3 className="plant-card-name">{plant.commonName}</h3>
                <p className="plant-card-meta">
                    {plant.difficultyLevel}{plant.plantType ? ` • ${plant.plantType}` : ''}
                </p>
            </div>
            <p className="plant-card-scientific">
                {plant.scientificName}
            </p>
            <p className="plant-card-field">
                <span className="plant-card-field-label">Light:</span> {plant.lightNeeds}
            </p>
            <p className="plant-card-field">
                <span className="plant-card-field-label">Water:</span> {plant.wateringSchedule}
            </p>
            <p className="plant-card-field">
                <span className="plant-card-field-label">Soil:</span> {plant.soilComposition}
            </p>
            {showActions && deleteHandler && (
                <div className="plant-card-actions">
                    <Link to={`/update/${plant.id}`}>
                        <button className="btn-secondary">Update</button>
                    </Link>
                    <button className="btn-danger" onClick={() => deleteHandler(plant.id)}>
                        Delete
                    </button>
                </div>
            )}
        </article>
    )
}