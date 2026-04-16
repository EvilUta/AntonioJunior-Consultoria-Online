import type { CSSProperties } from 'react'
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

import type { Testimonial } from './TestimonialPreviewCard'

type TestimonialGalleryModalProps = {
  activeIndex: number
  isOpen: boolean
  onClose: () => void
  onNext: () => void
  onPrevious: () => void
  onSelect: (index: number) => void
  testimonials: Testimonial[]
}

const EXIT_ANIMATION_MS = 180

export const TestimonialGalleryModal = ({
  activeIndex,
  isOpen,
  onClose,
  onNext,
  onPrevious,
  onSelect,
  testimonials,
}: TestimonialGalleryModalProps) => {
  const [shouldRender, setShouldRender] = useState(isOpen)
  const [isVisible, setIsVisible] = useState(isOpen)
  const [isMobileViewport, setIsMobileViewport] = useState(false)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 720px)')
    const syncViewport = () => setIsMobileViewport(mediaQuery.matches)

    syncViewport()
    mediaQuery.addEventListener('change', syncViewport)

    return () => mediaQuery.removeEventListener('change', syncViewport)
  }, [])

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true)

      const animationFrame = window.requestAnimationFrame(() => {
        setIsVisible(true)
      })

      return () => window.cancelAnimationFrame(animationFrame)
    }

    setIsVisible(false)

    const timeout = window.setTimeout(() => {
      setShouldRender(false)
    }, EXIT_ANIMATION_MS)

    return () => window.clearTimeout(timeout)
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const previousBodyOverflow = document.body.style.overflow
    const previousHtmlOverflow = document.documentElement.style.overflow
    const previousBodyPaddingRight = document.body.style.paddingRight
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth

    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`
    }

    return () => {
      document.body.style.overflow = previousBodyOverflow
      document.documentElement.style.overflow = previousHtmlOverflow
      document.body.style.paddingRight = previousBodyPaddingRight
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }

      if (event.key === 'ArrowRight') {
        onNext()
      }

      if (event.key === 'ArrowLeft') {
        onPrevious()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose, onNext, onPrevious])

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const animationFrame = window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus()
    })

    return () => window.cancelAnimationFrame(animationFrame)
  }, [activeIndex, isOpen])

  if (!shouldRender || testimonials.length === 0) {
    return null
  }

  const currentTestimonial = testimonials[activeIndex]
  const resolvedFit = isMobileViewport
    ? currentTestimonial.mobileGalleryFit ?? 'cover'
    : 'contain'
  const resolvedPosition = isMobileViewport
    ? currentTestimonial.mobileGalleryPosition ?? 'center top'
    : 'center'
  const resolvedScale = isMobileViewport
    ? currentTestimonial.mobileGalleryScale
    : undefined
  const imageStyle: CSSProperties | undefined =
    resolvedFit || resolvedPosition || resolvedScale
      ? {
          objectFit: resolvedFit,
          objectPosition: resolvedPosition,
          transform: resolvedScale
            ? `scale(${resolvedScale})`
            : undefined,
          transformOrigin: resolvedPosition,
        }
      : undefined
  return createPortal(
    <div
      aria-hidden={!isOpen}
      className={`testimonial-gallery ${isVisible ? 'is-visible' : ''}`}
      onClick={onClose}
    >
      <div
        aria-label="Galeria de depoimentos"
        aria-modal="true"
        className="testimonial-gallery__dialog"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
      >
        <div className="testimonial-gallery__topbar">
          <div className="testimonial-gallery__status">
            <span className="testimonial-gallery__eyebrow">Prova social</span>
            <strong>{`${String(activeIndex + 1).padStart(2, '0')} / ${String(
              testimonials.length,
            ).padStart(2, '0')}`}</strong>
          </div>

          <button
            aria-label="Fechar galeria de depoimentos"
            className="testimonial-gallery__close"
            onClick={onClose}
            ref={closeButtonRef}
            type="button"
          >
            X
          </button>
        </div>

        <div className="testimonial-gallery__viewport">
          <button
            aria-label="Depoimento anterior"
            className="testimonial-gallery__nav testimonial-gallery__nav--prev"
            onClick={onPrevious}
            type="button"
          >
            {'<'}
          </button>

          <figure className="testimonial-gallery__figure">
            <img
              alt={currentTestimonial.alt}
              className="testimonial-gallery__image"
              src={currentTestimonial.image}
              style={imageStyle}
            />
          </figure>

          <button
            aria-label="Próximo depoimento"
            className="testimonial-gallery__nav testimonial-gallery__nav--next"
            onClick={onNext}
            type="button"
          >
            {'>'}
          </button>
        </div>

        <div className="testimonial-gallery__footer">
          <p className="testimonial-gallery__caption">
            {currentTestimonial.title ?? `Depoimento ${String(activeIndex + 1).padStart(2, '0')}`}
          </p>

          <div className="testimonial-gallery__dots" role="tablist" aria-label="Selecionar depoimento">
            {testimonials.map((testimonial, index) => (
              <button
                aria-label={`Abrir ${testimonial.title ?? `depoimento ${index + 1}`}`}
                aria-selected={index === activeIndex}
                className={`testimonial-gallery__dot ${
                  index === activeIndex ? 'is-active' : ''
                }`}
                key={testimonial.image}
                onClick={() => onSelect(index)}
                role="tab"
                type="button"
              />
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}
