export default function errorHandle(errors){
    return {
        description(){
            return errors.description && (<div>{errors.description}</div>)
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