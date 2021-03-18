import cars from './Cars.json'

const CarDetails = (props) => {
  const car = cars.filter(elt => {
    return elt.id.toString() === props.match.params.id.toString()
  })
  return (
    <div id="details">
      <h1>Car Details Here</h1>
      <p>{car[0].CarMake}</p>
      <p>{car[0].carModel}</p>
      <p>{car[0].CarYear}</p>
    </div>
  );
}

export default CarDetails;
