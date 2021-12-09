import React from 'react'
import { MyPokemonScreenDetails } from '../presentational/MyPokemonScreen/MyPokemonScreenDetails'
import { MyPokemonScreenExpEvoLoc } from '../presentational/MyPokemonScreen/MyPokemonScreenExpEvoLoc'
import { MyPokemonScreenHeader } from '../presentational/MyPokemonScreen/MyPokemonScreenHeader'
import { MyPokemonScreenStats } from '../presentational/MyPokemonScreen/MyPokemonScreenStats'


export const MyPokemonScreen = () => {
    return (
        <>
            <MyPokemonScreenHeader/>
            <MyPokemonScreenDetails />
            <MyPokemonScreenStats />
            <MyPokemonScreenExpEvoLoc />
        </>
    )
}
