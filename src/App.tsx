import { Outlet, useLocation } from 'react-router-dom';
import Header from './shared/components/header/Header';
import Footer from './shared/components/footer/Footer';
import ScrollToTop from './shared/components/scroll-to-top/ScrollToTop';
import './App.scss';
import { useEffect } from 'react';

const routeTitles: { path: string; title: string }[] = [
  { path: '/', title: 'LiveSmart · Smart Homes for Africa' },
  { path: '/about', title: 'LiveSmart · About Us' },
  { path: '/services', title: 'LiveSmart · Services' },
  { path: '/contact', title: 'LiveSmart · Contact' },
  { path: '/smart-spaces', title: 'LiveSmart · Smart Spaces' },
  { path: '/build-smart-space', title: 'LiveSmart · Build a Smart Space' },
  { path: '/book-tour', title: 'LiveSmart · Book a Tour' },
  { path: '/book-tour/consultation', title: 'LiveSmart · Consultation' },
  { path: '/terms-and-conditions', title: 'LiveSmart · Terms & Conditions' },
];

const resolveTitle = (pathname: string) => {
  const match = routeTitles.find(({ path }) => {
    if (path === '/smart-spaces') {
      return pathname === '/smart-spaces' || pathname.startsWith('/smart-spaces/');
    }
    return pathname === path;
  });

  return match?.title ?? 'LiveSmart · Intelligent Living';
};

function App() {
  const location = useLocation();

  useEffect(() => {
    document.title = resolveTitle(location.pathname);
  }, [location.pathname]);

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
