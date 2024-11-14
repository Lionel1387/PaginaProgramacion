import React, { useState } from 'react';

const JuegoLio = ({ onVolver }) => {
    const [jugadaUsuario, setJugadaUsuario] = useState('');
    const [ganador, setGanador] = useState('');
    const [jugadaMaquina, setJugadaMaquina] = useState('');
    const opciones = ["piedra", "papel", "tijeras"];
    
    const checkearJuego = () => {
        const eleccionMaquina = opciones[Math.floor(Math.random() * opciones.length)];
        setJugadaMaquina(eleccionMaquina);
    
        if ((jugadaUsuario === 'piedra' && eleccionMaquina === 'tijeras') || 
            (jugadaUsuario === 'papel' && eleccionMaquina === 'piedra') || 
            (jugadaUsuario === 'tijeras' && eleccionMaquina === 'papel')) {
            setGanador('HAS GANADO');
        } else if ((jugadaUsuario === 'tijeras' && eleccionMaquina === 'piedra') || 
            (jugadaUsuario === 'piedra' && eleccionMaquina === 'papel') || 
            (jugadaUsuario === 'papel' && eleccionMaquina === 'tijeras')) {
            setGanador('HAS PERDIDO');
        } else {
            setGanador('HAS EMPATADO');
        }
    };
    
    const jugada = (e) => {
        setJugadaUsuario(e.target.getAttribute("value"));
    };
    
    return (
        <div>
            <h1>Juego Piedra, Papel o Tijera</h1>
            <h2>Ingresa tu jugada</h2>
            <div className='jugada-container'>
                <div
                    value='piedra'
                    onClick={jugada}
                    className={`jugada piedra ${jugadaUsuario === 'piedra' ? 'seleccionada' : ''}`}
                ></div>
                <div
                    value='papel'
                    onClick={jugada}
                    className={`jugada papel ${jugadaUsuario === 'papel' ? 'seleccionada' : ''}`}
                ></div>
                <div
                    value='tijeras'
                    onClick={jugada}
                    className={`jugada tijeras ${jugadaUsuario === 'tijeras' ? 'seleccionada' : ''}`}
                ></div>
            </div>
            <div className='jugadaMaquina-container'>
                <h3>Elección de la máquina:</h3>
                {jugadaMaquina && (
                    <img
                        src={`${jugadaMaquina}.png`} 
                        alt={`Elección de la máquina: ${jugadaMaquina}`}
                        style={{ width: '100px', height: '100px' }}
                    />
                )}
            </div>
            <button onClick={checkearJuego}>Jugar</button>
            <h3>{ganador}</h3>
            <button onClick={() => onVolver()}>Volver</button>
        </div>
    );
};

export default JuegoLio;