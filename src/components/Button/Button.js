import ButtonStyled from "./Button.style";

const Button = ({ color, text, onClick }) => {
    return (
        <ButtonStyled onClick={ onClick } style={{ backgroundColor: color }}>
            { text }
        </ButtonStyled>
    )
}

export default Button;