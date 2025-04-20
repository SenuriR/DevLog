import { Link } from 'react-router-dom';

function Navbar () {
    return (
        <nav style={styles.nav}>
            <h1 style={styles.logo}>DevLog</h1>
            <div style={styles.links}>
                <Link to="/" style={styles.links}> Home </Link>
                <Link to="/blog" style={styles.links}> Blog </Link>
                <Link to="/projects" style={styles.links}> Projects </Link>
                <Link to="/about" style={styles.links}> About </Link>
            </div>
        </nav>
    );
}

const styles= {
    nav: {
        padding: '1rem 2rem',
        backgroundColor: '#222',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo: {
        margin: 0,
        fontSize: '1.5rem',
    },
    links: {
        display: 'flex',
        gap: '1.5rem',
    },
};

export default Navbar;