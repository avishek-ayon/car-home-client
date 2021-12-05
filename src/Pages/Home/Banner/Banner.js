import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import motor from '../../../images/motor.png'
import car from '../../../images/x.png'
import { Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import './Banner.css'
import { Zoom, Roll, Rotate } from "react-awesome-reveal";
const Banner = () => {
    return (
        <Box style={{ background: 'url("https://c4.wallpaperflare.com/wallpaper/369/754/357/pattern-simple-background-wallpaper-preview.jpg")', marginTop: '9px' }} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    textAlign: 'left',

                }}>
                    <Box sx={{ pl: 3 }}>

                        <Typography className="" gutterBottom component="div">
                            <Zoom left cascade>
                                <span className="heading-subName project-title">CAR HOME</span>
                            </Zoom>
                        </Typography>

                        <Typography variant="h5" gutterBottom component="div">
                            <Zoom left cascade>
                                <span className="heading-2nd">A Desired Satisfaction from CAR HOME</span>
                            </Zoom>
                        </Typography>
                        <Typography variant="h5" gutterBottom component="div">
                            <Zoom left cascade>
                                <span className="heading-2nd">More Freedom to Buy</span>
                            </Zoom>
                        </Typography>
                        <Typography variant="h5" gutterBottom component="div">
                            <Zoom left cascade>
                                <span className="heading-subName">Welcome to CAR HOME</span>
                            </Zoom>
                        </Typography>



                        <NavLink style={{ textDecoration: 'none' }} to="/explore"> <Button variant="contained">Explore Products</Button></NavLink>
                    </Box>

                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    {/* <Roll right>
                       
                    </Roll> */}
                    <Rotate top right cascade>
                        <img src={car} alt="" width="100%" height="80%" />
                    </Rotate>

                </Grid>


            </Grid>
        </Box>
    );
};

export default Banner;