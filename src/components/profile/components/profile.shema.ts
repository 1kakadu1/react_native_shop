import * as Yup from 'yup';
import { phoneRegExp } from '../../../consts/regexp';

export const profileNameSchema = Yup.object().shape({
    name: Yup.string().required('error.req').min(4, 'error.min')
});

export const profileAddressSchema = Yup.object().shape({
    address: Yup.string().required('error.req').min(3, 'error.min')
});

export const profilePasswordSchema = Yup.object().shape({
    password: Yup.string().required('error.req').min(3, 'error.min')
});

export const profilePhoneSchema = Yup.object().shape({
    phone: Yup.string()
        .matches(phoneRegExp, 'error.phone')
        .required('error.req')
        .min(8, 'error.min')
});

// export const orderSchema = Yup.object().shape({
//     email: Yup.string().email('error.email').required('error.req'),
//     name: Yup.string().required('error.req').min(1, 'error.min'),
//     address: Yup.string().required('error.req').min(1, 'error.min'),
//     comments: Yup.string()
// });
