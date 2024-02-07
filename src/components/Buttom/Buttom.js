import React from 'react';

const Buttom = () => {
  return (
     <Buttom style={styles.button}>Ver</Buttom>
  );
};


const styles = {
    button: {
      padding: '10px 20px', // Aumenta el padding para hacer el botón más grande
      backgroundColor: 'skyblue', // Color de fondo celeste
      color: 'white', // Texto blanco
      border: 'none', // Elimina el borde
      borderRadius: '5px', // Bordes redondeados
      cursor: 'pointer', // Cambia el cursor al pasar el mouse
      fontSize: '16px', // Tamaño de fuente
      fontWeight: 'bold' // Texto en negrita
    }
  };

export default Buttom;