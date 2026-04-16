import type { CSSProperties } from 'react'

export type Testimonial = {
  alt: string
  galleryFit?: 'contain' | 'cover' | 'fill'
  galleryPosition?: string
  galleryScale?: number
  image: string
  mobileGalleryFit?: 'contain' | 'cover' | 'fill'
  mobileGalleryPosition?: string
  mobileGalleryScale?: number
  previewPosition?: string
  title?: string
}

type TestimonialPreviewCardProps = {
  index: number
  onOpen: () => void
  testimonial: Testimonial
}

export const TestimonialPreviewCard = ({
  index,
  onOpen,
  testimonial,
}: TestimonialPreviewCardProps) => {
  const imageStyle = testimonial.previewPosition
    ? ({ objectPosition: testimonial.previewPosition } as CSSProperties)
    : undefined

  return (
    <button
      aria-haspopup="dialog"
      aria-label={`Abrir ${testimonial.title ?? `depoimento ${index + 1}`}`}
      className="testimonial-preview-card"
      onClick={onOpen}
      type="button"
    >
      <span className="testimonial-preview-card__frame">
        <img
          alt={testimonial.alt}
          className="testimonial-preview-card__image"
          loading="lazy"
          src={testimonial.image}
          style={imageStyle}
        />
      </span>

      <span className="testimonial-preview-card__meta">
        <span className="testimonial-preview-card__badge">WhatsApp real</span>
        <span className="testimonial-preview-card__title">
          {testimonial.title ?? `Depoimento ${String(index + 1).padStart(2, '0')}`}
        </span>
        <span className="testimonial-preview-card__hint">Toque para ampliar</span>
      </span>
    </button>
  )
}
