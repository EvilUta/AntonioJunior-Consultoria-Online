import { useState } from 'react'

type HeaderProps = {
  whatsappLink: string
}

const navigationItems = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#resultados', label: 'Resultados' },
  { href: '#depoimentos', label: 'Depoimentos' },
]

const WhatsAppIcon = () => {
  return (
    <svg aria-hidden="true" className="icon icon--whatsapp" viewBox="0 0 24 24">
      <path
        d="M20.52 3.48A11.88 11.88 0 0 0 12.06 0C5.49 0 .15 5.34.15 11.91c0 2.1.55 4.16 1.59 5.98L0 24l6.3-1.65a11.9 11.9 0 0 0 5.71 1.45h.01c6.57 0 11.91-5.34 11.91-11.91 0-3.18-1.24-6.17-3.41-8.41Zm-8.5 18.3h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.65-.23-.38a9.87 9.87 0 0 1-1.51-5.23c0-5.45 4.43-9.88 9.89-9.88 2.64 0 5.11 1.03 6.98 2.9a9.8 9.8 0 0 1 2.89 6.98c0 5.45-4.43 9.88-9.87 9.88Zm5.42-7.4c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.47-.88-.78-1.48-1.74-1.65-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.64-.93-2.24-.24-.58-.49-.5-.68-.5h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.11 3.23 5.11 4.53.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.08 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35Z"
        fill="currentColor"
      />
    </svg>
  )
}

const MenuIcon = () => {
  return (
    <svg aria-hidden="true" className="icon icon--menu" viewBox="0 0 24 24">
      <path
        d="M4 6.75A.75.75 0 0 1 4.75 6h14.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 6.75Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 12Zm.75 4.5a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H4.75Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const Header = ({ whatsappLink }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="topbar">
      <div className="container topbar__inner">
        <a className="brand" href="#inicio" onClick={closeMenu}>
          <img alt="Logo Antônio Júnior" className="brand__logo" src="/logo.png" />
          <span>
            Antônio Júnior
            <strong>Consultoria Online</strong>
          </span>
        </a>

        <nav
          aria-label="Navegação principal"
          className={`topbar__nav ${isMenuOpen ? 'topbar__nav--open' : ''}`}
        >
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>

        <a
          aria-label="Abrir conversa no WhatsApp"
          className="topbar__cta"
          href={whatsappLink}
          rel="noreferrer"
          target="_blank"
        >
          <span className="topbar__cta-label">WhatsApp</span>
          <WhatsAppIcon />
        </a>

        <button
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          className="topbar__menu-button"
          onClick={() => setIsMenuOpen((value) => !value)}
          type="button"
        >
          <MenuIcon />
        </button>
      </div>
    </header>
  )
}
