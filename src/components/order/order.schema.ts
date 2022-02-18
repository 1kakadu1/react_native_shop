import * as Yup from 'yup';

export const orderSchema = Yup.object().shape({
    email: Yup.string().email('error.email').required('error.req'),
    name: Yup.string().required('error.req').min(1, 'error.min'),
    address: Yup.string().required('error.req').min(1, 'error.min'),
    comments: Yup.string()
});
