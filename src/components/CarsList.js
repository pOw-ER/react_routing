import CarsItem from './CarsItem';
import cars from './Cars.json'


const CarsList = () => {
  return (
    <section id="carsSection">
      {cars.map(car => <CarsItem
        key={car.id}
        marke={car.CarMake}
        model={car.carModel}
        year={car.CarYear}
        id={car.id}
      />)}
    </section>

  );
}

export default CarsList;
