import Footer from './Footer'
import Header from './Header'

const Layout: React.FC<any> = ({ children }) => {
  return (
    <div className='main'>
      <Header/>
      {children}
      <Footer/>
    </div>
  )
}

export default Layout