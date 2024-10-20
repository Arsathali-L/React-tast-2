
import { Link } from "react-router-dom";

const Header = ({ cartLength, warn }) => {
  return (
    <div className="flex justify-between items-center p-8 pr-16  bg-opacity-65 max-md:gap-3  max-md:p-4 ">
      <div className="text-3xl pl-5 font-bold text-red-600">
        Ali Baba Shoping
      </div>
      {warn && (
        <div className="text-red-500 text-2xl max-md:text-xl font-bold">
          Already Added
        </div>
      )}
      <Link to="/cart">
        <div className="flex reltive justify-center items-center max-md:gap-1  ">
          
          <span className="text-2xl font-bold absolute top-[36%] text-[#124216] max-md:text-xl max-md:top-[30%]     ">
            {cartLength} Cart 
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Header;