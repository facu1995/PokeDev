import * as Yup from "yup";
import TAGS_VALIDATITION_FROM from '../../tags_validation/tag_login'
const Schema = Yup.object().shape({
    email: Yup.string().required(TAGS_VALIDATITION_FROM.EMAIL.IS_REQUIRED),
    pass: Yup.string().required(TAGS_VALIDATITION_FROM.PASS.IS_REQUIRED),
});

export default Schema;