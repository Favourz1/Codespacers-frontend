interface Props {
  children: JSX.Element;
}

export default function PublicRoutes(props: Props) {
  return props.children;
}
