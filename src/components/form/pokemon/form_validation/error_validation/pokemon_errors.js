export default function errorHandle(errors){
    return {
        name(){
            return errors.name && (<div>{errors.name}</div>)
        },
        type(){
            return errors.type && (<div>{errors.type}</div>)
        },
        description(){
            return errors.description && (<div>{errors.description}</div>)
        },
        hp(){
            return errors.hp && (<div>{errors.hp}</div>)
        },
        attack(){
            return errors.attack && (<div>{errors.attack}</div>)
        },
        defense(){
            return errors.defense && (<div>{errors.defense}</div>)
        },
        specialAttack(){
            return errors.specialAttack && (<div>{errors.specialAttack}</div>)
        },
        specialDefense(){
            return errors.specialDefense && (<div>{errors.specialDefense}</div>)
        },
        speed(){
            return errors.speed && (<div>{errors.speed}</div>)
        }
    }
}