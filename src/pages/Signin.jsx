import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage,useFormik } from 'formik';
import "./SignupForm.css";
export default function Signin() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    avatar: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
  });

  const handleSubmit = async (values, { setStatus, setErrors, setSubmitting }) => {
    try {
      const formData = new FormData();
      formData.append('userName', values.username);
      formData.append('email', values.email);
      formData.append('password', values.password);
      formData.append('image', values.avatar);

      const response = await fetch( 'https://ecommerce-node4.vercel.app/auth/signup', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        setStatus({ success: true });
        setSubmitting(false);
      } else {
        const errorData = await response.json();
        setErrors({ submit: errorData.message });
        setSubmitting(false);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({ success: false });
      setErrors({ submit: 'There was an error submitting the form. Please try again.' });
      setSubmitting(false);
    }
  };
  return (
    <Formik
      initialValues={user}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
      {({setFieldValue})=>(
      <Form encType="multipart/form-data">
        <label>Username</label>
        <Field type="text" name="username" />
        <ErrorMessage name="username" component="div" className="error-message" />
        <label>Email</label>
        <Field type="email" name="email" />
        <ErrorMessage name="email" component="div" className="error-message" />
        <label>Password</label>
        <Field type="password" name="password" />
        <ErrorMessage name="password" component="div" className="error-message" />
        <label>Confirm Password</label>
        <Field type="password" name="confirmPassword" />
        <ErrorMessage name="confirmPassword" component="div" className="error-message" />
        <label>Image</label>
       <input type="file" name="avatar" onChange={(e)=>setFieldValue('avatar',e.target.files[0])}/>
        <button type="submit">Submit</button>
      </Form>
    )}
    </Formik>
  );
}
