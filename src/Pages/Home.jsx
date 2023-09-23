import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Header/Banner";
import Phones from "../Components/Phone/Phones";

const Home = () => {

    const phones = useLoaderData();
    // console.log(phones);

    return (
        <div>
           <Banner></Banner>
           <Phones phones={phones}></Phones>
        </div>
    );
};

export default Home;