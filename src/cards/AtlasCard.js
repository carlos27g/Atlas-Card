import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import "./AtlasCard.css"
import { Box } from '@mui/system';
import React from 'react'
import { useState } from "react"


const AtlasCard = ({ title, urlImage, modalities, cellsInReference, species }) => { 
    const [swapSide, setSwapSide] = useState(true);
    return (
        <Card sx={{ width: 215, height: 295, }} 
        className={swapSide ? "" : "cardContainer"} onMouseOver={() => setSwapSide(false)} onMouseOut={() => setSwapSide(true)}>

            {swapSide ?

                <CardContent>
                    <Typography gutterBottom variant="Body1" component="div" align='left' fontFamily='arial' /*???*/>
                        <b>{title}</b>
                    </Typography>
                    <CardMedia
                        component="img"
                        height="183"
                        sx={{ width: 183, marginBottom: 1 }}
                        image={urlImage}
                        alt="AtlasCard"
                        align='center'
                    />
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>

                        <Typography variant="caption" color="text.primary" >
                            <b>Modalities: </b> {modalities}
                        </Typography>
                        <Typography variant="caption" color="text.primary" >
                            <b>Cells in Reference: </b>{cellsInReference}
                        </Typography>
                        <Typography variant="caption" color="text.primary" >
                            <b>Species: </b> {species}
                        </Typography>

                    </Box>
                </CardContent>

                :

                <CardActions sx={{ justifyContent: 'center', height: 274 }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-evenly',
                        height: 150
                    }}>
                        <Button variant="outlined" size="small" className="btn" sx={{ width: 100, color: 'white', borderColor: 'white' }}>Map</Button>
                        <Button variant="outlined" size="small" className='btn' sx={{ width: 100, color: 'white', borderColor: 'white' }}>Learn More</Button>
                    </Box>
                </CardActions>

            }
        </Card >
    )
}

export default AtlasCard