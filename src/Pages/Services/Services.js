import React from 'react';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';

// import fluoride from '../../../images/fluoride.png'
import fluoride from '../../../src/images/fluoride.png'
import cavity from '../../../src/images/cavity.png'
import whitening from '../../../src/images/whitening.png'
import Service from '../Home/Service/Service';
import { Container, Typography } from '@mui/material';


const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam neque ducimus at nulla fugiat perspiciatis qui, asperiores aut architecto cum.',
        img: fluoride,
    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam neque ducimus at nulla fugiat perspiciatis qui, asperiores aut architecto cum.',
        img: cavity,
    },
    {
        name: 'Teath Whitening',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam neque ducimus at nulla fugiat perspiciatis qui, asperiores aut architecto cum.',
        img: whitening,
    }
];


const Services = () => {
    return (
        <Box sx={{ flexGrow: 1, }} >
            {/* <Container> */}
            <Typography gutterBottom variant="p" sx={{ textAlign: 'center', color: '#00e5ff', fontWeight: 700 }} component="div">
                OUR SERVICES
            </Typography>
            <Typography gutterBottom variant="h4" sx={{ textAlign: 'center', my: 4 }} component="div">
                Services We Provide
            </Typography>
            <Grid
                sx={{ display: 'flex', justifyContent: 'center' }}
                container
                spacing={{ ms: 4 }}
                columns={{ xs: 4, sm: 4, md: 4 }}>
                {
                    services.map(service => <Service
                        key={service.name}
                        service={service}
                    >
                    </Service>)
                }
            </Grid>
            {/* </Container> */}
        </Box >
    );
};

export default Services;