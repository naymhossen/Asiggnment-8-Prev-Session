/* eslint-disable react/prop-types */
import Phone from "./Phone";

const Phones = ({ phones }) => {
//   console.log(phones);
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-8">All Categories Phones</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 mb-8">
      {
        phones?.map(phone => <Phone key={phone.id} phone={phone}></Phone>)
      }
      </div>
    </div>
  );
};

export default Phones;
