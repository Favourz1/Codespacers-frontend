import classes from "./styles.module.scss";

interface Props extends React.ComponentProps<"button"> {
  href?: string;
  variant?: "filled" | "outlined" | "text";
}

export default function Button(props: Props) {
  const { href, variant = "text", ...domProps } = props;

  const className = [classes.button, classes[variant], domProps.className].join(
    " "
  );

  const component = (
    <button className={className} {...domProps}>
      {domProps.children}
    </button>
  );

  if (href) return <a href={href}>{component}</a>;
  return component;
}
