import { useState } from 'react'

import { ActionLink } from '../components/ActionLink'
import { SectionHeading } from '../components/SectionHeading'
import { TestimonialGalleryModal } from './TestimonialGalleryModal'
import { TestimonialPreviewCard, type Testimonial } from './TestimonialPreviewCard'

type SocialProofSectionProps = {
  instagramLink: string
  testimonials: Testimonial[]
  whatsappLink: string
}

export const SocialProofSection = ({
  instagramLink,
  testimonials,
  whatsappLink: _whatsappLink,
}: SocialProofSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)

  const openGallery = (index: number) => {
    setActiveIndex(index)
    setIsGalleryOpen(true)
  }

  const closeGallery = () => {
    setIsGalleryOpen(false)
  }

  const showPrevious = () => {
    if (testimonials.length === 0) {
      return
    }

    setActiveIndex((currentIndex) => (currentIndex - 1 + testimonials.length) % testimonials.length)
  }

  const showNext = () => {
    if (testimonials.length === 0) {
      return
    }

    setActiveIndex((currentIndex) => (currentIndex + 1) % testimonials.length)
  }

  return (
    <section className="section" id="depoimentos">
      <div className="container testimonials-section">
        <SectionHeading
          description="Sem promessas , apenas um método estruturado que funciona na prática."
          eyebrow="Prova social"
          title="Quem aplica, evolui. Veja quem já mudou de vida."
        />

        <div className="testimonials-layout">
          <div className="testimonials-preview-grid" role="list" aria-label="Depoimentos em destaque">
            {testimonials.map((testimonial, index) => (
              <TestimonialPreviewCard
                index={index}
                key={testimonial.image}
                onOpen={() => openGallery(index)}
                testimonial={testimonial}
              />
            ))}
          </div>

          <aside className="instagram-support-card">
            <div className="instagram-support-card__top">
              <span aria-label="Instagram" className="instagram-support-card__eyebrow" role="img">
                <svg
                  aria-hidden="true"
                  className="instagram-support-card__logo"
                  viewBox="0 0 24 24"
                >
                  <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5.25" />
                  <circle cx="12" cy="12" r="4.2" />
                  <circle cx="17.35" cy="6.65" r="1.15" fill="currentColor" stroke="none" />
                </svg>
              </span>

              <ActionLink className="instagram-support-card__top-link" href={instagramLink} variant="secondary">
                Ver Instagram
              </ActionLink>
            </div>

            <div className="instagram-support-card__copy">
              <div className="instagram-support-card__profile">
                <img
                  alt="Foto de perfil de Antonio Junior"
                  className="instagram-support-card__avatar"
                  loading="lazy"
                  src="/Antonio.png"
                />

                <div className="instagram-support-card__identity">
                  <h3>@personalantoniojr</h3>
                  <p className="instagram-support-card__name">Antonio Junior</p>
                  <p className="instagram-support-card__bio">
                    Conteúdo diário, treinos e resultados na prática.
                  </p>
                </div>
              </div>
            </div>

            <div className="instagram-support-card__metrics" aria-label="Destaques do perfil">
              <div className="instagram-support-card__metric">
                <strong>1:1</strong>
                <span>Acompanhamento</span>
              </div>
              <div className="instagram-support-card__metric">
                <strong>Diário</strong>
                <span>Bastidores</span>
              </div>
              <div className="instagram-support-card__metric">
                <strong>Real</strong>
                <span>Provas sociais</span>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <TestimonialGalleryModal
        activeIndex={activeIndex}
        isOpen={isGalleryOpen}
        onClose={closeGallery}
        onNext={showNext}
        onPrevious={showPrevious}
        onSelect={setActiveIndex}
        testimonials={testimonials}
      />
    </section>
  )
}
