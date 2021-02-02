import Navbar from '../components/Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className='content'>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
