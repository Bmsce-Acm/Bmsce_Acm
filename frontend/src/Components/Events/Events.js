import React from 'react';
import Title from "../Utils/Title";
import EventsBanner from './EventsBanner';
import AllEvents from './AllEvents';

const Events = () => {

    return (
        <>
            <Title title="Events" />
            <EventsBanner />
            <AllEvents />
        </>
    );
};

export default Events;