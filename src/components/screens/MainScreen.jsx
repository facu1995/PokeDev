import React from 'react'
import { CallDataExample } from '../presentational/CallDataExample'
import { ClasesExample } from '../presentational/ClasesExample'
import { MyPokemonScreen } from './MyPokemonScreen'
import { PokemonAllScreen } from './PokemonAllScreen'

export const MainScreen = () => {
    return (
        <div>
            <PokemonAllScreen/>
            <ClasesExample />
            <CallDataExample />
            <MyPokemonScreen />
        </div>
    )
}
