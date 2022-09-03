export interface SubHeader {
  title: string;
  hasButton?: boolean | null;
  textButton?: string;
  actionBackButton?: () => void;
  actionButton?: () => void;
  iconButton?: string;
}
