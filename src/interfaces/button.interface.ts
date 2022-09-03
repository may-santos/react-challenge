export interface Button {
  title?: string;
  icon?: string | null;
  isOutline?: boolean | null;
  onClick?: () => void;
}
