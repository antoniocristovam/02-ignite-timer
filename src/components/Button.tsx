import { ButtonContainer, ButtonVariant } from "./Button.styles";
import styles from "./Button.module.css";

interface ButtonProps {
  variant?: ButtonVariant;
}
const Button = ({ variant = "primary" }: ButtonProps) => {
  return <ButtonContainer variant={variant}>Enviar</ButtonContainer>;
};

export default Button;
