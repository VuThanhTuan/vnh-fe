import * as Yup from 'yup';
export const SignInValidation = Yup.object().shape({
  userName: Yup.string()
    .required('Vui lòng nhập tên tài khoản')
    .min(4, 'Tên đăng nhập phải dài hơn 4 ký tự')
    .max(20, 'Tên đăng nhập phải nhỏ hơn 20 ký tự'),
  password: Yup.string()
    .required('Vui lòng nhập mật khẩu')
    .min(8, 'Mật phải dài hơn 8 ký tự')
    .max(32, 'Mật phải nhỏ hơn 20 ký tự'),
});
