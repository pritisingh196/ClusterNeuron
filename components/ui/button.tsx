import { forwardRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "default", size = "default", children, ...props },
    ref,
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-full font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";

    const variants = {
      default:
        "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl transform hover:scale-105",
      secondary:
        "bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700",
      outline:
        "border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800",
      ghost:
        "hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-700 dark:text-gray-300",
      link: "underline-offset-4 hover:underline text-blue-600 dark:text-blue-400",
    };

    const sizes = {
      default: "h-12 px-6 py-3 text-base",
      sm: "h-9 px-4 text-sm",
      lg: "h-14 px-8 py-4 text-lg",
      icon: "h-10 w-10",
    };

    return (
      <motion.button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        {...(props as any)}
      >
        {children}
      </motion.button>
    );
  },
);

Button.displayName = "Button";

export { Button };
