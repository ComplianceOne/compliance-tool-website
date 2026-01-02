import ContactFormThree from '../form/contact-form-three';
import { EmailFive, LocationFive, PhoneFour } from '../svg';

const ContactAreaTwo = () => {
  return (
    <div className="it-contact-innar-area it-contact-innar-style-2 pt-120">
      <div className="container">
        <div className="it-contact-innar-item-wrap mb-80">
          <div className="row gx-0">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
              <div className="it-contact-inner-item d-flex justify-content-center">
                <div className="text-center">
                  <span className="it-contact-inner-icon">
                    <EmailFive />
                  </span>
                  <span className="it-contact-inner-content">
                    <span>Email</span>
                    <a href="mailto:helloeSaasty@gmail.com">
                      <span>helloeSaasty@gmail.com</span>
                    </a>
                    <a href="mailto:helloeSaasty@gmail.com">
                      <span>helloeSaasty@gmail.com</span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
              <div className="it-contact-inner-item d-flex justify-content-center">
                <div className="text-center">
                  <span className="it-contact-inner-icon">
                    <PhoneFour />
                  </span>
                  <span className="it-contact-inner-content">
                    <span>Phone</span>
                    <a href="tel:456789108961">
                      <span>(+123) 456 789 108961</span>
                    </a>
                    <a href="tel:456789108961">
                      <span>+1-302-123-4856567</span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
              <div className="it-contact-inner-item d-flex justify-content-center">
                <div className="text-center">
                  <span className="it-contact-inner-icon">
                    <LocationFive />
                  </span>
                  <span className="it-contact-inner-content">
                    <span>Location</span>
                    <a
                      href="https://www.google.com/maps/@32.9567868,43.7161135,8.17z?entry=ttu&g_ep=EgoyMDI0MTIxMC4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                    >
                      <span>
                        962 Fifth Avenue,New York,2561 Elliott <br />
                        Street Wolfeboro, NH 03894
                      </span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-6 col-md-9">
            <div className="it-section-title-box text-center mb-70 it-text-anim">
              <h4 className="it-section-title mb-10 it_text_reveal_anim">
                Let's connect with us
              </h4>
              <p className="mb-0">
                Connect with Us Today through the Details Below or Fill Out{' '}
                <br />
                the Form for a Prompt Response”
              </p>
            </div>
          </div>
          <div className="col-12">
            <div className="it-contact-inner-form-box">
              <div className="it-contact-wrap">
                <ContactFormThree />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactAreaTwo;
