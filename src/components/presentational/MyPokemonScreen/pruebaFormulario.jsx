import React from 'react'
import '../../../styles/components/MyFormulario.css'

export const MyFormulario = () => {
    return (
        <section className = 'MyFormularioSection'>
            <h5 className = 'GOLD'>CONTACT</h5>
            <h2>Get In Touch </h2>
            <p>If you have any suggestion, project or even you want to say “hello”, <br />
            please fill out the form below and I will reply you shortly.</p>

            <form id="form" class="topBefore">
		
                <input class="nombre" id="name" type="text" placeholder="Name *"/>
                <input class="email" id="email" type="text" placeholder="Email *" required/>
                <input id="phone" type="text" placeholder="Phone "/>
                <textarea id="message" type="text" placeholder="Message"></textarea>
                <input id="submit" type="submit" value="SEND MESSAGE"/>

            </form>
        </section>
    )
}