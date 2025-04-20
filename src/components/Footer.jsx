function Footer () {
    return (
        <footer style={styles.footer}>
            <p> {new Date().getFullYear()} DevLog. Built by Sen.</p>
        </footer>
    );
}

const styles={
    footer: {
        marginTop: '3rem',
        padding: '1rem 2rem',
        backgroundColor: '#f1f1f1',
        textAlign: 'center',
        fontSize: '0.9rem',
    },
};

export default Footer;