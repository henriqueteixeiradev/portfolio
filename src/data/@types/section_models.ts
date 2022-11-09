import theme from "ui/theme";

export interface SectionProps {
  py?: keyof typeof theme.spacings;
  px?: keyof typeof theme.spacings;
  children?: React.ReactNode;
}
