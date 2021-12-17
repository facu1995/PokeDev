export default function errorHandle(errors){
    return {
        email(){
            return errors.email && (<div>{errors.email}</div>)
        }, 
        pass(){
            return errors.pass && (<div>{errors.pass}</div>)
        },
        name(){
            return errors.name && (<div>{errors.name}</div>)
        }
    }
}