import '../index.css';

export default function Footer() {
    return ( 
        <footer className="site-footer">
            <div className="site-footer-inner">
                <div className="site-footer-main">
                    <h2 className="site-footer-title">Need help with plant care?</h2>
                    <p className="site-footer-text">
                        Address: 123 Botanical Lane, Green City, 2345 Copenhagen, Denmark <br />
                        Email: care@flowerplant2026.dk <br />
                        Mobile: +45 20 76 76 54
                    </p>
                </div>
                <p className="site-footer-meta">
                    &copy; 2026 Flowerplant · Plant Care Companion
                </p>
            </div>
        </footer>
    )
}