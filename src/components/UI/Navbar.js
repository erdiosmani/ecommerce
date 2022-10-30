import React, {useContext} from "react";
import { BsCart4 } from "react-icons/bs";


function Navbar(props) {

  return (
    <div>
      <nav class="bg-gray-300 shadow">
        <div class="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
          <div class="flex justify-between items-center">
            <div>
              <a
                class="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700"
                href="#"
              >
                Brand
              </a>
            </div>
          </div>
          <div class="md:flex items-center">
            <div class="flex justify-center md:block" >
              <div className="bg-gray-500 flex flex-row justify-center items-center w-[180px] h-12 gap-1 rounded-full cursor-pointer hover:bg-orange-500" onClick={props.onShowCart} >
                <button
                  onClick={props.onShowCart}
                  className="w-[100px] flex text-white font-bold"
                  // class="absolute top-5  right-32  w-24 flex  rounded-full bg-indigo-500 text-white p-1"
                >
                  <BsCart4 className="mt-1 mr-1" /> Your cart
                </button>
                <span className="bg-gray-400 rounded-full w-10 text-center font-bold text-white">{props.cartItemsLength}</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
