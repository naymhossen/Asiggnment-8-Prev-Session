import { Outlet } from "react-router-dom";
import Navber from "../Header/Navber";

const MainLayout = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;