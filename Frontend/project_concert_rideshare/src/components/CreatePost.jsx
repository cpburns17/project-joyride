// import React, {useState} from 'react'

// function CreatePost({renderTransporterPost, renderPassengerPost, user}) {
//     console.log(user)
//     const [vehicle, setVehicle] = useState('')
//     const [seats, setSeats] = useState('')
//     const [event, setEvent] = useState('')
//     console.log(event)
//     const [location, setLocation] = useState('')
//     const [details, setDetails] = useState('')
//     const [request, setRequest] = useState('')

//     const [offer, setOffer] = useState('')
//     const [switchPost, setSwitchPost] = useState(true)

//     function handleSubmit(e) {
//         e.preventDefault()

//         const newTransporterForm = {
//             vehicle: vehicle,
//             seats: seats,
//             event: event,
//             location: location,
//             details: details,
//             request: request,
//             user_id: user.id
//         };
//         renderTransporterPost(newTransporterForm)

//         // Send a post request to the backend route '/transporter_posts'
//         fetch('api/transporter_posts', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newTransporterForm),
//         })
//         .then((response) => {
//             if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             return response.json();
//         })
//         .then((data) => {
//             console.log('Post successful:', data);
//             // You can perform additional actions if needed
//         })
//         .catch((error) => console.error('Post error:', error));

//         // Clear the form fields after submission
//         setVehicle('');
//         setSeats('');
//         setEvent('');
//         setLocation('');
//         setDetails('');
//         setRequest('');

//     }

//     function handleSubmit2(e) {
//         e.preventDefault()

//         const newPassengerForm = {
//             offer: offer,
//             event: event,
//             location: location,
//             details: details,
//             request: request,
//             user_id: user.id
//         };
//         renderPassengerPost(newPassengerForm)


//         // Send a post request to the backend route '/transporter_posts'
//         fetch('api/passenger_posts', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newPassengerForm),
//         })
//         .then((response) => {
//             if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             return response.json();
//         })
//         .then((data) => {
//             console.log('Post successful:', data);
//             // You can perform additional actions if needed
//         })
//         .catch((error) => console.error('Post error:', error));

//         // Clear the form fields after submission
//         setOffer('');
//         setEvent('');
//         setLocation('');
//         setDetails('');
//         setRequest('');
//     }


//     function changePost() {
//         setSwitchPost(!switchPost)
//     }

// return (
// <div className='new-post-form'>
//     <h1> Create Post </h1>
//     {switchPost ? ( 
//         <div className='create-post'>
//             <button onClick={changePost}> Passenger </button> 
//             <button> Transporter </button>
//             <p>Transporter Post</p>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="event">Select Event:</label>
//                 <select name="event" value={event} onChange={(e) => setEvent(e.target.value)}>
//                     <option value="Concert">Concert</option>
//                     <option value="Festival">Festival</option>
//                     <option value="Misc">Misc</option>
//                     <option value="Sporting">Sporting</option>
//                 </select>
//                 <input type='text' name='vehicle' placeholder='vehicle' value={vehicle} onChange={(e) => setVehicle(e.target.value)}/>
//                 <input type='text' name='seats' placeholder='seats available' value={seats} onChange={(e) => setSeats(e.target.value)}/>
//                 <input type='text' name='location' placeholder='location' value={location} onChange={(e) => setLocation(e.target.value)}/>
//                 <input type='text' name='details' placeholder='details' value={details} onChange={(e) => setDetails(e.target.value)}/>
//                 <input type='text' name='request' placeholder='special request' value={request} onChange={(e) => setRequest(e.target.value)}/>
//                 <button type='submit'>Submit</button>
//             </form>
//         </div>

//     ) 
// : (
//         <div className='create-post'>
//             <button> Passenger </button>
//             <button onClick={changePost}> Transporter </button> 
//             <p>Passenger Post</p>
//             <form onSubmit={handleSubmit2}>
//                 <label htmlFor="event">Select Event:</label>
//                 <select name="event" value={event} onChange={(e) => setEvent(e.target.value)}>
//                     <option value="Concert">Concert</option>
//                     <option value="Festival">Festival</option>
//                     <option value="Misc">Misc</option>
//                     <option value="Sporting">Sporting</option>
//                 </select>
//                 <input type='text' name='offer' placeholder='offering' value={offer} onChange={(e) => setOffer(e.target.value)}/>
//                 <input type='text' name='location' placeholder='location' value={location} onChange={(e) => setLocation(e.target.value)}/>
//                 <input type='text' name='details' placeholder='details' value={details} onChange={(e) => setDetails(e.target.value)}/>
//                 <input type='text' name='request' placeholder='special request' value={request} onChange={(e) => setRequest(e.target.value)}/>
//                 <button type='submit'>Submit</button>
//             </form>
//         </div>
//     )}

