import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
          <img src={parts} className="w-1/2 absolute right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl"/>
        </div>

        <div className="lg:w-1/2 space-y-5 p-4">
          <h3 className="text-2xl text-[#FF3811] interFF font-bold">About Us</h3>
          <h1 className="text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
          <p className="py-6">There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which dont look even slightly
            believable.</p>
          <p className="py-6">The majority have suffered alteration in some form, by injected
            humour, or randomised words which dont look even slightly
            believable.</p>
          <button className="btn bg-[#FF3811] text-white border-[#FF3811] hover:bg-white hover:text-[#FF3811] 
          hover:font-bold hover:border-[#FF3811] mr-5">Get More Info</button>
        </div>

      </div>
    </div>
  );
};

export default About;
