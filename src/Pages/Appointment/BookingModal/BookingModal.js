import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ date, handleCloseModal, openModal, booking }) => {
    const { name, time } = booking;

    const handleBookingSubmit = e => {
        alert('sunmitting')


        // collect data and send to database
        handleCloseModal();
        e.preventDefault();
    }

    return (

        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openModal}
            onClose={handleCloseModal}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openModal}>
                <Box sx={style}
                    style={{ width: '600px', padding: '50px 70px', border: 'none', borderRadius: '25px' }}>

                    <Typography variant="h6"
                        style={{
                            textAlign: 'center', color: 'rgb(23, 215, 192 )',
                            marginBottom: '30px', fontSize: '30px'
                        }}>
                        {name}
                    </Typography>
                    <form onClick={handleBookingSubmit}>
                        <TextField
                            disabled
                            sx={{ width: '100%', }}
                            id="outlined-size-small"
                            defaultValue={time}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '100%', height: '25%', mt: 1, }}
                            id="outlined-size-small"
                            placeholder="Your Name"
                            size="small"
                        />
                        <TextField
                            sx={{ width: '100%', height: '25%', mt: 1, }}
                            id="outlined-size-small"
                            placeholder="Phone Number"
                            size="small"
                        />
                        <TextField
                            sx={{ width: '100%', height: '25%', mt: 1, }}
                            id="outlined-size-small"
                            placeholder="Email"
                            size="small"
                        />
                        <TextField
                            disabled
                            sx={{ width: '100%', height: '25%', mt: 1, }}
                            id="outlined-size-small"
                            placeholder={date}
                            size="small"
                        />
                        <button
                            type='submit'
                            style={{
                                float: 'right', marginTop: '20px',
                                backgroundImage: 'linear-gradient(to right, rgb(23, 215, 192 ), aqua)',
                                width: '150px', color: 'white', height: '38px', fontWeight: 'bold', fontSize: '16px', borderRadius: '2px', border: 'none'
                            }}
                        >SUBMIT</button>
                    </form>
                </Box>
            </Fade>
        </Modal >
    );
};

export default BookingModal;