import { SectionHeading } from '../components/SectionHeading'

const credentials = [
  'Mais de 5 anos trabalhando com consultoria online',
  'Personal trainer graduado pela FEPI (fundação de ensino e pesquisa Itajubá)',
  'Especializações em Biomecânica e Treinamento Desportivo',
  'Mais de 400 alunos atendidos com diferentes objetivos',
  'Experiência com emagrecimento, hipertrofia e reabilitação',
]

export const AboutSection = () => {
  return (
    <section className="section" id="sobre">
      <div className="container about">
        <SectionHeading
          description="Treinos pensados pra você, com base técnica, experiência real e acompanhamento próximo tudo no online."
          eyebrow="Sobre Antônio Júnior"
          title="Autoridade construída com base sólida, experiência prática e acompanhamento individual."
        />

        <div className="about__grid">
          <div className="about__copy">
            <p className="about__panel-title">Meu objetivo</p>
            <p>
              Meu objetivo é fazer com que você alcance o resultado que busca através de um plano de treino pensado para a sua realidade, seu nível e sua rotina. A ideia não é complicar, mas sim criar algo simples, prático e eficiente, que você realmente consiga seguir no dia a dia.
              Com consistência, ajustes estratégicos e um método bem estruturado, você evolui de forma contínua, melhora seu estilo de vida e constrói resultados que se mantêm ao longo do tempo.
            </p>
            <p>
             Mais do que resultados rápidos, o foco é construir um caminho sustentável, com treinos que fazem sentido no seu dia a dia e geram evolução real no longo prazo.
            </p>
          </div>

          <div className="about__panel">
            <p className="about__panel-title">Experiência e formação</p>
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
