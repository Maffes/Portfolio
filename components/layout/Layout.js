import Footer from '../footer/Footer'
import Header from '../header/Header'
export const Layout = ({children}) => {


  return (
    <container>
      <Header/>
        <main>{children}</main> 
      <Footer/>
     </container>
  )
}