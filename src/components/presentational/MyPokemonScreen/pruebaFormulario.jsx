import React from 'react'
import '../../../styles/components/MyFormulario.css'

export const MyFormulario = () => {
    return (
        <section className = 'MyFormularioSection'>
            <h5 className = 'GOLD'>CONTACT</h5>
            <h2>Text to my team! </h2>
            <hr className='AboutPokemon__hr'/>
            <p>Yes, I'm free. But we must to do some bureaucratic things first.
                If you want me in your team you must to write to POKEDEV ©,
                or maybe, if you want to email to de developers of my web u can write here too.
                Thanks! See you son! </p>

                <form id="form" className="topBefore">
            
                    <input className="nombre" id="name" type="text" placeholder="Name *"/>
                    <input className="email" id="email" type="text" placeholder="Email *" required/>
                    <input id="phone" type="text" placeholder="Phone "/>
                    <textarea id="message" type="text" placeholder="Message"></textarea>
                    <input id="submit" type="submit" value="SEND MESSAGE"/>

                </form>

        </section>
    )
}