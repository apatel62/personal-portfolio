//imports the link component and useLocation hook from teh react-router-DOM library
import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
    const currentPage = useLocation().pathname;

    return (
        <header>
            <h1>Arjun Patel</h1>
            <nav>
                <Link
                    to="/"
                    // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                    // If it is, we set the current page to 'active', otherwise we set it to '' or no class
                    className={currentPage === '/' ? 'active' : ''}
                    >
                    About Me
                </Link>
                <Link
                    to="/Portfolio"
                    // Check to see if the currentPage is `Portfolio`, and if so we use the active class. Otherwise, we set it to have no class
                    className={currentPage === '/Portfolio' ? 'active' : ''}
                    >
                    Portfolio
                </Link>
                <Link
                    to="/Contact"
                    // Check to see if the currentPage is `Contact`, and if so we use the active class. Otherwise, we set it to have no class
                    className={currentPage === '/Contact' ? 'active' : ''}
                    >
                    Contact Me
                </Link>
                <Link
                    to="/Resume"
                    // Check to see if the currentPage is `Resume`, and if so we use the active class. Otherwise, we set it to have no class
                    className={currentPage === '/Resume' ? 'active' : ''}
                    >
                    Resume
                </Link>
            </nav>
        </header>
    );
}  

export default NavTabs;