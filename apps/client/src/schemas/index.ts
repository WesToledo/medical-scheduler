import * as yup from 'yup';

export const SignInSchema = yup.object().shape({
  email: yup.string().email('Email inválido').required('Required'),
  password: yup.string().min(8, 'Senha deve conter no mínimo 8 caracteres').required('Required'),
});

export const DoctorSchema = yup.object().shape({
  name: yup.string().required('Required'),
  specialty: yup.string().required('Required'),
});
