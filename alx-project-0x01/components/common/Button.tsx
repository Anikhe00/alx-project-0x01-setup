import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({
  title,
  size = "medium",
  shape = "rounded-md",
  styles = "",
}) => {
  const baseStyles =
    "px-4 py-2 font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors cursor-pointer";

  const sizeStyles: Record<string, string> = {
    small: "text-sm px-3 py-1.5",
    medium: "text-base px-4 py-2",
    large: "text-lg px-6 py-3",
  };

  return (
    <button className={`${baseStyles} ${sizeStyles[size]} ${shape} ${styles}`}>
      {title}
    </button>
  );
};

export default Button;
