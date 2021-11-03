import React from 'react';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: 'Teath Orthodontics',
        time: '8:00am - 9:00am',
        space: '10 Spaces Available'
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '10:05am - 11:30am',
        space: '10 Spaces Available'
    },
    {
        id: 3,
        name: 'Teath Cleaning',
        time: '5:00pm - 6:30pm',
        space: '10 Spaces Available'
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '7:00am - 8:30am',
        space: '10 Spaces Available'
    },
    {
        id: 5,
        name: 'Teath Orthodontics',
        time: '8:00am - 9:00am',
        space: '10 Spaces Available'
    },
    {
        id: 6,
        name: 'Cosmetic Dentistry',
        time: '10:00am - 11:30am',
        space: '10 Spaces Available'
    }
];


const AvailableAppointments = ({ date }) => {
    return (
        <Container sx={{ marginTop: '150px' }}>

            <h2
                style={{ color: 'rgb(23, 215, 192 )', marginBottom: '50px', textAlign: 'center' }}>
                Available Appointments on {date.toDateString()}</h2>
            <Grid container spacing={1} sx={{
                display: 'flex', justifyContent: 'center',
            }}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointments;