import classes from './IconLinks.module.scss'
import Link from 'next/link'

const IconLinks = iconList => {
  const links = iconList.iconList.prop.hero.links
  
  const Icon = links.map(links => {

    return(
      <div key={links.title} className='col'>
      <Link href={links.url}>
          <a className={`${classes.links}`} style={{background: `url(../../${links.title}.svg) center center no-repeat`}} href={links.url}/>
          </Link>
        </div>
    

    )
    

  })



  return(
    <div data-aos="fade-in" data-aos-duration="700" data-aos-delay="800" data-aos-offset="0" className={` ${classes.links} rows position-absolute`}>
      <div className='column'>
        <div className='row'>
        {Icon}
        </div>
      </div>
    </div>
  )
}

export default IconLinks
