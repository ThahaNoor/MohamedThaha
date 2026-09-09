interface SectionHeadingProps {
  id?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  id,
  title,
  subtitle,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <header className={`mb-10 sm:mb-12 ${className}`}>
      <h2
        id={id}
        className={`text-2xl font-semibold tracking-tight text-foreground sm:text-3xl lg:text-4xl ${alignment}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 max-w-2xl text-base leading-relaxed text-muted sm:text-lg ${alignment} ${align === "center" ? "max-w-3xl" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </header>
  );
}
