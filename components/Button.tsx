type Props = {
  className: string;
  text: string;
};
export const Button = (props: Props) => {
  return <button className={props.className}>{props.text}</button>;
};
