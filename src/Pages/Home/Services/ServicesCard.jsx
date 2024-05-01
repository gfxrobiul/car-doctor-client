/* eslint-disable react/prop-types */
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const ServicesCard = ( {service} ) => {
    const { title, img, price } = service;

  return (
    <div className="card w-96 h-[380px] bg-base-100 shadow-xl border border-gray-300 interff mt-5 
        hover:scale-105 transition-all">
      <figure className="px-5 pt-5">
        <img src={img} alt="image" className="rounded-xl h-[210px]"/>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions text-[#FF3811] items-center">
        <p className="text-2xl font-semibold">Price: ${price}</p>
        <Link><p><FaArrowRight /></p></Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
