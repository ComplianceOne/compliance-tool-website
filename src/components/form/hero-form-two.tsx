'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ErrorMsg from '../error-msg';
import { Message } from '../svg';

interface FormData {
  email: string;
}

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
});

const HeroFormTwo = () => {
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
      <input
        type="email"
        placeholder="your email address"
        {...register('email')}
      />
      <ErrorMsg msg={errors.email?.message || ''} />
      <span className="pg-hero-input-icon">
        <Message />
      </span>
      <button type="submit" className="pg-btn green-bg">
        Get Started
      </button>
    </form>
  );
};
export default HeroFormTwo;
