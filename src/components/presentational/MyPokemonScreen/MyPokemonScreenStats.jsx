import React from 'react'

export const MyPokemonScreenStats = () => {
    return (
        <section className = 'MyPokemonScreenStats'>
            <h5 className = 'GOLD'>ABOUT ME</h5>
            <h3>My Stats: </h3>

            <div className = 'MyPokemonScreenStats__lists'>
                <ul className = 'MyPokemonScreenStats__listLeft'>
                    <li>NAME</li>
                    <li>HP</li>
                    <li>ATACK</li>
                    <li>DEFENSE</li>
                    <li>SPECIAL ATACK</li>
                    <li>SPECIAL DEFENSE</li>
                    <li>SPEED</li>
                </ul>
                <ul className = 'MyPokemonScreenStats__listRight'>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                </ul>
            </div>
        </section>
    )
}
