'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { EmailThree, Lock } from '../svg';
import ErrorMsg from '../error-msg';

interface FormData {
  email: string;
  password: string;
  rememberMe?: boolean;
}

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  rememberMe: yup.boolean(),
});

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit((data: FormData) => {
    alert(JSON.stringify(data));
    reset();
  });

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="it-signup-input-wrap">
        <div className="it-signup-input mb-20">
          <input
            type="email"
            placeholder="Email or user id"
            {...register('email')}
          />
          <ErrorMsg msg={errors.email?.message || ''} />
          <span className="it-signup-input-icon">
            <EmailThree />
          </span>
        </div>
        <div className="it-signup-input mb-20">
          <input
            type="password"
            placeholder="Password"
            {...register('password')}
          />
          <ErrorMsg msg={errors.password?.message || ''} />
          <span className="it-signup-input-icon">
            <Lock />
          </span>
        </div>
      </div>
      <div className="it-signup-forget d-flex justify-content-between flex-wrap">
        <div className="it-contact-agree mb-30">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              {...register('rememberMe')}
            />
            <ErrorMsg msg={errors.rememberMe?.message || ''} />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Remember me
            </label>
          </div>
        </div>
        <a className="mb-20" href="#">
          Forgot Password?
        </a>
      </div>
      <div className="it-signup-btn mb-50">
        <button
          type="submit"
          className="it-btn circle-effect theme-style w-100"
        >
          <span>Log In</span>
        </button>
      </div>
    </form>
  );
};
export default SignInForm;
