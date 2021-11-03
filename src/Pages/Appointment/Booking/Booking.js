import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date }) => {
    const { name, space, time } = booking;
    const [openModal, setOpenModal] = React.useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    const buttonStyle = {
        backgroundImage: 'linear-gradient(to right, rgb(23, 215, 192 ), aqua)',
        width: '190px',
        height: '36px',
        fontSize: '16px',
        border: 'none',
        marginTop: '15px',
        borderRadius: '3px'
    }
    return (
        <>
            <Card xs={12} sm={6} md={4} sx={{ margin: '15px 8px', boxShadow: 5, }}>
                <CardActionArea>
                    <CardContent
                        sx={{
                            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                            width: '250px',
                            padding: '20px 40px', margin: '5px',
                        }}>
                        <Typography gutterBottom variant="h5" component="div" sx={{ color: 'rgb(23, 215, 192 )' }}>
                            {name}
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                            {time}
                        </Typography>
                        <Typography variant="p" color="text.secondary" sx={{ fontSize: '16px', marginTop: '8px' }}>
                            {space}
                        </Typography>
                        <button
                            onClick={handleOpenModal}
                            style={buttonStyle}>Book Appointment</button>
                    </CardContent>
                </CardActionArea>
            </Card>

            <BookingModal
                date={date}
                booking={booking}
                openModal={openModal}
                handleOpenModal={handleOpenModal}
                handleCloseModal={handleCloseModal}
            ></BookingModal>
        </>
    );
};

export default Booking;