import PlantItem from './PlantItem';
import '../index.css';

export default function PlantList({ plants, setPlants, showActions = true }) {
  function deleteHandler(id) {
    if (!setPlants) return;
    const confirmDelete = window.confirm("Are you sure you want to delete this plant from your care list?");
    if (confirmDelete) {
      setPlants(plants.filter(plant => plant.id !== id));
    }  
  }
  
  return (
    <div className="plant-grid">
      {plants.map(plant => (
        <PlantItem 
          key={plant.id}
          plant={plant}
          deleteHandler={showActions ? deleteHandler : undefined}
          showActions={showActions}
        />
      ))}
    </div>
  )
}