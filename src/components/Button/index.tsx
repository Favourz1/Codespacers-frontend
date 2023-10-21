import classes from "./styles.module.scss";

interface Props extends React.ComponentProps<"button"> {
  href?: string;
  variant?: "filled" | "outlined" | "text";
  icon?: JSX.Element;
  iconPlacement?: "start" | "end";
}

export default function Button(props: Props) {
  const {
    href,
    variant = "text",
    icon,
    iconPlacement = "start",
    ...domProps
  } = props;

  const className = [classes.button, classes[variant], domProps.className].join(
    " "
  );

  const component = (
    <button className={className} {...domProps}>
      {icon && iconPlacement === "start" ? icon : null}
      {domProps.children}
      {icon && iconPlacement === "end" ? icon : null}
    </button>
  );

  if (href) return <a href={href}>{component}</a>;
  return component;
}
