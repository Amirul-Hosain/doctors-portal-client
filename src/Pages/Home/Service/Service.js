import React from 'react';
import Grid from '@mui/material/Grid';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';



const Service = (props) => {
    const { img, name, description } = props.service
    return (
        <div>
            <Grid xs={4} sm={4} md={4}>
                <Card sx={{ maxWidth: 320, boxShadow: 0, border: 0 }}
                    style={{ textAlign: 'center', marginTop: '20px' }}
                >
                    <CardActionArea sx={{ py: 2 }}>
                        <CardMedia
                            component="img"
                            style={{ width: 'auto', height: '60px', margin: 'auto' }}
                            image={img}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5"
                                component="div">
                                {name}
                            </Typography>
                            <Typography
                                style={{ marginTop: '20px' }}
                                variant="body2" color="text.secondary">
                                {description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </div>
    );
};

export default Service;