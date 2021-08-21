type UiButtonProps = {
  text: string;
  onClick: () => Promise<void>;
  disabled: boolean;
  theme?: string;
  classes?: string;
};

export default UiButtonProps;
