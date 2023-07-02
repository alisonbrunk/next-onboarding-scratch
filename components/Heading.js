import clsx from "clsx";

export function Heading({ as: Comp = "h1", size = "lg", children, className }) {
  return (
    <Comp
      className={clsx(
        "font-semibold leading-normal tracking-normal",
        size === "xl" && "text-4xl md:text-5xl",
        size === "lg" && "text-3xl md:text-4xl",
        size === "md" && "text-2xl md:text-3xl",
        size === "sm" && "text-xl md:text-2xl",
        className
      )}
    >
      {children}
    </Comp>
  );
}
