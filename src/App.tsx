import { Outlet } from 'react-router-dom';
import Header from './shared/components/header/Header';
import Footer from './shared/components/footer/Footer';
import ScrollToTop from './shared/components/scroll-to-top/ScrollToTop';
import './App.scss';

function App() {
  return (
    <div className="app-container">
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
