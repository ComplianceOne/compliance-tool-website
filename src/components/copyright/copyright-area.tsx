interface CopyrightProps {
  itemClass?: string;
}

const CopyrightArea = ({ itemClass }: CopyrightProps) => {
  return (
    <div className={itemClass || 'it-copyright-area it-copyright-border'}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-7">
            <div className="it-copyright-left text-center text-md-start">
              <p className="mb-0">
                © 2025 <a href="#">SaaSty</a> All Rights Reserved, Created by{' '}
                <a href="#">Ordianit.</a>
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-5">
            <div className="it-copyright-right text-center text-md-end">
              <div className="it-copyright-social">
                <span>Social media</span>
                <a href="#">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CopyrightArea;
