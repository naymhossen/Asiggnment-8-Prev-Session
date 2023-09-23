/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import swal from "sweetalert";

const Getphone = ({ phone }) => {
  const { brand_name, image, phone_name, price, rating, id } = phone || {};

  const addToFabourit = () => {
    const addProductArr = [];

    const addProduct = JSON.parse(localStorage.getItem("Product"));
    
    if (!addProduct) {
      addProductArr.push(phone);
      localStorage.setItem("Product", JSON.stringify(addProductArr));
      swal("Good job!", "You clicked the button!", "success");
    } else {
      const isExist = addProduct.find((phone) => phone.id === id);

      if (!isExist) {
        addProductArr.push(...addProduct, phone);
        localStorage.setItem("Product", JSON.stringify(addProductArr));
        swal("Good job!", "You clicked the button!", "success");
      } else {
        swal("Alrady Added!", "You clicked the button!", "warning");
      }
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl mt-5">
        <figure className="px-10 pt-10">
          <img src={image} alt="image" className="rounded-xl h-56" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{brand_name}</h2>
          <p>{phone_name}</p>
          <h3>
            {" "}
            <span>Price:</span> ${price}
          </h3>
          <h2>{rating}</h2>
        </div>
        <Link>
          <button onClick={() => addToFabourit()} className="btn mb-2 w-full btn-warning font-bold">
            Add To Favorite
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Getphone;
