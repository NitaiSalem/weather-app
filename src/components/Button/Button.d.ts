export interface ButtonProps {
  children?: ReactNode;
  label: string;
  size?: ButtonSize;
  active: string;
  handleClick?: (degreeLabel?: string) => void;
}

export interface StyledButtonProps {
  size?: ButtonSize;
  active: string;
}

export enum ButtonSize {
  Small = "small",
  Medium = "medium",
  Large = "large",
}
