import { useEffect, useState } from "react";
import Getphone from "./Getphone";

const Favorites = () => {
  const [favourit, setFavourit] = useState([]);
  const [noFound, setNoFound] = useState("");

  useEffect(() => {
    const addProduct = JSON.parse(localStorage.getItem("Product"));

    if (addProduct) {
      setFavourit(addProduct);
    } else {
      setNoFound("No Data Found");
    }
  }, []);
  console.log(favourit);

  return (
    <div className="flex justify-center h-screen items-center">
      {noFound ? <p>{noFound}</p> : 
      <div className="grid grid-cols-3 gap-5">
        {
            favourit.map( phone => <Getphone key={phone.id} phone={phone}></Getphone>)
        }
      </div>
      }
    </div>
  );
};

export default Favorites;
