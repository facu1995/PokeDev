import * as Yup from "yup";
import TAGS_VALIDATITION_FROM from '../../tags_validation/tag_move'
const Schema = Yup.object().shape({
    description: Yup.string().required(TAGS_VALIDATITION_FROM.DESCRIPTION.IS_REQUIRED),
    name: Yup.string().required(TAGS_VALIDATITION_FROM.NAME.IS_REQUIRED),
    type: Yup.string().required(TAGS_VALIDATITION_FROM.TYPE.IS_REQUIRED),
    power: Yup.number(TAGS_VALIDATITION_FROM.IS_NUMBER).required(TAGS_VALIDATITION_FROM.POWER.IS_REQUIRED).positive(TAGS_VALIDATITION_FROM.IS_POSITIVE).integer(TAGS_VALIDATITION_FROM.IS_INTEGER)
});

export default Schema;