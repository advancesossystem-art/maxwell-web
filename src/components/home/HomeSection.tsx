import { cn } from "@/lib/utils";

type Tone = "white" | "soft" | "deep" | "elevated" | "base";

export function HomeSection({
  children,
  tone = "white",
  className,
  id,
  "aria-label": ariaLabel,
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
  id?: string;
  "aria-label"?: string;
}) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn(
        "v6-section",
        tone === "soft" || tone === "deep" || tone === "elevated" ? "v6-section--soft" : "v6-section--white",
        className,
      )}
    >
      <div className="v6-container">{children}</div>
    </section>
  );
}

export function HomeSectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  wideTitle = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
  wideTitle?: boolean;
  className?: string;
}) {
  const centered = align === "center";

  return (
    <header
      className={cn(
        "w-full",
        centered ? "text-center" : "text-left",
        className,
      )}
    >
      <p className={cn("v6-eyebrow-line v6-eyebrow", centered && "justify-center")}>{eyebrow}</p>
      <h2
        className={cn(
          "v6-section-title mt-4 text-balance",
          wideTitle && "v6-section-title--wide",
          centered && "mx-auto",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className={cn("v6-lead mt-4 max-w-3xl text-balance", centered && "mx-auto")}>{description}</p>
      ) : null}
    </header>
  );
}
