import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import chair from '../../../../src/images/chair.png';
import bg from '../../../../src/images/bg.png';
import { Container, Typography } from '@mui/material';

const bannerBg = {
    backgroundImage: `url(${bg})`,
}

const Banner = () => {
    const buttonStyle = {
        backgroundColor: '#00e5ff',
        color: 'black',
        fontSize: '17px',
        width: '160px',
        height: '40px',
        border: 'none',
        marginTop: '60px'
    }
    return (
        <Box style={bannerBg}>
            <Container>
                <Grid container rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '100px 0px 200px 0px' }}
                >
                    <Grid md={5} xs={12}
                        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginRight: '20px' }}
                    >

                        <Typography variant='h1'
                            style={{ fontFamily: 'initial', fontSize: '40px', marginBottom: '30px' }}
                        >
                            Your New Smile Starts Here
                        </Typography>


                        <Typography variant='p'
                            // sx={{ color: 'rgb(249, 249, 249)' }}
                            style={{
                                color: 'gray', fontFamily: 'Verdana',
                                fontWeight: '200', fontSize: '18px', lineHeight: '30px'
                            }}
                        >
                            Quod impedit soluta eius fugiat consequuntur ratione asperiores, nihil repellendus dignissimos repellendus dignissimos perferendis?
                        </Typography>

                        <button style={buttonStyle}>Get Appoinment</button>
                    </Grid>

                    {/* banner image */}
                    <Grid md={6} xs={12}>
                        <img width='auto' height='360' src={chair} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Banner;