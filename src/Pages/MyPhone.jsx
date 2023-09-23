import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Getphone from "./Getphone";

const MyPhone = () => {
  const [phone, setPhone] = useState({});

  const { id } = useParams();
  // console.log(id);

  const phones = useLoaderData();

  useEffect(() => {
    const findPhone = phones?.find((phone) => phone.id === id);
    setPhone(findPhone);
  }, [id, phones]);
  //   console.log(phone);
  //brand_name, image, phone_name, price, rating, id

  return (
    <div>
        <Getphone phone={phone}></Getphone>
    </div>
  );
};

export default MyPhone;
