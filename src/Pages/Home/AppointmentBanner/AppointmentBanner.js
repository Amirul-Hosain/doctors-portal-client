import React from 'react';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';

import doctor from '../../../../src/images/doctor.png'
import bg from '../../../../src/images/appointment-bg.png'
import { Box } from '@mui/system';


const AppointmentBanner = () => {
    const appointmentBg = {
        backgroundImage: `url(${bg})`,
        backgroundColor: 'rgba(63, 65, 93, 0.8 )',
        backgroundBlendMode: 'darken, luminosity',
        marginTop: '170px',
    };
    const buttonStyle = {
        backgroundColor: '#00e5ff',
        color: 'black',
        fontSize: '17px',
        width: '140px',
        height: '40px',
        border: 'none',
        marginTop: '60px'
    }

    return (
        <Box style={appointmentBg}>
            <Container>
                <Grid container spacing={2}>

                    <Grid xs={12} md={6}>
                        <img
                            style={{ width: 'auto', height: '610px', marginTop: '-145px', marginBottom: '-5px' }}
                            src={doctor} alt="" />
                    </Grid>

                    <Grid
                        xs={12} md={6} sx={{ px: 4 }}
                        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', }}
                    >
                        <Typography
                            variant='h6'
                            sx={{ color: '#00e5ff' }}
                            style={{ fontFamily: 'initial' }}>
                            APPOINTMENT
                        </Typography>

                        <Typography
                            variant='h3'
                            sx={{ color: '#ffff', mt: 2, mb: 4 }}
                            style={{ fontFamily: 'initial' }}>
                            Make an Appointment Today
                        </Typography>

                        <Typography
                            variant='p'
                            sx={{ color: 'rgb(249, 249, 249)' }}
                            style={{ fontFamily: 'Verdana', fontSize: '18px', lineHeight: '30px' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos suscipit repellendus labore aspernatur in quae?
                        </Typography> <br />
                        <button style={buttonStyle}>Learn More</button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AppointmentBanner;