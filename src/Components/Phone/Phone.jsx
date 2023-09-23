import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Phone = ({ phone }) => {
//   console.log(phone);
const {brand_name, image, phone_name, price, rating, id} = phone || {};
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img 
            src={image}
            alt="image"
            className="rounded-xl h-56"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{brand_name}</h2>
          <p>{phone_name}</p>
          <h3> <span>Price:</span> ${price}</h3>
          <h2>{rating}</h2>
        </div>
            <Link to={`/phone/${id}`}><button className="btn mb-5 w-9/12 mx-auto btn-warning font-bold">Favorite</button></Link>
      </div>
    </div>
  );
};

export default Phone;
