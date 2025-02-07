import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:animate-pulse",
        secondary:
          "bg-gray-300 text-gray-900 shadow-md hover:bg-gray-400 hover:scale-105",
        outline:
          "border border-gray-400 text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-100 hover:border-gray-900 hover:shadow-md",
        destructive:
          "bg-red-500 text-white shadow-md hover:bg-red-600 hover:animate-shake",
        ghost:
          "px-4 py-2 text-gray-900 hover:bg-gray-200 hover:opacity-80",
        line: 
          "relative text-gray-900 hover:text-blue-600 transition-all before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-blue-500 before:transition-all before:duration-300 before:translate-x-[-100%] hover:before:translate-x-0",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-3 text-md",
        lg: "h-12 px-6 text-lg",
        icon: "h-10 w-10 flex items-center justify-center",
      },
    },
    defaultVariants: {
      variant: "line",
      size: "default",
    },
  }
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
});
Button.displayName = "Button";

export { Button, buttonVariants };
