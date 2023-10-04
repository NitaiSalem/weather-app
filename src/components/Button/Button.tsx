import type { ButtonProps } from "./Button.d";
import { StyledButton } from "./Button.styled";

const Button: React.FC<ButtonProps> = ({
  children,
  label,
  active,
  size,
  handleClick,
}) => {
  return (
    <StyledButton
      size={size}
      active={active.toString()}
      onClick={() => (handleClick ? handleClick(label) : null)}
    >
      {children}{label}
    </StyledButton>
  );
};

export default Button;
