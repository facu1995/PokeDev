import React from 'react'
import { MyPokemonScreenDetails } from '../presentational/MyPokemonScreen/MyPokemonScreenDetails'
import { MyPokemonScreenHeader } from '../presentational/MyPokemonScreen/MyPokemonScreenHeader'


export const MyPokemonScreen = () => {
    return (
        <>
            <MyPokemonScreenHeader/>
            <MyPokemonScreenDetails />
        </>
    )
}
