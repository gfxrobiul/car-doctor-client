import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingRow from "./BookingRow";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [url]);

  const handleDelete = id =>{
    const proced = confirm('Are You sure you want to delete?');
    if (proced) {
        fetch(`http://localhost:5000/bookings/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if (data.deletedCount > 0) {
                alert('Deleted Successfully')
                const remaining = bookings.filter(booking => booking._id !== id);
                setBookings(remaining);
            }
        })
    }
  }
  const handleBookingConfirm = id =>{
    fetch(`http://localhost:5000/bookings/${id}`,{
      method: 'PATCH',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify({status:'confirm'})
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      if (data.modifiedCount > 0) {
        //update state
        const remaining = bookings.filter(booking => booking._id !== id);
        const updated = bookings.find(booking => booking._id === id);
        updated.status= 'confirm'
        const newbookings = [updated, ...remaining];
        setBookings(newbookings);
      }
    })
  }

  return (
    <div>
      <h2 className="text-5xl">Your Bookings: {bookings.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/*HEAD */}
          <thead>
            <tr className="bg-[#FF3811] text-white font-bold text-xl">
              <th>


              </th>
              <th>Service Picture</th>
              <th>Service Name</th>
              <th>Service Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            

            {
                bookings.map(booking => <BookingRow 
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleBookingConfirm={handleBookingConfirm}
                ></BookingRow>)
            }

            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
