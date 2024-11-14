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
        Armani : "https://imgs.search.brave.com/B74mg6FA2mKERp1yvJrkz7POHwqj8v5wsR1tQhscI3c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZmlmYXJvc3RlcnMu/Y29tL2Fzc2V0cy9w/bGF5ZXJzL2ZpZmEy/NC9mYWNlcy8yMTQ1/ODQucG5n",
        Messi: "https://imgs.search.brave.com/hMTyLO5VJR0tUM9mCGdFJKG9zAKVvL9L-s-1VX8yXI0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZmlmcGxheS5jb20v/aW1nL2ZjLzI0L3Bs/YXllcnMvMTU4MDIz/LndlYnA" ,
        CR7 : "https://imgs.search.brave.com/ut3BNFsMRINq7e_Vbgjjm2JoPT_I7g1IbKjyk97PNqg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZmlmcGxheS5jb20v/aW1nL2ZjLzI0L3Bs/YXllcnMvMjA4MDEu/d2VicA" , 
        Fonseca : "https://imgs.search.brave.com/dJgQAC3wb-UMaf-UJEFf1eguoBlS1AGLhzeE7uDnMqQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/YS50cmFuc2Zlcm1h/cmt0LnRlY2hub2xv/Z3kvcG9ydHJhaXQv/YmlnLzQ2MjA3MC0x/NzIxOTIwNjk1LnBu/Zz9sbT0x" ,
        Mbappe : "https://imgs.search.brave.com/aitt_AkLQdeo4uxDbu1_j7ztw5toFbFKHPwEyYmVaDI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZmlmcGxheS5jb20v/aW1nL2ZjLzI0L3Bs/YXllcnMvMjMxNzQ3/LndlYnA" ,
        Dibu : "https://imgs.search.brave.com/uiuQFhXKPlpn6477ol8Ob5nFqF_AJ-wjXq-xtm61hh4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZmlmcGxheS5jb20v/aW1nL2ZjLzI0L3Bs/YXllcnMvMjAyODEx/LndlYnA" , 
        Botta : "https://imgs.search.brave.com/J3sKwdeOOIfGUrMy4v2GtwX7ow7ywYYdDkCHnd6Mmv0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9nYW1l/LWFzc2V0cy5mdXQu/Z2cvMjAyNS9wbGF5/ZXItaXRlbS8yNS0y/MTUxOTkuMTU2ZGRk/MjFmMDkyMTIzODRk/ZDcwNjM0ZWMzOTQ0/NjNmN2YyMDIwNTE2/YWYyODM4M2I0Njk3/N2M3MDdkZmRkZC53/ZWJwP3F1YWxpdHk9/OTAmd2lkdGg9NzAw" , 
        Suarez : "https://imgs.search.brave.com/NRfgZMCMIPnaLxFPOULMynSoABK-epc4UXFRbDg6Jrg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9nYW1l/LWFzc2V0cy5mdXQu/Z2cvMjAyNC9wbGF5/ZXJzLzE4ODA0Mi4y/LnBuZz9xdWFsaXR5/PTgwJndpZHRoPTI1/MA" 
    };

    const pressed = (e) => {
        const index = e.target.getAttribute("value");
        if (cells[index] == null && !ganador) { 
            const newCells = [...cells];

            if (turnoActual === "jugador 1") {
                newCells[index] = "jugador 1"; 
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
            [0, 1, 2], [3, 4, 5], [6, 7, 8], 
            [0, 3, 6], [1, 4, 7], [2, 5, 8], 
            [0, 4, 8], [2, 4, 6] 
        ];

        for (let linea of lineasGanadoras) {
            const [a, b, c] = linea;
            if (newCells[a] && newCells[a] === newCells[b] && newCells[a] === newCells[c]) {
                setGanador(newCells[a] === "jugador 1" ? "Jugador 1" : "Jugador 2");
                return;
            }
        }

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
                        <button className="personajes__buton" key={nombre} onClick={() => setPersonajeJugador1(url)}>{nombre}</button>
                    ))}
                </div>
                <div>
                    <p>Personaje Jugador 2:</p>
                    {Object.entries(personajes).map(([nombre, url]) => (
                        <button className="personajes__buton" key={nombre} onClick={() => setPersonajeJugador2(url)}>{nombre}</button>
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
