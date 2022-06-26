import classes from './TextSpan.module.scss'

export const TextSpan = prop => {
  const Paragraph = prop.prop
  const setTextWidth = Paragraph.colSpan < 12 ? 'setTextWidth' : '';

  
  return (
        <div  className={`${classes.textSpan} col-lg-${Paragraph.colSpan} col-12 `}>
        <h1 data-aos="fade-up" data-aos-duration="700" data-aos-offset="150" className={` `}>{Paragraph.title}</h1>
        <p data-aos="fade-up" data-aos-duration="700" data-aos-offset="100" data-aos-delay="50" className={` ${setTextWidth}`}>{Paragraph.text}</p>
        </div>
  )
}
