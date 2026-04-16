import { ActionLink } from './components/ActionLink'
import { instagramLink, whatsappLink } from './constants'
import { AboutSection } from './sections/AboutSection'
import { BenefitsSection } from './sections/BenefitsSection'
import { FloatingWhatsApp } from './sections/FloatingWhatsApp'
import { Footer } from './sections/Footer'
import { GallerySection } from './sections/GallerySection'
import { Header } from './sections/Header'
import { HeroSection } from './sections/HeroSection'
import { HowItWorksSection } from './sections/HowItWorksSection'
import { SocialProofSection } from './sections/SocialProofSection'
import type { Testimonial } from './sections/TestimonialPreviewCard'

const benefits = [
  {
    title: 'Treino personalizado',
    description:
      'Planejamento individual construído de acordo com seu objetivo, nível atual e rotina.',
  },
  {
    title: 'Acompanhamento individual',
    description: 'Evolução monitorada de perto para corrigir rotas e manter consistência.',
  },
  {
    title: 'Suporte no WhatsApp',
    description:
      'Canal direto com personal para tirar dúvidas, ajustar execuções e manter a disciplina durante os treinos.',
  },
  {
    title: 'Acesso ao app de treino',
    description:
      'Treinos completos no app com vídeos dos exercícios, séries, repetições e tudo que você precisa para executar na academia.',
  },
  {
    title: 'Ajustes nos treinos',
    description:
      'Treinos ajustados conforme seu progresso e feedbacks, para garantir sua evolução constante.',
  },
  {
    title: 'Método adaptado à rotina',
    description:
      'Método adaptado à sua rotina, com treinos pensados para encaixar no seu dia a dia e na sua realidade.',
  },
]

const steps = [
  {
    title: 'Contato inicial',
    description:
      'Você entra em contato pelo WhatsApp e, a partir disso, eu entendo sua rotina, seus objetivos e o seu momento, para direcionar da melhor forma possível.',
  },
  {
    title: 'Avaliação do objetivo',
    description:
      'Seu treino é estruturado de forma estratégica, respeitando sua rotina, limitações e metas.',
  },
  // {
  //   title: 'Montagem do treino',
  //   description:
  //     'Cada treino é estruturado de forma estratégica, considerando sua rotina, necessidades e nível, para potencializar seus resultados',
  // },
  {
    title: 'Acompanhamento contínuo',
    description:
      'Contato direto com o personal para ajustes no treino, correções de execução e suporte ao longo da sua jornada.',
  },
]

const galleryItems = [
  {
    alt: 'Antes e depois com resultado real de acompanhamento',
    description: 'Ganho de massa muscular com estratégia.',
    image: '/AntesDepois3.png',
    title: 'Definição muscular',
  },
  {
    alt: 'Antes e depois de aluna com evolução física acompanhada',
    description: 'Redução de gordura corporal com ajuste de treino e rotina.',
    image: '/AntesDepois1.png',
    title: 'Perda de godura + ganho de massa muscular',
  },
  {
    alt: 'Antes e depois mostrando progresso físico consistente',
    description:
      'Melhora da composição corporal com equilíbrio entre massa muscular e gordura.',
    image: '/AntesDepois4.png',
    title: 'Recomposição corporal',
  },
  {
    alt: 'Antes e depois de aluno com transformação corporal',
    description: 'Desenvolvimento de membros inferiores com foco em técnica e progressão.',
    image: '/AntesDepois2.png',
    title: 'Ganho de massa muscular',
  },
  {
    alt: 'Antes e depois com mudança visível de composição corporal',
    description:
      'Emagrecimento e recomposição corporal através de controle de treino e consistência.',
    image: '/AntesDepois5.png',
    title: 'Emagrecimento + recomposição',
  },
  {
    alt: 'Antes e depois com resultado de consultoria personalizada',
    description: 'Mudança corporal com base em método estruturado e acompanhamento.',
    image: '/AntesDepois6.png',
    title: 'Ganho de massa muscular + perda de gordura',
  },
]

const testimonials: Testimonial[] = [
  {
    alt: 'Depoimento de aluno sobre atendimento e resultado',
    image: '/depoimento1.png',
    previewPosition: 'center 12%',
    title: 'Atendimento e suporte',
  },
  {
    alt: 'Depoimento de aluno sobre treino adaptado à rotina',
    image: '/depoimento4.png',
    mobileGalleryFit: 'fill',
    mobileGalleryPosition: 'center top',
    previewPosition: 'center 16%',
    title: 'Treino adaptado à rotina',
  },
  {
    alt: 'Depoimento de aluno sobre acompanhamento e evolução',
    image: '/depoimento3.png',
    mobileGalleryFit: 'fill',
    mobileGalleryPosition: 'center top',
    previewPosition: 'center 8%',
    title: 'Acompanhamento e evolução',
  },
]

const App = () => {
  return (
    <div className="page-shell">
      <Header whatsappLink={whatsappLink} />
      <main>
        <HeroSection instagramLink={instagramLink} whatsappLink={whatsappLink} />
        <AboutSection />
        <BenefitsSection benefits={benefits} />
        <HowItWorksSection steps={steps} />
        <GallerySection items={galleryItems} />
        <SocialProofSection
          instagramLink={instagramLink}
          testimonials={testimonials}
          whatsappLink={whatsappLink}
        />
        <section className="cta-band">
          <div className="container cta-band__content">
            <div>
              <p className="section-tag">Pronto para começar</p>
              <h2>Fale agora no WhatsApp e receba um direcionamento personalizado.</h2>
            </div>
            <ActionLink href={whatsappLink} variant="primary">
              Chamar no WhatsApp
            </ActionLink>
          </div>
        </section>
      </main>
      <Footer instagramLink={instagramLink} whatsappLink={whatsappLink} />
      <FloatingWhatsApp whatsappLink={whatsappLink} />
    </div>
  )
}

export default App
