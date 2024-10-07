import React, { useState } from 'react';
import Testimonios from './components/Testimonios'
import Container from '@mui/material/Container';

function App() {
  const testimonios = [
    {
      id: 1,
      nombre: 'Ana Pérez',
      imagen: './ana.jpg',
      alt: 'Foto de Ana Pérez',
      testimonio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      cargo: 'Desarrolladora Frontend'
    },
    {
      id: 2,
      nombre: 'Juan López',
      imagen: './juan.jpg',
      alt: 'Foto de Juan López',
      testimonio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      cargo: 'Ingeniero de Software'
    },
    {
      id: 3,
      nombre: 'Laura García',
      imagen: './laura.jpg',
      alt: 'Foto de Laura García',
      testimonio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      cargo: 'Desarrolladora Fullstack'
    },
    {
      id: 4,
      nombre: 'Carlos Rodríguez',
      imagen: './carlos.jpg',
      alt: 'Foto de Carlos Rodríguez',
      testimonio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      cargo: 'Tech Lead'
    }
  ];

  return (
    <>
      <Container>
        {testimonios.map((testimonio) => (
          <Testimonios
            key={testimonio.id}
            nombre={testimonio.nombre}
            imagen={testimonio.imagen}
            alt={testimonio.alt}
            testimonio={testimonio.testimonio}
            cargo={testimonio.cargo}
          />
        ))}
      </Container>
    </>
  )
}

export default App
