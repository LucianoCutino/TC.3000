import '../styles/ContactoPage.css';
import react from 'react';
const ContactoPage = (props) => {
    return(
        <main>
                <div className="holder">
                    <div className="foto">
                        <img src="img/mercedez benz.png" height="220" alt=""/>
                    </div>
                    <form action="">
                        <h2>Contacto</h2>
                        <input type="text" name="Nombre y Apellido" placeholder="Nombre y apellido"/>
                        <input type="email" name="Email" placeholder="Email"/>
                        <input type="text" name="Teléfono" placeholder="Teléfono"/>
                        <textarea name="Enviar" placeholder="Escriba aquí su mensaje"></textarea>
                        <input type="submit" value="Enviar" id="boton"/>
                    </form>
                </div>
        </main>

    );
}

export default ContactoPage;