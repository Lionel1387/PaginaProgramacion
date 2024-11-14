import React, { useState } from "react";

function JuegoRoman({ onVolver }) {
    const [cells, setCells] = useState(Array(9).fill(null));
    const [randomItem, setRandomItem] = useState("");
    const [turnoActual, setTurnoActual] = useState("");
    const [ganador, setGanador] = useState(null);
    const [personajeJugador1, setPersonajeJugador1] = useState("");
    const [personajeJugador2, setPersonajeJugador2] = useState("");
    const personajes = {
        Cavani: "https://imgs.search.brave.com/BBPNjA98kVtQq3aRhOblsq05JBmPgaTPre_LtkY_kLw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZnV0d2l6LmNvbS9h/c3NldHMvaW1nL2Zj/MjUvZmFjZXMvMTc5/ODEzLnBuZz8yNQ",
        Colidio: "https://imgs.search.brave.com/C6fsJz3dzt4IDxMGqvnDEat2HonOKJfJqFOBY0Z6ryk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9nYW1l/LWFzc2V0cy5mdXQu/Z2cvMjAyNS9wbGF5/ZXItaXRlbS8yNS0y/NDU0NjEuNzBmNDhm/ODg4MTgwNWVkOTI5/ZDNjOGY2ZWIzNzI1/NGNhY2NjNWJlZmMy/MzM4ZmEyYjcyNzEz/M2ZhM2U1OTA2Yi53/ZWJwP3F1YWxpdHk9/ODAmd2lkdGg9MzUw",
        // Agregar los demás personajes aquí
    };

    const pressed = (e) => {
        const index = e.target.getAttribute("value");
        if (cells[index] == null && !ganador) { 
            const newCells = [...cells];

            if (turnoActual === "jugador 1") {
                newCells[index] = "jugador 1";  // Guardar el jugador, no el JSX
            } else if (turnoActual === "jugador 2") {
                newCells[index] = "jugador 2";
            }

            setCells(newCells);

            if (turnoActual === "jugador 1") {
                setTurnoActual("jugador 2");
            } else {
                setTurnoActual("jugador 1");
            }

            verificarGanador(newCells);
        }
    };

    const verificarGanador = (newCells) => {
        const lineasGanadoras = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontales
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Verticales
            [0, 4, 8], [2, 4, 6] // Diagonales
        ];

        for (let linea of lineasGanadoras) {
            const [a, b, c] = linea;
            if (newCells[a] && newCells[a] === newCells[b] && newCells[a] === newCells[c]) {
                setGanador(newCells[a] === "jugador 1" ? "Jugador 1" : "Jugador 2");
                return;
            }
        }

        // Verificar empate
        if (newCells.every(cell => cell !== null)) {
            setGanador("Empate");
        }
    };

    const selecJug = () => {
        const items = ["jugador 1", "jugador 2"];
        const item = items[Math.floor(Math.random() * items.length)];
        setRandomItem(item);
        setTurnoActual(item);
        setGanador(null); 
        setCells(Array(9).fill(null));
    };

    const reiniciarTablero = () => {
        setCells(Array(9).fill(null)); 
        setRandomItem("");
        setTurnoActual("");
        setGanador(null);
    };

    return (
        <>
            <h1>Tateti</h1>
            <div className="selecPersonajes">
                <h2>Selecciona Personajes:</h2>
                <div>
                    <p>Personaje Jugador 1:</p>
                    {Object.entries(personajes).map(([nombre, url]) => (
                        <button key={nombre} onClick={() => setPersonajeJugador1(url)}>{nombre}</button>
                    ))}
                </div>
                <div>
                    <p>Personaje Jugador 2:</p>
                    {Object.entries(personajes).map(([nombre, url]) => (
                        <button key={nombre} onClick={() => setPersonajeJugador2(url)}>{nombre}</button>
                    ))}
                </div>
            </div>

            <div className="selecJugInicial">
                <p>Empieza el jugador: {randomItem}</p>
                <button onClick={selecJug}>Seleccionar aleatorio</button>
                <p>Turno actual: {turnoActual}</p>
            </div>

            <div className="ganador">
                {ganador && <p>¡{ganador === "Empate" ? "Empate!" : `Ganador: ${ganador}!`}</p>}
            </div>

            <div className="container">
                {cells.map((cell, index) => (
                    <div key={index} value={index} onClick={pressed} className="item">
                        {cell && (
                            <img
                                src={cell === "jugador 1" ? personajeJugador1 : personajeJugador2}
                                alt={cell}
                            />
                        )}
                    </div>
                ))}
            </div>

            <div className="botoR">
                <button onClick={reiniciarTablero}>Reiniciar Juego</button>
            </div>
            <div className="botoR">
                <button onClick={onVolver}>Volver</button>
            </div>
        </>
    );
}

export default JuegoRoman;
