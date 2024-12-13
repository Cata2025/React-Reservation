import { useState } from "react";
import { useNavigate } from "react-router";

function ReservationForm() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    email: "",
  });

  const navigate = useNavigate();

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Reservation Details:", formData);
    localStorage.setItem("datosReserva", formData);
    setSubmitted(true);
    navigate("/");
  };

  return (
    <div>
      <h2>Create a Reservation</h2>
      {submitted ? (
        <div>
          <h3>Reservation Submitted!</h3>
          <p>Name: {formData.name}</p>
          <p>Date: {formData.date}</p>
          <p>Email: {formData.email}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default ReservationForm;
