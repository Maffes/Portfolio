export const Container = ({children}) => {

  return (
        <section className={`container`}>
            <div className='row'>{children}</div>
        </section>
  )

}