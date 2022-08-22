import '../styles/ContactoPage.css';
import react from 'react';
import { useState } from 'react';
import axios from 'axios';


const ContactoPage = (props) => {
    
    const initialForm = {
        Nombre: '',
        Email: '',
        Teléfono: '',
        Mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState ('');
    const [formData, setFormData] = useState (initialForm);
    
    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value //forma dinamica 

        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }



    return(
        <main>
                <div className="holder">
                    <div className="foto">
                        <img src="img/mercedez benz.png" height="220" alt=""/>
                    </div>
                    <form action="/contacto" method="post" onSubmit={handleSubmit} className="formulario">
                        <h2>Contacto</h2>
                        <input type="text" name="Nombre" value={formData.Nombre} onChange={handleChange} placeholder="Nombre"/>
                        <input type="email" name="Email" value={formData.Email} onChange={handleChange} placeholder="Email"/>
                        <input type="text" name="Teléfono" value={formData.Teléfono} onChange={handleChange} placeholder="Teléfono"/>
                        <textarea name="Mensaje" value={formData.Mensaje} onChange={handleChange} placeholder="Escriba aquí su mensaje"></textarea>
                        <input type="submit" value="Enviar" id="boton"/>
                    </form>
                    {sending ? <p>Enviando...</p> : null}
                    {msg ? <p>{msg}</p> : null}
                </div>
        </main>

    );
}

export default ContactoPage;