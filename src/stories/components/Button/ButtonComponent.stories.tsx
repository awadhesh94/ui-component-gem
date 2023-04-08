import { ButtonComponent, ButtonComponentProps } from ".";

export default {
  title: "ButtonComponent/Default",
  component: ButtonComponent,
};

export const _ButtonComponent = () => {
  const props: ButtonComponentProps = {
    type: "primary",
  };
  return <ButtonComponent {...props} />;
};
