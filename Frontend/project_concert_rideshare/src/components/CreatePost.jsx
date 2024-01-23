import React, {useState} from 'react'

function CreatePost({renderTransporterPost, renderPassengerPost}) {
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
        }
        renderTransporterPost(newTransporterForm)

        const newPassengerForm = {
            offer: offer,
            event: event,
            location: location,
            details: details,
            request: request,
        }
        renderPassengerPost(newPassengerForm)
    }


    function changePost() {
        setSwitchPost(!switchPost)
    }

return (
<div className='new-post-form'>
    <h1> Create Post </h1>
    {switchPost ? ( 
        <div className='create-post'>
            <button onClick={changePost}> Switch </button> 
            <p>Transporter Post</p>
            <form onSubmit={handleSubmit}>
                <input type='text' name='vehicle' placeholder='vehicle-type' value={vehicle} onChange={(e) => setVehicle(e.target.value)}/>
                <input type='text' name='seats' placeholder='seats-type' value={seats} onChange={(e) => setSeats(e.target.value)}/>
                <input type='text' name='event' placeholder='event-type' value={event} onChange={(e) => setEvent(e.target.value)}/>
                <input type='text' name='location' placeholder='location-type' value={location} onChange={(e) => setLocation(e.target.value)}/>
                <input type='text' name='details' placeholder='details-type' value={details} onChange={(e) => setDetails(e.target.value)}/>
                <input type='text' name='request' placeholder='request-type' value={request} onChange={(e) => setRequest(e.target.value)}/>
                <button type='submit'>Submit</button>
            </form>
        </div>

    ) 
: (
        <div className='create-post'>
            <button onClick={changePost}> Switch </button> 
            <p>Passenger Post</p>
            <form onSubmit={handleSubmit}>
                <input type='text' name='offer' placeholder='offer-type' value={offer} onChange={(e) => setOffer(e.target.value)}/>
                <input type='text' name='event' placeholder='event-type' value={event} onChange={(e) => setEvent(e.target.value)}/>
                <input type='text' name='location' placeholder='location-type' value={location} onChange={(e) => setLocation(e.target.value)}/>
                <input type='text' name='details' placeholder='details-type' value={details} onChange={(e) => setDetails(e.target.value)}/>
                <input type='text' name='request' placeholder='request-type' value={request} onChange={(e) => setRequest(e.target.value)}/>
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