import tw from "tailwind-styled-components"

export const Container = tw.footer`
  h-64
  w-full
  border-t
  border-slate-700
  bg-primary
`

export const Content = tw.div`
  flex
  justify-around
  pt-10
`

export const Section = tw.section`
`

export const TitleOfSection = tw.h2`
  mb-4
  text-lg
  font-bold
`

export const List = tw.ul`

`

export const ListItem = tw.li`
  transition-colors
  duration-300
  ease-in-out
  hover:text-link
`
