import footerLogo from "../icons/logo-svg/logo-color.svg"
import gitHubIcon from "../icons/github.svg"

function Footer(){

    return(
        <footer>
            {/*Footer Logo */}
            <div className="footer-logo-and-text">
                <img src={footerLogo} alt="Footer Logo" className="footer-logo"/><p>TradMusic</p>
            </div>

        <div className="copyright-and-github-link">
             {/*Footer Copyright*/}
             <div class="copyright">
                <p>
                &copy; Copyright 2023-{( new Date().getFullYear() )} <a href="https://github.com/AishaBu"
                target="_blank"> Aisha Busari </a>
                </p>
            </div>

             {/*Github Icon and Link*/}
             <div class="footer-github-icon">
                <a href="https://github.com/AishaBu" target="_blank">
                <img src={gitHubIcon} alt="Github Icon and Link to Repository" className="github-icon"></img>
                </a>
            </div>
        </div>

        </footer>   
    )
}

export default Footer;