import classes from './ScrollButton.module.scss'

export const ScrollButton = () => {

    return (
        <div className={`${classes.scrollButtonContainer}`}>
            <div className={`${classes.scrollButton}`}>
                <a className={`${classes.scroll}`} style={{background: `url(/downArrow.svg) center center no-repeat`}}/>
            </div>
        </div>
    )

}