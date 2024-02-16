import instagram from "/public/svg/instagram.svg"

export default function Footer() {

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="icons">
                    <a href="https://www.instagram.com/pleasant_cynic/" target="_blank">
                        <img src={instagram} alt="instagram" />
                    </a>

                </div>
                <p className="copyright">© 2024 Olivia Nolan</p>
            </div>
        </footer>
    )
}
