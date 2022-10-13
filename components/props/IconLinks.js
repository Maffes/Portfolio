import classes from './IconLinks.module.scss';
import Link from 'next/link';

const IconLinks = (iconList) => {
  const links = iconList.iconList.prop.hero.links;
  const Icon = links.map((links) => {
    //   return (
    //     <div key={links.title} className="col">
    //       <Link href={links.url}>
    //         <a
    //           className={`${classes.links}`}
    //           style={{
    //             background: `url(../../${links.title}.svg) center center no-repeat`,
    //           }}
    //           href={links.url}
    //         />
    //       </Link>
    //     </div>
    //   );
    // });

    return (
      <div key={links.title} className="col">
        <Link href={links.url}>
          <a className={`${classes.links}`} href={links.url}>
            <i className={`${links.icon}`}></i>
          </a>
        </Link>
      </div>
    );
  });

  //Get classname for icon and put below
  <a key={links.title} className="col">
    <i></i>
  </a>;

  return (
    <div
      data-aos="fade-in"
      data-aos-duration="500"
      data-aos-delay="700"
      data-aos-offset="0"
      className={` ${classes.links} ${classes.linksRow} rows position-absolute`}
    >
      <div className="column">
        <div className="row">{Icon}</div>
      </div>
    </div>
  );
};

export default IconLinks;
