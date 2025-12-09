import { StrictMode, type JSX } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.scss'
import App from './App.tsx'
import HomePage from './pages/home/HomePage.tsx'
import AboutPage from './pages/about/AboutPage.tsx'
import ServicesPage from './pages/services/ServicesPage.tsx'
import ContactPage from './pages/contact/ContactPage.tsx'
import SmartSpacesList from './pages/smart-spaces-list/SmartSpacesList.tsx'
import BuildSmartSpacePage from './pages/build-smart-space/BuildSmartSpacePage.tsx'
import BookTourPage from './pages/book-tour/BookTourPage.tsx'
import SmartSpaceDetailPage from './pages/smart-space-detail/SmartSpaceDetailPage.tsx'
import ConsultationPage from './pages/consultation/ConsultationPage.tsx'
import TermsAndConditionsPage from './pages/terms-and-conditions/TermsAndConditionsPage.tsx'

const enabledRoutes = new Set([
  'about',
  // 'services',
  'contact',
  'smart-spaces',
  'book-tour',
  'book-tour/consultation',
  "build-smart-space",
  'terms-and-conditions',
]);

const ComingSoonPage: React.FC<{ feature: string }> = ({ feature }) => (
  <div
    style={{
      backgroundColor: "var(--background-color)",
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#f5f5f5',
      fontSize: '1.25rem',
      textTransform: 'uppercase',
      letterSpacing: '0.2rem',
    }}
  >
    {feature} Coming Soon
  </div>
);

const routeElement = (
  path: string,
  element: JSX.Element,
  featureName: string
) => (enabledRoutes.has(path) ? element : <ComingSoonPage feature={featureName} />);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element:  routeElement('/', <HomePage />, 'Home'),
      },
      {
        path: 'about',
        element: routeElement('about', <AboutPage />, 'About'),
      },
      {
        path: 'services',
        element: routeElement('services', <ServicesPage />, 'Services'),
      },
      {
        path: 'contact',
        element: routeElement('contact', <ContactPage />, 'Contact'),
      },
      {
        path: 'smart-spaces',
        element: routeElement('smart-spaces', <SmartSpacesList />, 'Smart Spaces'),
      },
      {
        path: 'smart-spaces/:id',
        element: routeElement('smart-spaces/:id', <SmartSpaceDetailPage />, 'Delivery Details'),
      },
      {
        path: 'build-smart-space',
        element: routeElement('build-smart-space', <BuildSmartSpacePage />, 'Build Smart Space'),
      },
      {
        path: 'book-tour',
        element: routeElement('book-tour', <BookTourPage />, 'Book Tour'),
      },
      {
        path: 'book-tour/consultation',
        element: routeElement('book-tour/consultation', <ConsultationPage />, 'Consultation'),
      },
      {
        path: 'terms-and-conditions',
        element: routeElement('terms-and-conditions', <TermsAndConditionsPage />, 'Terms & Conditions'),
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
