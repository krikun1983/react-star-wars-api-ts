export type UseThemeProps = {
  theme: string;
  change?: (str: string) => void;
};

export type ChildrenProps = {
  children: JSX.Element;
  props?: [];
};
