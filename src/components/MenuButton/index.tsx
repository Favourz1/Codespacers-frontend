import Button, { ButtonProps } from "../Button";

interface Props extends ButtonProps {
  label: string;
  active?: boolean;
}

export default function MenuButton(props: Props) {
  const { active, label, ...buttonProps } = props;

  if (active)
    return (
      <Button {...buttonProps} variant="filled">
        {label}
      </Button>
    );

  return <Button {...buttonProps}>{label}</Button>;
}
