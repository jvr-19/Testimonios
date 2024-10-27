import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import CardActions from '@mui/material/CardActions';
import { JavierRR, MyButton, MyFavourite, MyFavouriteBorder } from 'libreria';

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
                <JavierRR text={nombre} variant="h5" />
                <JavierRR text={cargo} variant="body1" />
                <JavierRR text={testimonio} variant="body2" />
            </CardContent>
            <CardActions>
                <IconButton onClick={toggleMeGusta}>
                    {meGusta ? <MyFavourite sx={{ color: '#634FA2' }} /> : <MyFavouriteBorder />}
                </IconButton>
                <MyButton text="Compartir" txtcolor='white' bgcolor='purple' hverbgcolor='blue' hvertxtcolor='black' onClick={() => alert("Testimonio Enviado")}></MyButton>
            </CardActions>
        </Card>
    );
};

export default Testimonio