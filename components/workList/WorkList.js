import classes from './WorkList.module.scss'
import Link from 'next/link'

export const WorkList = prop => {
  const content = prop.prop.content

    const listGen = content.map(prop => {
      const listContent = prop.jobType
      const projectType = listContent.map(prop => {
        return(
        <span key={prop.typeName}>{prop.typeName}</span>
        )
      })
      if (prop.id !== "0") {
        return(
          <Link primary={false} key={prop.id} href={`/work/${prop.slug}`}>
            <a>
              <div data-aos="fade-up" data-aos-duration="700" data-aos-offset="200" className={`row ${classes.WorkListRow}`}>
                <div className='col-xl-10 col-12 g-0 '><h1>{prop.hero.mainHeading}</h1></div>
                <div className='col-xl-2 col-12 g-0 '>{projectType}</div>
              </div>
            </a>
          </Link>
            
      )
      }
  })

  return (
  <section  data-aos="fade-in" data-aos-duration="700" data-aos-offset="200" className={`${classes.paddingFix}`}>
    <div className={`container ${classes.WorkListContainer}`}>
      <div className={`row ${classes.listType}`}>
        <div className='col-xl-10 col-10 col-sm-2 g-0'><h3>Projects</h3></div>
        <div className='col-2 g-0'><h3 className={`${classes.WorkListType}`}>Type</h3></div>
      </div>
      {listGen}
    </div>
  </section>
  )
}
