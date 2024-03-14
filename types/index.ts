interface ProjectPropsTypes {
  id: string;
  title: string;
  transaction?: string;
  sector?: string;
  industry?: string;
}

interface SidebarControlTypes {
  open: boolean;
  setOpen: (boolean: boolean) => void;
}

interface RippleEffectTypes {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: string;
}