// </div>
// )

// }


// export default CreatePost;




import React, { useState } from "react";

function CreatePost({ renderTransporterPost, renderPassengerPost, user }) {
  const [vehicle, setVehicle] = useState("");
  const [seats, setSeats] = useState("");
  const [event, setEvent] = useState("");
  const [location, setLocation] = useState("");
  const [details, setDetails] = useState("");
  const [request, setRequest] = useState("");

  const [offer, setOffer] = useState("");
  const [switchPost, setSwitchPost] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();

    const newTransporterForm = {
      vehicle: vehicle,
      seats: seats,
      event: event,
      location: location,
      details: details,
      request: request,
      user_id: user.id,
    };
    renderTransporterPost(newTransporterForm);

    // Send a post request to the backend route '/transporter_posts'
    fetch("api/transporter_posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
        console.log("Post successful:", data);
        // You can perform additional actions if needed
      })
      .catch((error) => console.error("Post error:", error));

    // Clear the form fields after submission
    setVehicle("");
    setSeats("");
    setEvent("");
    setLocation("");
    setDetails("");
    setRequest("");
  }

  function handleSubmit2(e) {
    e.preventDefault();

    const newPassengerForm = {
      offer: offer,
      event: event,
      location: location,
      details: details,
      request: request,
      user_id: user.id,
    };
    renderPassengerPost(newPassengerForm);

    // Send a post request to the backend route '/transporter_posts'
    fetch("api/passenger_posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPassengerForm),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Post successful:", data);
        // You can perform additional actions if needed
      })
      .catch((error) => console.error("Post error:", error));

    // Clear the form fields after submission
    setOffer("");
    setEvent("");
    setLocation("");
    setDetails("");
    setRequest("");
  }

  function changePost() {
    setSwitchPost(!switchPost);
  }



  return (
    <div className="new-post-form">
      <h1 className="create-post-h1"> Create Post </h1>
      {switchPost ? (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="col-12 col-sm-8 col-md-6 col-lg-4">
            <div className="create text-center">
              <button onClick={changePost} className="btn btn-primary mb-2">
                {" "}
                Passenger{" "}
              </button>
              <button className="btn btn-primary mb-2 ml-2">
                {" "}
                Transporter{" "}
              </button>
              <p>Transporter Post</p>
              <form onSubmit={handleSubmit} className="p-5">
                <div className="form-group">
                  <label htmlFor="event">Select Event:</label>
                  <select
                    name="event"
                    value={event}
                    onChange={(e) => setEvent(e.target.value)}
                    className="form-control"
                  >
                    <option value="Concert">Concert</option>
                    <option value="Festival">Festival</option>
                    <option value="Misc">Misc</option>
                    <option value="Sporting">Sporting</option>
                  </select>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="request"
                    placeholder="Post Caption"
                    value={request}
                    onChange={(e) => setRequest(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="vehicle"
                    placeholder="vehicle"
                    value={vehicle}
                    onChange={(e) => setVehicle(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="seats"
                    placeholder="seats available"
                    value={seats}
                    onChange={(e) => setSeats(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="location"
                    placeholder="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="details"
                    placeholder="details"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="col-12 col-sm-8 col-md-6 col-lg-4">
            <div className="create text-center">
              <button className="btn btn-primary mb-2"> Passenger </button>
              <button
                onClick={changePost}
                className="btn btn-primary mb-2 ml-2"
              >
                {" "}
                Transporter{" "}
              </button>
              <p>Passenger Post</p>
              <form onSubmit={handleSubmit2} className="p-5">
                <div className="form-group">
                  <label htmlFor="event">Select Event:</label>
                  <select
                    name="event"
                    value={event}
                    onChange={(e) => setEvent(e.target.value)}
                    className="form-control"
                  >
                    <option value="Concert">Concert</option>
                    <option value="Festival">Festival</option>
                    <option value="Misc">Misc</option>
                    <option value="Sporting">Sporting</option>
                  </select>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="request"
                    placeholder="Post Caption"
                    value={request}
                    onChange={(e) => setRequest(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="offer"
                    placeholder="offering"
                    value={offer}
                    onChange={(e) => setOffer(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="location"
                    placeholder="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="details"
                    placeholder="details"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreatePost;
