import React from 'react'
import { MyPokemonScreenDetails } from '../presentational/MyPokemonScreen/MyPokemonScreenDetails'
import { MyPokemonScreenExpEvoLoc } from '../presentational/MyPokemonScreen/MyPokemonScreenExpEvoLoc'
import { MyPokemonScreenHeader } from '../presentational/MyPokemonScreen/MyPokemonScreenHeader'
import { MyPokemonScreenStats } from '../presentational/MyPokemonScreen/MyPokemonScreenStats'
import { MyFormulario } from '../presentational/MyPokemonScreen/pruebaFormulario'
import Nav from '../nav/nav_principal'

export const MyPokemonScreen = () => {
    return (<>
        <Nav />
        <>
            <MyPokemonScreenHeader />
            <MyPokemonScreenDetails />
            <MyPokemonScreenStats />
            <MyPokemonScreenExpEvoLoc />
            <MyFormulario />
        </>
    </>
    )
}
