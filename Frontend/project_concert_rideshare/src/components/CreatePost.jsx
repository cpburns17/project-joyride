import React, { useState } from 'react';

function CreatePost({ renderTransporterPost }) {
  const [vehicle, setVehicle] = useState('');
  const [seats, setSeats] = useState('');
  const [event, setEvent] = useState('');
  const [location, setLocation] = useState('');
  const [details, setDetails] = useState('');
  const [request, setRequest] = useState('');

  const [offer, setOffer] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const newTransporterForm = {
      vehicle: vehicle,
      seats: seats,
      event: event,
      location: location,
      details: details,
      request: request,
    };

    // Call the function to render the new post locally
    renderTransporterPost(newTransporterForm);

    // Send a post request to the backend route '/transporter_posts'
    fetch('http://127.0.0.1:5555/transporter_posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTransporterForm),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('Post successful:', data);
        // You can perform additional actions if needed
      })
      .catch((error) => console.error('Post error:', error));

    // Clear the form fields after submission
    setVehicle('');
    setSeats('');
    setEvent('');
    setLocation('');
    setDetails('');
    setRequest('');
  }



  return (
    <div className="new-post-form">
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="vehicle" placeholder="vehicle-type" value={vehicle} onChange={(e) => setVehicle(e.target.value)} />
        <input type="text" name="seats" placeholder="seats-type" value={seats} onChange={(e) => setSeats(e.target.value)} />
        <input type="text" name="event" placeholder="event-type" value={event} onChange={(e) => setEvent(e.target.value)} />
        <input type="text" name="location" placeholder="location-type" value={location} onChange={(e) => setLocation(e.target.value)} />
        <input type="text" name="details" placeholder="details-type" value={details} onChange={(e) => setDetails(e.target.value)} />
        <input type="text" name="request" placeholder="request-type" value={request} onChange={(e) => setRequest(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreatePost;
