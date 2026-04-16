import { SectionHeading } from '../components/SectionHeading'

type Step = {
  description: string
  title: string
}

type HowItWorksSectionProps = {
  steps: Step[]
}

export const HowItWorksSection = ({ steps }: HowItWorksSectionProps) => {
  return (
    <section className="section" id="como-funciona">
      <div className="container">
        <SectionHeading
          align="center"
          description="Processo simples, direto e construído para você começar com clareza desde o primeiro contato."
          eyebrow="Como funciona"
          title="Sem confusão ou achismo: você não precisa de mais motivação, precisa de direção e é isso que você recebe desde o início."
        />

        <div className="steps-grid">
          {steps.map((step, index) => (
            <article className="step-card" key={step.title}>
              <span className="step-card__number">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
