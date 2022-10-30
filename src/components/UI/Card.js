import React from "react";

function Card({ details,setCartItems }) {

  return (
    <div>
      <div className="max-w-xs text-white rounded-2xl shadow-lg my-2 bg-gray-500 ">
        <img
          className="w-full bg-gray-800 rounded-2xl"
          src={details.image}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4 ">
          <div className="font-bold text-xl mb-2">{details.title}</div>
          <p className="text-grey-darker text-base">{details.description}...</p>
        </div>
        <div className="px-6 py-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-white rounded" onClick={()=>setCartItems(details)}>
            Add to cart
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default Card;
