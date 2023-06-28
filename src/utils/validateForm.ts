import * as yup from 'yup'

/* The message to show an error in a form */
export enum FORM_VALIDATE_MESSAGE {
    requiredEmail = 'The email is required',
    requiredReason = 'The reason is required',
    requiredMessage = 'The message is required'
}

export const FormValidate = yup.object().shape({
    email: yup.string().trim().required(`${ FORM_VALIDATE_MESSAGE.requiredEmail }`),
    reason: yup.string().trim().required(`${ FORM_VALIDATE_MESSAGE.requiredReason }`),
    messagge: yup.string().trim().required(`${ FORM_VALIDATE_MESSAGE.requiredMessage }`),
})