import classes from './imgSpan.module.scss'

export const ImgSpan = props => {
  

/* 
Image zoon on scroll.

%%  Will require state  %%

when image is in viewport, run code.
code has a variable for zoom position starting at 0.
When viewport is active and scrolled use position / a percentage to use an addition. (E.G scroll variabel is between 1000 and 6000, divide that by 100 to get 1 which can go up to 6. will need to find a correct number to divide by.)
generated number will be added on a tranform (Scale)


*/


  const content = props.prop.hero
  return (
        <div data-aos="zoom-in" data-aos-duration="700" data-aos-offset="200" className={`${classes.imgSpanContainer} col-12 `}>
          <div className={`${classes.imgSpan}`} style={{backgroundImage: `url(${content.imageFull})`}} ></div>
        </div>
  )

}
