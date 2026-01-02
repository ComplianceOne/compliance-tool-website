const FooterWidgetThree = () => {
  return (
    <div className="it-footer-widget it-footer-col-4 d-flex justify-content-xl-end">
      <div>
        <h4 className="it-footer-widget-title">Contact Info</h4>
        <div className="it-footer-widget-tel-box d-flex align-items-center mb-20">
          <div className="it-footer-widget-tel-icon">
            <span>
              <i className="fa-light fa-map"></i>
            </span>
          </div>
          <div className="it-footer-widget-tel-text">
            <a
              className="border-line-white"
              target="_blank"
              href="https://www.google.com/maps/dir///@24.4503253,17.1644279,4.17z?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D"
            >
              569 Cost AvenueSilver Spring MD 20910.New york
            </a>
          </div>
        </div>
        <div className="it-footer-widget-tel-box d-flex align-items-center mb-20">
          <div className="it-footer-widget-tel-icon">
            <span>
              <i className="fa-light fa-phone-volume"></i>
            </span>
          </div>
          <div className="it-footer-widget-tel-text">
            <a className="border-line-white" href="tel:+8903014155058">
              (+890)301-415-5058
            </a>
          </div>
        </div>
        <div className="it-footer-widget-tel-box d-flex align-items-center">
          <div className="it-footer-widget-tel-icon">
            <span>
              <i className="fa-light fa-envelope"></i>
            </span>
          </div>
          <div className="it-footer-widget-tel-text">
            <a className="border-line-white" href="mailto:Saasty@gmail.com">
              Saasty@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FooterWidgetThree;
