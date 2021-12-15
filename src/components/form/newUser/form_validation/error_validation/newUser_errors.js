export default function errorHandle(errors){
    return {
        email(){
            return errors.email && (<div>{errors.email}</div>)
        }, 
        pass(){
            return errors.pass && (<div>{errors.pass}</div>)
        },
        rePass(){
            return errors.rePass && (<div>{errors.rePass}</div>)
        }
    }
}