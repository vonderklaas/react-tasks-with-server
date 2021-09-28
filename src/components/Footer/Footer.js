import { FooterStyle, FooterParagraphStyle } from './Footer.style';
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <FooterStyle>
            <FooterParagraphStyle>Copyright &copy; 2021</FooterParagraphStyle>
            <Link to='/about'>About us</Link>
        </FooterStyle>
    )
}

export default Footer;