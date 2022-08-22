import '../styles/InicioPage.css';
import react from 'react';
const InicioPage = (props) => {
    return (
        <main className="holder">
        <h1>Turismo Competición 3000</h1>
        <h3>La categoría de autos de turismo más joven del mundo</h3>

        <div className="slider-frame">
            <ul>
                <li><img src="img/logo4.png" alt=""/></li>
                <li><img src="img/autos.jpg" alt=""/></li>
                <li><img src="img/autos2.jpg" alt=""/></li>
                <li><img src="img/autos3.jpg" alt=""/></li>
            </ul>
        </div>
        <div className="titulo">
            <h2>
                Sponsor Oficial
            </h2>
        </div>
        <div className="messi">
            <img src="img/pngwing.com (1).png" height="200" alt=""/>
        </div>
    </main>
    


    );
}

export default InicioPage;