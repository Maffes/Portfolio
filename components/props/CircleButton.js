import classes from './CircleButton.module.scss'
import Link from 'next/link'

const CircleButton = props => {

  return(
    <Link href={props.link}>
      <a>
      <span className={`circle`}>{props.text}</span>
      </a>
    </Link>
  )
}

export default CircleButton