import FooterStyle from './Footer.style';
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <FooterStyle>
            <p>Copyright &copy; 2021</p>
            <Link to='/about'>About us</Link>
        </FooterStyle>
    )
}

export default Footer;