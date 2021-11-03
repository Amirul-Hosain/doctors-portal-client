import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import chair from '../../../../src/images/chair.png';
import bg from '../../../../src/images/bg.png';
import Calendar from '../../Shared/Calendar/Calendar';


const AppointmentHeader = ({ date, setDate }) => {
    const appointmentHeaderBg = {
        backgroundImage: `url(${bg})`,
    }
    return (
        <Box style={appointmentHeaderBg} sx={{ flexGrow: 1, height: '450px', pt: '150px' }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}
                        style={{
                            textAlign: 'start', display: 'flex', flexDirection: 'column',

                        }}>
                        <Typography variant='h5' style={{ marginLeft: '20px', fontSize: '35px', marginBottom: '20px' }}>
                            Appointment
                        </Typography>
                        <Box style={{ width: '0px', fontSize: '30px', backgroundColor: 'red' }}>
                            <Calendar date={date} setDate={setDate}></Calendar>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img width='600' src={chair} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AppointmentHeader;