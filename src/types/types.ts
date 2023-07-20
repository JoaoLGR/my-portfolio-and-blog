export type NavItem = {
  title: string
  href: string
}

export type Nav = NavItem[]

export type SocialMedia = {
  viewBox: string
  d: string
  id: string
  href: string
}[]

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

export type ExperienciesType = {
  company: string
  href: string
  logoCompany: string
  positionCompany: string
  timeInCompany: string
}[]
