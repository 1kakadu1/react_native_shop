import * as Yup from 'yup';

const phoneRegExp = /^\+\d{3}\s? \d{3} \d{3} \d{3}$/;

export const registrationSchema = Yup.object().shape({
    email: Yup.string().email('error.email').required('error.req'),
    name: Yup.string().required('error.req').min(1, 'error.min'),
    address: Yup.string().required('error.req').min(1, 'error.min'),
    password: Yup.string().required('error.req').min(4, 'error.min'),
    passwordConfirmation: Yup.string().oneOf(
        [Yup.ref('password'), ''],
        'error.confirmation'
    ),
    phone: Yup.string()
        .matches(phoneRegExp, 'error.phone')
        .required('error.req')
        .min(8, 'error.min')
});
