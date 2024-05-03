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
  }, []);

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
                ></BookingRow>)
            }

            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
