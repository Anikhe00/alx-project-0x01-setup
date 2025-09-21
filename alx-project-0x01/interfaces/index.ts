export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface ButtonProps {
  title: string;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-lg" | "rounded-full";
  styles: string;
}
