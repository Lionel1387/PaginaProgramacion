import React, { useState } from 'react';
import JuegoLio from './components/JuegoLio';
import JuegoRoman from './components/JuegoRoman';

const App = () => {
    const [juegoSeleccionado, setJuegoSeleccionado] = useState(null);

    const seleccionarJuego = (juego) => {
        setJuegoSeleccionado(juego);
    };

    const handleVolver = () => {
        setJuegoSeleccionado(null);
    };

    return (
        <div className="app-container">
            {/* Introducción antes de los juegos */}
            <div className="introduccion">
                <h1>Bienvenido a Mi Proyecto Web</h1>
                <p>
                    ¡Hola! Soy Lionel y este es un proyecto personal que he desarrollado con mucho entusiasmo. El objetivo de este proyecto es mostrarte algunos juegos clásicos en una interfaz interactiva, como "Ta Te Ti" y "Piedra, Papel o Tijeras". Pero lo más interesante no solo son los juegos, sino también cómo esta página fue creada utilizando tecnologías web modernas.
                </p>
                <p>
                    En este sitio web, podrás experimentar con juegos interactivos mientras aprendes sobre el poder de la programación web. Este proyecto me permitió combinar <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong> y <strong>React</strong> para crear una experiencia dinámica. A continuación te explicaré brevemente qué son estas tecnologías y cómo contribuyen a la creación de esta página:
                </p>

                <h2>¿Qué es HTML?</h2>
                <p>
                    <strong>HTML</strong> (Hypertext Markup Language) es el lenguaje de marcado que se utiliza para estructurar el contenido de las páginas web. Se trata de la base de cualquier sitio web y define la organización de los elementos dentro de una página, como títulos, párrafos, enlaces, imágenes, botones, etc.
                </p>
                <pre>
                    <code>
                        {`<h1>Bienvenidos a Mi Página</h1>
<p>Esta es una página simple creada con HTML.</p>`}
                    </code>
                </pre>
                <p>
                    <strong>HTML</strong> proporciona la estructura, pero para que los elementos luzcan bien, necesitamos <strong>CSS</strong>.
                </p>

                <h2>¿Qué es CSS?</h2>
                <p>
                    <strong>CSS</strong> (Cascading Style Sheets) es un lenguaje de estilos utilizado para dar formato y diseño a las páginas web. Con CSS, puedes cambiar el color, tamaño y disposición de los elementos HTML, creando una apariencia atractiva y funcional.
                </p>
                <pre>
                    <code>
                        {`h1 {
    color: #4CAF50; /* Cambia el color del texto */
    font-family: Arial, sans-serif;
    text-align: center;
}`}
                    </code>
                </pre>
                <p>
                    <strong>CSS</strong> hace que tu página sea visualmente atractiva, pero sin la lógica interactiva que necesitas, como cuando un usuario hace clic en un botón. Aquí es donde entra <strong>JavaScript</strong>.
                </p>

                <h2>¿Qué es JavaScript?</h2>
                <p>
                    <strong>JavaScript</strong> es un lenguaje de programación que permite que las páginas web sean interactivas. A diferencia de HTML y CSS, que solo definen la estructura y el estilo, <strong>JavaScript</strong> te permite agregar comportamientos dinámicos, como mostrar un mensaje cuando se hace clic en un botón o mover un objeto en la pantalla.
                </p>
                <pre>
                    <code>
                        {`document.getElementById('boton').addEventListener('click', function() {
    alert('¡Has hecho clic en el botón!');
});`}
                    </code>
                </pre>
                <p>
                    Con <strong>JavaScript</strong>, los sitios web se vuelven mucho más interactivos y dinámicos. Y para manejar la complejidad de las aplicaciones modernas, usamos herramientas como <strong>React</strong>.
                </p>

                <h2>¿Qué es React?</h2>
                <p>
                    <strong>React</strong> es una biblioteca de JavaScript desarrollada por Facebook que permite crear interfaces de usuario interactivas y eficientes. Con <strong>React</strong>, puedes construir aplicaciones web con componentes reutilizables, lo que facilita la organización y mantenimiento del código.
                </p>
                <pre>
                    <code>
                        {`import React, { useState } from 'react';

function BotonSaludo() {
    const [mensaje, setMensaje] = useState('Hola, ¡bienvenido!');

    return (
        <button onClick={() => setMensaje('¡Has hecho clic!')}>
            {mensaje}
        </button>
    );
}

export default BotonSaludo;`}
                    </code>
                </pre>
                <p>
                    Con <strong>React</strong>, podemos construir aplicaciones modernas y rápidas que reaccionan rápidamente a las acciones del usuario, como el juego que estás a punto de jugar.
                </p>

                <h2>¿Por Qué Este Proyecto?</h2>
                <p>
                    Este proyecto es una excelente manera de poner en práctica mis habilidades en desarrollo web. Al combinar <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong> y <strong>React</strong>, he creado una página interactiva que no solo muestra cómo funcionan estas tecnologías, sino que también ofrece una experiencia entretenida a los usuarios.
                </p>
                <p>
                    Puedo seguir mejorando este proyecto y agregar nuevas características y juegos en el futuro, pero mi objetivo inicial es mostrar cómo estas tecnologías trabajan juntas para crear algo más que solo una página estática.
                </p>

                <h2>Reflexión</h2>
                <p>
                    A medida que exploras este proyecto, piensa en cómo las tecnologías web han transformado la forma en que interactuamos con la información. La web moderna no es solo un lugar para leer información, ¡es un lugar para interactuar, aprender y divertirnos!
                </p>
            </div>

            {/* Sección de Selección de Juegos */}
            {!juegoSeleccionado ? (
                <div className="game-selector">
                    <h1>Selecciona un juego</h1>
                    <button onClick={() => seleccionarJuego('tateti')}>Jugar Ta Te Ti</button>
                    <button onClick={() => seleccionarJuego('piedrapapeltijeras')}>Jugar Piedra Papel o Tijeras</button>
                </div>
            ) : juegoSeleccionado === 'tateti' ? (
                <JuegoRoman onVolver={handleVolver} />
            ) : (
                <JuegoLio onVolver={handleVolver} />
            )}
        </div>
    );
};

export default App;
