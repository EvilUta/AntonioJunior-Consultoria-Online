import { SectionHeading } from '../components/SectionHeading'

type GalleryItem = {
  alt: string
  image: string
  title: string
}

type GallerySectionProps = {
  items: GalleryItem[]
}

export const GallerySection = ({ items }: GallerySectionProps) => {
  return (
    <section className="section section--dark" id="resultados">
      <div className="container">
        <SectionHeading
          description="Antes e depois de alunos que seguiram o processo e tiveram resultado de verdade."
          eyebrow="Antes e depois"
          title="Antes e depois de quem fez acontecer."
        />

        <div className="gallery-grid">
          {items.map((item) => (
            <article className="gallery-card" key={item.image}>
              <div className="gallery-card__content">
                <strong>{item.title}</strong>
              </div>
              <div className="gallery-card__media">
                <img
                  alt={item.alt}
                  className="gallery-card__image"
                  loading="lazy"
                  src={item.image}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
