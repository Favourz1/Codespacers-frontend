import classes from "./styles.module.scss";

export interface ButtonProps extends React.ComponentProps<"button"> {
  customClass?: string;
  href?: string;
  variant?: "filled" | "outlined" | "text";
  icon?: JSX.Element;
  iconPlacement?: "start" | "end";
}

export default function Button(props: ButtonProps) {
  const {
    customClass,
    href,
    variant = "text",
    icon,
    iconPlacement = "start",
    ...domProps
  } = props;

  const className = [classes.button, classes[variant], domProps.className, customClass].join(
    " "
  );

  const component = (
    <button className={className} {...domProps}>
      {icon && iconPlacement === "start" ? icon : null}
      {domProps.children}
      {icon && iconPlacement === "end" ? icon : null}
    </button>
  );

  if (href)
    return (
      <a href={href} className={classes.link_wrapper}>
        {component}
      </a>
    );
  return component;
}
