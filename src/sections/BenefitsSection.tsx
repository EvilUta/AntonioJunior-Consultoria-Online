import type { ReactNode } from 'react'
import { SectionHeading } from '../components/SectionHeading'

type Benefit = {
  description: string
  title: string
}

type BenefitsSectionProps = {
  benefits: Benefit[]
}

const benefitIcons: Record<string, ReactNode> = {
  'Treino personalizado': (
    <span aria-hidden="true" className="info-card__icon info-card__icon--weight" />
  ),
  'Acompanhamento individual': (
    <svg aria-hidden="true" className="info-card__icon" viewBox="0 0 24 24">
      <path
        d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        fill="currentColor"
      />
      <path
        d="M4.5 19.5a7.5 7.5 0 0 1 15 0"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </svg>
  ),
  'Suporte no WhatsApp': (
    <svg aria-hidden="true" className="info-card__icon" viewBox="0 0 24 24">
      <path
        d="M20.52 3.48A11.88 11.88 0 0 0 12.06 0C5.49 0 .15 5.34.15 11.91c0 2.1.55 4.16 1.59 5.98L0 24l6.3-1.65a11.9 11.9 0 0 0 5.71 1.45h.01c6.57 0 11.91-5.34 11.91-11.91 0-3.18-1.24-6.17-3.41-8.41Zm-8.5 18.3h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.65-.23-.38a9.87 9.87 0 0 1-1.51-5.23c0-5.45 4.43-9.88 9.89-9.88 2.64 0 5.11 1.03 6.98 2.9a9.8 9.8 0 0 1 2.89 6.98c0 5.45-4.43 9.88-9.87 9.88Zm5.42-7.4c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.47-.88-.78-1.48-1.74-1.65-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.64-.93-2.24-.24-.58-.49-.5-.68-.5h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.11 3.23 5.11 4.53.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.08 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35Z"
        fill="currentColor"
      />
    </svg>
  ),
  'Acesso ao app de treino': (
    <svg aria-hidden="true" className="info-card__icon" viewBox="0 0 24 24">
      <path
        d="M8 3h8a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Zm0 2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H8Zm2.5 3a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2a1 1 0 1 1 0-2h2V9a1 1 0 0 1 1-1Z"
        fill="currentColor"
      />
    </svg>
  ),
  'Ajustes nos treinos': (
    <svg aria-hidden="true" className="info-card__icon" viewBox="0 0 24 24">
      <path
        d="m14.69 3.86 5.45 5.45-9.73 9.73-5.8.35.35-5.8 9.73-9.73Zm1.41-1.41a2 2 0 0 0-2.82 0L3.2 12.53a2 2 0 0 0-.57 1.22l-.49 8.04 8.04-.49a2 2 0 0 0 1.22-.57l10.08-10.08a2 2 0 0 0 0-2.82L16.1 2.45Z"
        fill="currentColor"
      />
    </svg>
  ),
  'Método adaptado à rotina': (
    <svg aria-hidden="true" className="info-card__icon" viewBox="0 0 24 24">
      <path
        d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2.59l-3.7 3.7A1 1 0 0 1 11 23v-3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h1V3a1 1 0 0 1 1-1Zm12 8H5v7a1 1 0 0 0 1 1h7v1.59L15.59 18H18a1 1 0 0 0 1-1v-7ZM5 8h14V7a1 1 0 0 0-1-1h-1v1a1 1 0 1 1-2 0V6H8v1a1 1 0 1 1-2 0V6H5a1 1 0 0 0-1 1v1Z"
        fill="currentColor"
      />
    </svg>
  ),
}

export const BenefitsSection = ({ benefits }: BenefitsSectionProps) => {
  return (
    <section className="section section--dark" id="diferenciais">
      <div className="container">
        <SectionHeading
          description="Cada detalhe foi pensado para tornar sua evolução mais prática, mais segura e mais consistente."
          eyebrow="Benefícios e diferenciais"
          title="Uma consultoria online desenhada para encaixar na sua vida e acelerar seus resultados."
        />

        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <article className="info-card" key={benefit.title}>
              <span className="info-card__index">
                {benefitIcons[benefit.title] ?? benefit.title.slice(0, 2).toUpperCase()}
              </span>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
