import { Container } from '@mui/material';
import './BannerBottom.css';
import React from 'react';


const BannerBottom = () => {
    return (
        <div>
            <Container>
                <div className='boxes'>
                    <div className='box-container'>
                        <i style={{ fontSize: '70px', color: '#ffff', marginRight: '20px' }} class="far fa-clock"></i>
                        <div>
                            <h6>Opening Hours</h6>
                            <p>sit amet, consectetur adipisicing elit. Omnis, sit?</p>
                        </div>
                    </div>
                    <div className='box-container-middle'>
                        <i style={{ fontSize: '70px', color: '#ffff', marginRight: '20px' }} class="fas fa-map-marker-alt"></i>
                        <div>
                            <h6>Visit Our Location</h6>
                            <p>Panna Chattar, Rajbari</p>
                        </div>
                    </div>
                    <div className='box-container'>
                        <i style={{ fontSize: '70px', color: '#ffff', marginRight: '20px' }} class="fas fa-phone-alt"></i>
                        <div>
                            <h6>Contact Us</h6>
                            <p>01968113280</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default BannerBottom;