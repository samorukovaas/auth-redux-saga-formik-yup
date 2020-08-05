/* eslint-disable */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/slices/authSlice/authSlice';
import { Button, TextField } from '@material-ui/core';

const SignUp = ({ signUpStart }: any) => {
  const [userRegister, setRegister] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { displayName, email, password, confirmPassword } = userRegister;

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    signUpStart({ displayName, email, password });
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setRegister({ ...userRegister, [name]: value });
  };

  return (
    <div>
      <form className="sign-up-form">
        <TextField
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Your name"
          required
        />
        <TextField type="email" name="email" value={email} onChange={handleChange} label="Your email" required />
        <TextField type="password" name="password" value={password} onChange={handleChange} label="Password" required />
        <TextField
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <Button type="submit" onClick={handleSubmit}>
          SIGN UP
        </Button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  signUpStart: (FormData: any) => dispatch(signUpStart(FormData)),
});

export default connect(null, mapDispatchToProps)(SignUp);

// import React, { FC } from 'react';
// import { useDispatch } from 'react-redux';
// import { Formik, Form } from 'formik';
// import * as Yup from 'yup';
// import { Button, TextField } from '@material-ui/core';
// import { signUpStart } from '../../redux/slices/authSlice/authSlice';

// interface SignUpFormValues {
//   displayName: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
// }

// const SignUp: FC = () => {
//   const initialValues: SignUpFormValues = {
//     displayName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   };

//   const dispatch = useDispatch();

//   const handleSubmit = async (values: SignUpFormValues): Promise<void> => {
//     dispatch(
//       signUpStart({
//         email: values.email,
//         password: values.password,
//         displayName: values.displayName,
//       }),
//     );
//   };
//   return (
//     <div>
//       <p>SIGN UP</p>
//       <Formik
//         initialValues={initialValues}
//         validationSchema={Yup.object({
//           displayName: Yup.string().max(15).required('Please enter your name.'),
//           email: Yup.string()
//             .email('Please enter your email address in format: yourname@example.com.')
//             .required('Please enter a valid email address.'),
//           password: Yup.string()
//             .min(6, 'Password must have at least 6 characters.')
//             .required('Please enter a password.'),
//           confirmPassword: Yup.string()
//             .oneOf([Yup.ref('password')], 'Passwords must match')
//             .required('Please enter a password.'),
//         })}
//         onSubmit={handleSubmit}
//       >
//         <Form>
//           <TextField label="Your Name" name="displayName" type="text" />
//           <TextField label="Email" name="email" type="email" />
//           <TextField label="Password" name="password" type="password" />
//           <TextField label="Confirm Password" name="confirmPassword" type="password" />
//           <Button type="submit" color="primary" name="signup">
//             Sign up
//           </Button>
//         </Form>
//       </Formik>
//     </div>
//   );
// };

// export default SignUp;
