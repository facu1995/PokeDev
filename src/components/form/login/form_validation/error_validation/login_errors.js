export default function errorHandle(errors){
    return {
        email(){
            return errors.id && (<div>{errors.email}</div>)
        }, 
        pass(){
            return errors.name && (<div>{errors.pass}</div>)
        }
    }
}