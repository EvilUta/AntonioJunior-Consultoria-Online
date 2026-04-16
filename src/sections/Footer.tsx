type FooterProps = {
  instagramLink: string
  whatsappLink: string
}

export const Footer = ({ instagramLink, whatsappLink }: FooterProps) => {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__brand">Antônio Júnior</p>
          <span>Consultoria Personalizada Online</span>
        </div>

        <div className="footer__links">
          <a href={whatsappLink} rel="noreferrer" target="_blank">
            WhatsApp
          </a>
          <a href={instagramLink} rel="noreferrer" target="_blank">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  )
}
