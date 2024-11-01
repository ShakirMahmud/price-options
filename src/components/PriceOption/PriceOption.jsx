
import PropTypes from "prop-types";
import Feature from "../Feature/Feature";
const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className="bg-blue-600 rounded-md p-4 text-white mt-6 flex flex-col h-full">
            <h2 className="text-center pt-8">
                <span className="text-7xl font-extrabold">{price}$</span>
                <span className="text-2xl">/mon</span>
            </h2>
            <h4 className="text-3xl text-center my-8">{name}</h4>
            <div className="pl-6 flex-grow">
            {
                features.map((feature, idx)=> <Feature 
                key={idx}
                feature={feature}></Feature>)
            }
            </div>
            <button className="mt-6 bg-green-600 w-full py-3 font-bold rounded-lg hover:bg-green-900 items-end text-xl">Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object.isRequired
};

export default PriceOption;