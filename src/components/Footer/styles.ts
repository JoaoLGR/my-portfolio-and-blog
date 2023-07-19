import tw from "tailwind-styled-components"

export const Container = tw.footer`
  w-full
  border-t
  border-slate-700
`

export const Content = tw.div`
  flex
  justify-center
  gap-6
  py-4
`

export const Icon = tw.svg`
  w-6
  fill-white
  transition-colors
  duration-300
  ease-in-out
  hover:fill-link
  md:w-8
`
