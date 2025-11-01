import { forwardRef } from "react";
import { motion, MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type MotionButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  keyof MotionProps
>;

export interface ButtonProps extends MotionButtonProps {
  variant?:
    | "default"
    | "secondary"
    | "outline"
    | "ghost"
    | "link"
    | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
  children: React.ReactNode;
  asChild?: boolean;
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      children,
      asChild = false,
      loading = false,
      disabled,
      ...props
    },
    ref,
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-white relative overflow-hidden group";

    const variants = {
      default:
        "bg-slate-900 text-white hover:bg-slate-800 shadow-sm hover:shadow-md active:scale-95",
      secondary:
        "bg-slate-100 text-slate-900 hover:bg-slate-200 active:scale-95",
      outline:
        "border border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 active:scale-95",
      ghost:
        "text-slate-700 hover:bg-slate-100 hover:text-slate-900 active:scale-95",
      link: "underline-offset-4 hover:underline text-slate-900 hover:text-slate-700",
      destructive:
        "bg-red-600 text-white hover:bg-red-700 shadow-sm hover:shadow-md active:scale-95",
    };

    const sizes = {
      default: "h-10 px-6 py-2 text-sm min-h-[40px]",
      sm: "h-8 px-4 py-1.5 text-xs min-h-[32px]",
      lg: "h-12 px-8 py-3 text-base min-h-[48px]",
      icon: "h-10 w-10 min-h-[40px]",
    };

    const responsiveSizes = {
      default:
        "h-10 sm:h-12 px-4 sm:px-6 py-2 text-sm sm:text-base min-h-[40px] sm:min-h-[48px]",
      sm: "h-8 sm:h-9 px-3 sm:px-4 py-1.5 text-xs sm:text-sm min-h-[32px] sm:min-h-[36px]",
      lg: "h-12 sm:h-14 px-6 sm:px-8 py-3 text-base sm:text-lg min-h-[48px] sm:min-h-[56px]",
      icon: "h-10 w-10 sm:h-12 sm:w-12 min-h-[40px] sm:min-h-[48px]",
    };

    const loadingSpinner = (
      <motion.div
        className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    );

    const buttonContent = (
      <>
        {loading && (
          <motion.div
            className="absolute inset-0 bg-white/10 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
        <span className={cn("flex items-center gap-2", loading && "opacity-0")}>
          {children}
        </span>
        {loading && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            {loadingSpinner}
          </motion.div>
        )}
      </>
    );

    if (asChild) {
      return (
        <motion.div
          className={cn(
            baseStyles,
            variants[variant],
            responsiveSizes[size],
            className,
          )}
          whileHover={{ scale: loading ? 1 : 1.02 }}
          whileTap={{ scale: loading ? 1 : 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          {buttonContent}
        </motion.div>
      );
    }

    return (
      <motion.button
        className={cn(
          baseStyles,
          variants[variant],
          responsiveSizes[size],
          (disabled || loading) && "cursor-not-allowed",
          className,
        )}
        ref={ref}
        whileHover={{ scale: loading || disabled ? 1 : 1.02 }}
        whileTap={{ scale: loading || disabled ? 1 : 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        disabled={disabled || loading}
        {...(props as any)}
      >
        {buttonContent}
      </motion.button>
    );
  },
);

Button.displayName = "Button";

export { Button };
