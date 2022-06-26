import classes from './IconList.module.scss'


export const IconList = prop => {
    const content = prop.prop
    const ContentList = content.jobType.map(props => {
        return (
            <li key={props.typeId} style={{backgroundImage: `url(/${props.typeId}.svg)`}}>{props.typeName}</li>
        )
    })

    return (
        <div  className={`col-lg-${content.Services.colSpan} col-12 ${classes.IconList}`}>
            <h1 data-aos="fade-up" data-aos-duration="700"  data-aos-offset="150">{content.Services.title}</h1>
            <ul data-aos="fade-up" data-aos-duration="700" data-aos-offset="100" data-aos-delay="50">{ContentList}</ul>
        </div>
    )
  }


