import { ActionLink } from '../components/ActionLink'

type HeroSectionProps = {
  instagramLink: string
  whatsappLink: string
}

const proofCards = [
  {
    eyebrow: 'Consultoria Online',
    text: 'Treinos personalizados de acordo com o seu objetivo',
  },
  {
    eyebrow: 'Alunos Atendidos',
    text: '+400 alunos que saíram do zero e construíram resultado de verdade.',
  },
  {
    eyebrow: 'App de Treino',
    text: 'Seu treino organizado em app, com execução guiada e ajustes personalizados para garantir evolução.',
  },
]

export const HeroSection = ({ instagramLink, whatsappLink }: HeroSectionProps) => {
  return (
    <section className="hero" id="inicio">
      <div className="hero__split">
        <div className="hero__content-wrap">
          <div className="hero__content">
            <div className="hero__intro">
              <img alt="Logo Antônio Júnior" className="hero__mobile-logo" src="/logo.png" />
              <p className="section-tag">Consultoria personalizada para resultados reais</p>
              <h1>Antônio Júnior | Consultoria Online Personalizada</h1>
              <p className="hero__lead">
                Consultoria individual com estratégia, ajustes e acompanhamento contínuo para
                extrair o máximo do seu potencial físico.
              </p>

              <div className="hero__actions">
                <ActionLink href={whatsappLink} variant="primary">
                  Quero falar no WhatsApp
                </ActionLink>
                <ActionLink href={instagramLink} variant="secondary">
                  Ver Instagram
                </ActionLink>
              </div>
            </div>

            <div className="hero__proof-row">
              {proofCards.map((card) => (
                <article className="hero__proof-card" key={card.eyebrow}>
                  <span>{card.eyebrow}</span>
                  <strong>{card.text}</strong>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__glow hero__glow--primary" />
          <div className="hero__glow hero__glow--secondary" />
          <div className="hero__reach-card">
            <span>Atendimento Online</span>
            <strong>Brasil e exterior</strong>
            <p>Treine de forma eficaz e segura de qualquer lugar do mundo.</p>
          </div>
          <img alt="" className="hero__portrait" src="/BannerSemFundo.png" />
        </div>
      </div>
    </section>
  )
}
