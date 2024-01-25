import React, {useState} from 'react'

function CreatePost({renderTransporterPost, renderPassengerPost, user}) {
    const [vehicle, setVehicle] = useState('')
    const [seats, setSeats] = useState('')
    const [event, setEvent] = useState('')
    const [location, setLocation] = useState('')
    const [details, setDetails] = useState('')
    const [request, setRequest] = useState('')

    const [offer, setOffer] = useState('')
    const [switchPost, setSwitchPost] = useState(true)

    function handleSubmit(e) {
        e.preventDefault()

        const newTransporterForm = {
            vehicle: vehicle,
            seats: seats,
            event: event,
            location: location,
            details: details,
            request: request,
            user_id: user.id,
        };
        renderTransporterPost(newTransporterForm)

        // Send a post request to the backend route '/transporter_posts'
        fetch('api/transporter_posts', {
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

    function handleSubmit2(e) {
        e.preventDefault()

        const newPassengerForm = {
            offer: offer,
            event: event,
            location: location,
            details: details,
            request: request,
            user_id: user.id,
        };
        renderPassengerPost(newPassengerForm)


        // Send a post request to the backend route '/transporter_posts'
        fetch('api/passenger_posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
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
            console.log('Post successful:', data);
            // You can perform additional actions if needed
        })
        .catch((error) => console.error('Post error:', error));

        // Clear the form fields after submission
        setOffer('');
        setEvent('');
        setLocation('');
        setDetails('');
        setRequest('');
    }


    function changePost() {
        setSwitchPost(!switchPost)
    }

return (
<div className='new-post-form'>
    <h1 className='create-post-h1'> Create Post </h1>
    {switchPost ? ( 
        <div className='create' >
            <button onClick={changePost}> Passenger </button> 
            <button> Transporter </button>
            <p>Transporter Post</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="event">Select Event:</label>
                    <select name="event" value={event} onChange={(e) => setEvent(e.target.value)}>
                        <option value="Concert">Concert</option>
                        <option value="Festival">Festival</option>
                        <option value="Misc">Misc</option>
                        <option value="Sporting">Sporting</option>
                    </select>  
                <input type='text' name='request' placeholder='Post Caption' value={request} onChange={(e) => setRequest(e.target.value)}/>
                <input type='text' name='vehicle' placeholder='vehicle' value={vehicle} onChange={(e) => setVehicle(e.target.value)}/>
                <input type='text' name='seats' placeholder='seats available' value={seats} onChange={(e) => setSeats(e.target.value)}/>              
                <input type='text' name='location' placeholder='location' value={location} onChange={(e) => setLocation(e.target.value)}/>
                <input type='text' name='details' placeholder='details' value={details} onChange={(e) => setDetails(e.target.value)}/>
                <button type='submit'>Submit</button>
            </form>
        </div>

    ) 
: (
        <div className='create'>
            <button> Passenger </button>
            <button onClick={changePost}> Transporter </button> 
            <p>Passenger Post</p>
            <form onSubmit={handleSubmit2}>
                <label htmlFor="event">Select Event:</label>
                    <select name="event" value={event} onChange={(e) => setEvent(e.target.value)}>
                        <option value="Concert">Concert</option>
                        <option value="Festival">Festival</option>
                        <option value="Misc">Misc</option>
                        <option value="Sporting">Sporting</option>
                    </select>
                <input type='text' name='request' placeholder='Post Caption' value={request} onChange={(e) => setRequest(e.target.value)}/>
                <input type='text' name='offer' placeholder='offering' value={offer} onChange={(e) => setOffer(e.target.value)}/>              
                <input type='text' name='location' placeholder='location' value={location} onChange={(e) => setLocation(e.target.value)}/>
                <input type='text' name='details' placeholder='details' value={details} onChange={(e) => setDetails(e.target.value)}/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )}

</div>
)

}


export default CreatePost;


// {combinedPosts.map((post, index) => ( 
//     <div key={index}>
//         {post.type === "transporter" ? (
//             <>
            
//             <h2>Transporter</h2>
//             <p>Vehicle: {post.vehicle}</p>
//             <p>Seats: {post.seats}</p>
//             <p>Event: {post.event}</p>
//             <p>Location: {post.location}</p>
//             <p>Details: {post.details}</p>
//             <p>Request: {post.request}</p>
//             </>
//         ) : (
//             <>
//             <h2>Passenger</h2>
//             <p>Offer: {post.offer}</p>
//             <p>Event: {post.event}</p>
//             <p>Location: {post.location}</p>
//             <p>Details: {post.details}</p>
//             <p>Request: {post.request}</p>
//             </>
//         )}
//     </div>
// ))}