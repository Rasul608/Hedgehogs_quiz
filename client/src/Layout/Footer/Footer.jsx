// Footer.js
import React from 'react';
import './footer.css'; 

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Киборги-мутанты</p>
              
            </div>
        </footer>
    );
}

export default Footer;