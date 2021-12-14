export default function errorHandle(errors){
    return {
        id(){
            return errors.id && (<div>{errors.id}</div>)
        },
        
        name(){
            return errors.name && (<div>{errors.name}</div>)
        },
        type(){
            return errors.type && (<div>{errors.type}</div>)
        },
        power(){
            return errors.power && (<div>{errors.power}</div>)
        },

    }
}