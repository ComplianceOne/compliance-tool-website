'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ErrorMsg from '../error-msg';

interface FormData {
  firstName: string;
  lastName: string;
  subject: string;
  email: string;
  phone: string;
  message: string;
  rememberMe?: boolean;
}

// Create a validation schema using yup
const schema = yup.object().shape({
  firstName: yup.string().required('Your Name is required'),
  lastName: yup.string().required('Your Name is required'),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  phone: yup.string().required('Phone number is required'),
  subject: yup.string().required('Subject is required'),
  message: yup
    .string()
    .min(10, 'Message must be at least 10 characters')
    .required('Message is required'),
  rememberMe: yup.boolean(),
});

const ContactFormThree = () => {
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
      <div className="it-contact-input-wrap">
        <div className="row gx-20">
          <div className="col-md-6">
            <div className="it-contact-input-box mb-25">
              <label>First Name (Listing) *</label>
              <input
                type="text"
                placeholder="First Name"
                {...register('firstName')}
              />
              <ErrorMsg msg={errors.firstName?.message || ''} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="it-contact-input-box mb-25">
              <label>Last Name (Listing) *</label>
              <input
                type="text"
                placeholder="Last Name"
                {...register('lastName')}
              />
              <ErrorMsg msg={errors.lastName?.message || ''} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="it-contact-input-box mb-25">
              <label>Your Email*</label>
              <input type="email" placeholder="Email" {...register('email')} />
              <ErrorMsg msg={errors.email?.message || ''} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="it-contact-input-box mb-25">
              <label>Number *</label>
              <input type="text" placeholder="Number" {...register('phone')} />
              <ErrorMsg msg={errors.phone?.message || ''} />
            </div>
          </div>
          <div className="col-12">
            <div className="it-contact-input-box">
              <label>Subject *</label>
              <input
                type="text"
                placeholder="Subject"
                {...register('subject')}
              />
              <ErrorMsg msg={errors.subject?.message || ''} />
            </div>
          </div>
          <div className="col-12">
            <div className="it-contact-textarea-box mt-25 mb-35">
              <label>How can We Help You?</label>
              <textarea
                placeholder="Type your text"
                {...register('message')}
              ></textarea>
              <ErrorMsg msg={errors.message?.message || ''} />
            </div>
          </div>
        </div>
        <div className="it-contact-agree mb-40">
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
              Please save my name, email address for the next time I messag
            </label>
          </div>
        </div>
        <div className="it-contact-btn">
          <button type="submit" className="it-btn">
            Send a Message
          </button>
        </div>
      </div>
    </form>
  );
};
export default ContactFormThree;
