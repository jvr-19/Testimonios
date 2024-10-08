import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CardActions from '@mui/material/CardActions';

function Testimonio ({ nombre, imagen, alt, testimonio, cargo }) {
    const [meGusta, setMeGusta] = useState(false);

    const toggleMeGusta = () => {
        setMeGusta(!meGusta);
        console.log(meGusta);
    };

    return (
        <Card sx={{ width: 808, margin: '20px auto' }}>
            <CardMedia
                component="img"
                height="408"
                image={imagen}
                alt={alt}
            />
            <CardContent>
                <Typography variant="h5" align='center'>
                    {nombre}
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: 2 }} align='center'>
                    {cargo}
                </Typography>
                <Typography variant="body2" align='justify'>
                    {testimonio}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton onClick={toggleMeGusta}>
                    {meGusta ? <FavoriteIcon sx={{ color: '#634FA2' }} /> : <FavoriteBorderIcon />}
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default Testimonio