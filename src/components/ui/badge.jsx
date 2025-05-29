import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        pendiente: "bg-yellow-100 text-yellow-800 border border-yellow-200",
        confirmada: "bg-green-100 text-green-700 border border-green-200",
        cancelada: "bg-red-100 text-red-700 border border-red-200",
        reprogramada: "bg-orange-100 text-orange-700 border border-orange-200",
        atendida: "bg-sky-100 text-sky-700 border border-sky-200",
        no_asistio: "bg-gray-100 text-gray-700 border border-gray-300",
        en_curso: "bg-indigo-100 text-indigo-700 border border-indigo-200",
        
        consulta: "bg-blue-100 text-blue-700 border border-blue-200",
        examenes: "bg-green-100 text-green-700 border border-green-200",
        tratamientos: "bg-yellow-100 text-yellow-700 border border-yellow-200",
        procedimientos: "bg-purple-100 text-purple-700 border border-purple-200",
      },

    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props} />
  );
}

export { Badge, badgeVariants }
