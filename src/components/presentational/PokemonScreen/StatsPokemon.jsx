import React from 'react'
import UsePokemon from "../../context/usePokemon";
//import CardPokemon from '../PokemonAllScreen/CardPokemon';
const StatsPokemon = () => {
    const pokemon = UsePokemon();

    const sumarStats =() =>{
        let total = 0;
         pokemon.stats.forEach(stat => {
            total += stat.base_stat
        })
        return total;
    }

    const greaterStat = () => {
        let may = 0;
        pokemon.stats.forEach(stat => {
            if (may < stat.base_stat) {
                may = stat.base_stat
            }
        });
        return may
    }
        

     let statBar = pokemon.stats.map((stat,idx)=>
         <div key={idx} className='StatsPokemon__statBar' style={{width: `${stat.base_stat * 100 / greaterStat()}%`}}>{/* {greaterStat()} */}</div> 
     )


    return (
        <div className="StatsPokemon">
{/* 
            <h5 className='GOLD'>SOME STADISTICS</h5> */}
            <h2>My Stats</h2>
            <hr className='AboutPokemon__hr'/>
            <p>I'm a Freelancer Pokemon, living in the wild. Waiting for someone like you, who wants to be a pokemon master, also, i want to meet new people and win some experience, and maybe if we train a lot, EVOLVE! I don't have degrees or things like that, but i can show you my stats where you can see my true potential!   </p>            
    
            <div className='StatsPokemon__stats'>
          
                <ul className='StatsPokemon__stats_left'>
                    <li>HP:</li>
                    <li>ATTACK</li>
                    <li>DEFENSE</li>
                    <li>SPECIAL-ATTACK</li>
                    <li>SPECIAL-DEFENSE</li>
                    <li>SPEED</li>
                    <li>TOTAL</li>
                </ul>
                <div className='StatsPokemon__stats_center'>
                    {statBar}
                </div> 
                <ul className='StatsPokemon__stats_right' >
                    <li>{pokemon.stats[0].base_stat}</li>
                    <li>{pokemon.stats[1].base_stat}</li>
                    <li>{pokemon.stats[2].base_stat}</li>
                    <li>{pokemon.stats[3].base_stat}</li>
                    <li>{pokemon.stats[4].base_stat}</li>
                    <li>{pokemon.stats[5].base_stat}</li>
                    <li>{sumarStats()}</li>
                </ul>


            </div>
        </div>
    )
}

export default StatsPokemon;