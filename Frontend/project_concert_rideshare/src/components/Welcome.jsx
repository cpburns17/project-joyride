import React from 'react'

function Welcome() {
    return (
        <div className='welcome-page'>
        <h1 className='welcome-statement'> Welcome to RideShare!</h1>
        <p className='bio'>
            At RideShare, we know how expensive transportation is in NYC. We also know that other ride sharing apps don't always guarantee you'll be traveling with someone who shares a common love for music, sports and other types of events. Our solution to this is to connect drivers and passengers from these inclusive communities, while also making commuting more affordable and fun!
        </p>
        <p className='testimonials'>
            “I was so excited to attend the Grateful Dead concert, but none of my friends were able to go. Lucky for me, I found a ride with some incredible people through ____, and now I have a new group of friends who share the same interest in music as me!” - Kevin, 33             
        </p>
        <p className='testimonials'>
            “I always drive to EZoo from Staten Island, and figured I’d check out ____ to see if there’s anyone on the way who would be willing to pitch in for gas money. I found 2 amazing humans who not only pitched in for gas, but they also bought me drinks! Talk about a win-win!” - Sarah, 22
        </p>
        <p className='testimonials'>
            “My wife and I were looking for someone to sober drive our car to the Mets game last week. Turns out, ___ has plenty of people who are willing to drive for a free ticket!" - Eduardo, 41
        </p>
    </div>
    )

}

export default Welcome