import type { AnchorHTMLAttributes, ReactNode } from 'react'

type ActionLinkProps = {
  children: ReactNode
  className?: string
  href: string
  variant?: 'primary' | 'secondary' | 'ghost'
} & AnchorHTMLAttributes<HTMLAnchorElement>

export const ActionLink = ({
  children,
  className = '',
  href,
  variant = 'primary',
  ...props
}: ActionLinkProps) => {
  const classes = ['action-link', `action-link--${variant}`, className].filter(Boolean).join(' ')

  return (
    <a className={classes} href={href} rel="noreferrer" target="_blank" {...props}>
      {children}
    </a>
  )
}
