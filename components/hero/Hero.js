import classes from './Hero.module.scss';
import IconLinks from '../props/IconLinks';
import { useState, useEffect } from 'react';

export const Hero = (props) => {
  const content = props.prop.hero;

  const [transitionState, setTransitionState] = useState(true);
  const [transitionStateSecond, setTransitionStateSecond] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      setTransitionState(!transitionState);
      setTimeout(function () {
        setTransitionStateSecond(!transitionStateSecond);
      }, 200);
    }, 100);
  }, []);

  /* 
container-fluid = Image Section
classes.heroContainer = Text Section
*/

  return (
    <section className={`${classes.heroContainer}`}>
      <div className={` ${classes.hero}`}>
        <div className="container">
          <div className={`col-lg-7 col-12 ${classes.heroText}`}>
            <h2 data-aos="fade-up" data-aos-duration="500" data-aos-delay="500">
              {content.subHeading}
            </h2>
            <h1 data-aos="fade-up" data-aos-duration="500" data-aos-delay="550">
              {content.mainHeading}
            </h1>
            <p data-aos="fade-up" data-aos-duration="500" data-aos-delay="600">
              {content.text}
            </p>
            <IconLinks iconList={props} />
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className={`row ${classes.heroImageContainer}`}>
          <div className={`col-lg-7 col-12 ${classes.imageSpacer}`}></div>
          <div
            style={{ backgroundImage: `url(${content.image})` }}
            className={`col-lg-5 col-12 ${classes.heroImage}`}
          >
            <div
              className={`col-lg-5 col-12 ${classes.heroImageColorBlock} ${
                transitionState ? '' : 'loaded-img'
              }`}
            ></div>
            <div
              className={`col-lg-5 col-12 ${classes.heroImageColorBack} ${
                transitionStateSecond ? '' : 'loaded-img'
              }`}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};
