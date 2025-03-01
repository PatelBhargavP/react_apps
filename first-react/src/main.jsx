import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainContent from './Maincontent';
import Header from './Header';
import Footer from './Footer';

/**
 * Challenge:
 * 
 * - Add a `nav` > `ul` > `li` (x3). The 3 items should say:
 *   "Pricing", "About", and "Contact"
 */

function Page() {
    return (
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    )
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Page />
  </StrictMode>,
)
