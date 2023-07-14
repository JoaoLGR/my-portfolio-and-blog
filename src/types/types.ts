export type NavItem = {
  title: string
  href: string
}

export type Nav = NavItem[]

export type Social = {
  network: string
  href: string
  icon?: React.ReactNode
}

export type SocialMedia = Social[]
