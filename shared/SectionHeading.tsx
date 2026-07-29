interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={className}>
      {badge && (
        <span className="bg-primary/10 text-primary inline-flex rounded-full px-3 py-1 text-sm font-medium">
          {badge}
        </span>
      )}

      <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="text-muted-foreground mt-4 max-w-2xl text-lg">
          {description}
        </p>
      )}
    </div>
  );
}