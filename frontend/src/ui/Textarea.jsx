import React from "react";
import { cn } from "../lib/utils"; // adjust the path if needed

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md px-3 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      style={{
        border: "1px solid #d8d8e1", // border-input -> #d8d8e1
        backgroundColor: "#f5f5f5", // bg-background -> #f5f5f5
        color: "#0A1A3F", // default text color -> primary
        placeholderColor: "#8C8C8C", // placeholder:text-muted-foreground -> #8C8C8C
        outline: "none",
        boxShadow: "0 0 0 2px #2F7F00", // focus-visible:ring-ring -> green-ish placeholder (#2F7F00), adjust if needed
      }}
      ref={ref}
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";

export { Textarea };
