export default function Header() {
    return (
        <header>
            <img src="src/react-logo.svg" className='header-image' alt="React logo" />
            <nav>
              <ul className='nav-list'>
                <li>
                  Pricing
                </li>
                <li>
                  About
                </li>
                <li>
                  Contract
                </li>
              </ul>
            </nav>
        </header>
    )
}