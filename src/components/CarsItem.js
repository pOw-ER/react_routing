import { Link } from 'react-router-dom'

const CarsItem = (props) => {
  return (
    <div className="card">
      <img src="/car.jpg" alt="Avatar" />
      <div className="container">
        <h4><b>{props.marke}</b></h4>
        <p>Model : {props.model}</p>
        <p>Year : {props.year}</p>
        <div>
          <Link to={`/cars/${props.id}`}>See More</Link>
        </div>
      </div>
    </div>
  );
}

export default CarsItem;
