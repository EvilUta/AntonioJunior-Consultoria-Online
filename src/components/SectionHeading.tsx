type SectionHeadingProps = {
  align?: 'left' | 'center'
  description: string
  eyebrow: string
  title: string
}

export const SectionHeading = ({
  align = 'left',
  description,
  eyebrow,
  title,
}: SectionHeadingProps) => {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <p className="section-tag">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}
