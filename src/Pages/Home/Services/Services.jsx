import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data =>{
            setServices(data);
        })
    }, [])

    return (
        <div className="my-16">
            <div className="text-center">
            <h3 className="text-2xl text-[#FF3811] interFF font-bold interff">Our Serives</h3>
            <h1 className="text-5xl font-bold interff">Our Service Area</h1>
            <p>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not 
              look even slightly believable. </p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6  lg:px-8 px-2">
                {
                    services.map(service => <ServicesCard 
                    key={service._id}
                    service={service}
                    ></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;