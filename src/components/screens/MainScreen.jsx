import React from 'react'
import { CallDataExample } from '../presentational/CallDataExample'
import { ClasesExample } from '../presentational/ClasesExample'
import { MyPokemonScreen } from './MyPokemonScreen'


export const MainScreen = () => {
    return (
        <div>
            <ClasesExample />
            <CallDataExample />
            <MyPokemonScreen />
        </div>
    )
}
