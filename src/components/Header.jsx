import logoSVG from "/src/icons/logo-svg/logo-color.svg"

function Header(){
    return(
        <header>
        <img src={logoSVG} alt="Trad Music Logo" className="trad-music-logo"/>
        </header>   
    )
}

export default Header;