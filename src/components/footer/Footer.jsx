export const Footer = (props) => {
  return (
    <footer>
      <div className="footer-content">
        <a href="#" className="logo">
          Game Field
        </a>
        <p className="logo-p">Copyright ©2024 All rights reserved</p>
        <div className="logoflex">
          <a
            className="footer-fb"
            href="https://www.facebook.com/"
            target="_blank"
          >
            <img
              src="images/logo/fb.svg"
              alt="facebook"
              width="30px"
              height="30px"
            />
          </a>
          <a
            className="footer-logo"
            href="https://www.instagram.com/"
            target="_blank"
          >
            <img
              src="images/logo/instagram.svg"
              alt="instagram"
              width="30px"
              height="30px"
            />
          </a>
          <a href="https://twitter.com/?lang=en" target="_blank">
            <img
              src="images/logo/twitter.svg"
              alt="twitter"
              width="30px"
              height="30px"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
