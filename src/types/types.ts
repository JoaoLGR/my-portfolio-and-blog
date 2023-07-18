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

export type Icons = {
  size: number
  viewBox: string
  fill: string
  d: string
  id: string
}

export type SkillsIcons = Icons[]

export type ProfileType = {
  title: string
  about: string
}
