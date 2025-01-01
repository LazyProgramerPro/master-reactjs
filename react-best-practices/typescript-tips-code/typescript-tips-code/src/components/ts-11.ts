export type ComponentProps = {
  title: string;
  isVisible: boolean;
  onClick: () => void;
  onSubmit: () => void;
  onHover?: () => void;
};

type Handlers = keyof ComponentProps & `on${string}`;
