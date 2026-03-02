import PlantItem from './PlantItem';

export default function PlantList({ plants, setPlants }) {
  function deleteHandler(id) {
    const confirmDelete = window.confirm("Are you sure you want to delete this plant from your care list?");
    if (confirmDelete) {
      setPlants(plants.filter(plant => plant.id !== id));
    }  
  }
  
  return (
      <>
        {plants.map(plant => (
          <PlantItem 
            key={plant.id}
            plant={plant}
            deleteHandler={deleteHandler}
          />
        ))}
      </>
    )
  }