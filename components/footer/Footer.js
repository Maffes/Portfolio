import classes from './Footer.module.scss';
import CircleButton from '../props/CircleButton.js';
import { ChangeBackground } from '../changeBackground/ChangeBackground';

const Footer = () => {
  return (
    <section className={`${classes.footer} footer`}>
      <ChangeBackground>
        <div className={`container`}>
          <h1>
            Let&apos;s build something <br />
            amazing together
          </h1>
          <div className={`${classes.contactSection} row`}>
            <div
              className={`col-12 col-sm-6 ${classes.contactButton} d-flex justify-content-md-end justify-content-center`}
            >
              <CircleButton text={'Say Hello'} link={'/contact'} />
            </div>
            <div
              className={`col-12 col-sm-6 d-flex justify-content-md-start justify-content-center ${classes.contactInfo}`}
            >
              <ul>
                <li>
                  <a href="tel:0403328691">0403328691</a>
                </li>
                <li>Based on the Sunshine Coast</li>
                <li>
                  <a href="mailto:maffes33@gmail.com">maffes33@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={`g-0 row row-cols-3 ${classes.copyright}`}>
            <p className="col-12 col-md-1 text-center m-0 text-md-start">
              ©2022
            </p>
            <p className="col-12 col-md-8 text-center m-0 text-md-start">
              MADE BY MAFF
            </p>
            <p className="col-12 col-md-3 text-center m-0 text-md-end">
              ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </ChangeBackground>
    </section>
  );
};

export default Footer;
