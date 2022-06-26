import classes from './Header.module.scss'
import Link from 'next/link'
import Image from 'next/image'
const Header = () => {

  return (
    <nav data-aos="fade-in" data-aos-duration="700" data-aos-delay="50" data-aos-offset="0" className={` ${classes.navbar}`}>
      <div className={`container`}>
        <div className={`${classes.logo}`}>
          <Link href="/">
            <a >
              <div className={`${classes.logo}`}>
                <Image
                  alt="Maff Logo"
                  src='/logo.svg'
                  width="50px"
                  height="50px" />
                <p className={classes.logoName}>Maff</p>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Header

