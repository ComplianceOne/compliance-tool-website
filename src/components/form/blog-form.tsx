'use client';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import ErrorMsg from '../error-msg';

interface FormData {
  name: string;
  email: string;
  message: string;
}

// Create a validation schema using yup
const schema = yup.object().shape({
  name: yup.string().required('Your Name is required'),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  message: yup
    .string()
    .min(10, 'Message must be at least 10 characters')
    .required('Message is required'),
});

const BlogReviewForm = () => {
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
      <div className="row gx-20">
        <div className="col-sm-6 mb-20">
          <div className="postbox-review-input">
            <input type="text" placeholder="Name" {...register('name')} />
            <ErrorMsg msg={errors.name?.message || ''} />
          </div>
        </div>
        <div className="col-sm-6 mb-20">
          <div className="postbox-review-input">
            <input type="email" placeholder="Email" {...register('email')} />
            <ErrorMsg msg={errors.email?.message || ''} />
          </div>
        </div>
        <div className="col-12 mb-50">
          <div className="postbox-review-textarea">
            <textarea
              placeholder="Comments"
              {...register('message')}
            ></textarea>
            <ErrorMsg msg={errors.message?.message || ''} />
          </div>
        </div>
      </div>
      <div className="postbox-review-button">
        <button className="it-btn" type="submit">
          Post Comments
        </button>
      </div>
    </form>
  );
};
export default BlogReviewForm;
