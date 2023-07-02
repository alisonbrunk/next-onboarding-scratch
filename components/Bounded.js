import clsx from "clsx";

export function Bounded({
  as: Comp = "div",
  yPadding = "base",
  nav,
  footer,
  collapsible = true,
  className,
  children,
}) {
  return (
    <Comp
      data-collapsible={collapsible}
      className={clsx(
        "px-6",
        yPadding === "xs" && "py-4 md:py-6",
        yPadding === "sm" && "py-8 md:py-10",
        yPadding === "base" && "py-20 md:py-28",
        yPadding === "lg" && "py-32 md:py-48",
        nav === "yes" && "shadow-lg shadow-gray-300",
        footer === "yes" && "bg-teal-400",
        className
      )}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </Comp>
  );
}
