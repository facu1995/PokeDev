import * as Yup from "yup";
import TAGS_VALIDATITION_FROM from '../../tags_validation/tag_newUser'
const Schema = Yup.object().shape({
    name: Yup.string().required(TAGS_VALIDATITION_FROM.NAME.IS_REQUIRED).max(10),
    email: Yup.string().required(TAGS_VALIDATITION_FROM.EMAIL.IS_REQUIRED).email(),
    pass: Yup.string().required(TAGS_VALIDATITION_FROM.PASS.IS_REQUIRED),
    
});

export default Schema;