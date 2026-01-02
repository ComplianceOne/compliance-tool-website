import Image from "next/image";
// import { EmailFour, LocationFour, PhoneThree, X } from "../svg";
import ContactFormTwo from "../form/contact-form-two";

import contactImg from "@/assets/img/contact/contact-1.png";

const ContactAreaOne = () => {
    return (
        <div className="it-contact-area pt-120 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-5">
                        <div className="it-contact-inner-left">
                            <div>
                                <h4 className="it-section-title mb-10">
                                    Contact Info{" "}
                                </h4>
                                <p className="mb-55">
                                    Please fill out the contact form, and our
                                    team will connect with you by email to
                                    provide support, answer questions, or
                                    discuss your compliance needs.
                                </p>
                                {/* <div className="it-contact-inner-list mb-45">
                  <ul>
                    <li>
                      <span>
                        <PhoneThree />
                        <a
                          className="border-line-black"
                          href="tel:008757845682"
                        >
                          (00) 875 784 5682
                        </a>
                      </span>
                    </li>
                    <li>
                      <span>
                        <EmailFour />
                        <a
                          className="border-line-black"
                          href="mailto:mcssainfo@gmail.com"
                        >
                          mcssainfo@gmail.com
                        </a>
                      </span>
                    </li>
                    <li>
                      <span>
                        <LocationFour />
                        <a
                          className="border-line-black"
                          href="https://www.google.com/maps/@23.5412708,91.7791619,13z?entry=ttu"
                          target="_blank"
                        >
                          238, Arimantab, Moska - USA.
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="it-contact-inner-social mb-115">
                  <span>We are on social network</span>
                  <a href="#">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a href="#">
                    <X />
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </div> */}
                            </div>
                            <div className="it-contact-inner-thumb">
                                <Image
                                    className="image-height-auto"
                                    src={contactImg}
                                    alt="contact-img"
                                    width={239}
                                    height={208}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-7">
                        <div className="it-contact-inner-form-box">
                            <h4 className="it-section-title mb-45">
                                Contact Us
                            </h4>
                            <div className="it-contact-wrap">
                                <ContactFormTwo />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ContactAreaOne;
