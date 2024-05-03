import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const BookService = () => {
    const service = useLoaderData();
    const {title, _id, price, img } = service; 
    const {user} = useContext(AuthContext);

    const handleBookService = event =>{
        event.preventDefault();
    
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const booking ={
            customerName: name,
            email,
            img,
            date,
            service: title,
            service_id: _id,
            price: price
        }
        console.log(booking);
        fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if (data.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Service added successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })

    }
    return (
        <div className="container mx-auto lg:px-20 px-2">
        <h2 className="text-3xl text-[#FF3811] text-center">Book Services: {title}</h2>

  <form 
  onSubmit={handleBookService}
  className="card-body">
   <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
   <div className="form-control">
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input type="text" name="name" defaultValue={user?.displayName} placeholder="Your Name" className="input input-bordered" required />
    </div>

    <div className="form-control">
      <label className="label">
        <span className="label-text">Date</span>
      </label>
      <input type="date" name="date" className="input input-bordered" required />
    </div>

    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" name="email" defaultValue={user?.email} placeholder="Your Email" className="input input-bordered" required />
    </div>

    <div className="form-control">
      <label className="label">
        <span className="label-text">Due amount</span>
      </label>
      <input type="text" defaultValue={'$' + price} className="input input-bordered" required />
    </div>
   </div>

    <div className="form-control mt-6">
    <input type="submit" name="" id="" value="Order Confirm" className='btn bg-[#FF3811] text-white border-[#FF3811]
     hover:bg-white hover:text-[#FF3811] hover:font-bold hover:border-[#FF3811]' />
    </div>
  </form>
</div>
    );
};

export default BookService;