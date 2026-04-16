import { SectionHeading } from '../components/SectionHeading'

const credentials = [
  '30 anos e atuação como personal trainer há mais de 5 anos',
  'Bacharel em Educação Física pela FEPI',
  'Pós-graduações em Biomecânica, Treinamento Esportivo e Biomecânica Aplicada ao Movimento',
  'Mais de 400 alunos atendidos em objetivos como emagrecimento, hipertrofia, condicionamento e reabilitação',
]

export const AboutSection = () => {
  return (
    <section className="section" id="sobre">
      <div className="container about">
        <SectionHeading
          description="Uma consultoria pensada para quem quer resultado com técnica, personalização e uma rotina viável de manter no longo prazo."
          eyebrow="Sobre Antônio Júnior"
          title="Autoridade construída com formação sólida, experiência prática e atendimento individual."
        />

        <div className="about__grid">
          <div className="about__copy">
            <p className="about__panel-title">Meu objetivo</p>
            <p>
              O objetivo da consultoria é transformar metas soltas em um plano claro, seguro e
              personalizado, respeitando o momento atual, a rotina e a individualidade de cada
              aluno.
            </p>
            <p>
              A proposta é tornar a jornada fitness mais simples de sustentar no longo prazo, com
              treinos ajustados ao contexto real, evolução acompanhada de perto e decisões guiadas
              por estratégia, técnica e constância.
            </p>
          </div>

          <div className="about__panel">
            <p className="about__panel-title">Base profissional</p>
            <ul>
              {credentials.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
