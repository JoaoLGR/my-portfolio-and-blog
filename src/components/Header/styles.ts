import tw from "tailwind-styled-components"

export const Container = tw.header`
  fixed
  z-40
  flex
  h-16
  w-full
  items-center
  bg-secondary
  shadow-lg

  backdrop:blur-lg
`

export const Content = tw.div`
  flex
  h-full
  w-full
  items-center
  justify-between
  px-4
`

export const Nav = tw.nav`
  flex
  items-center
  justify-between
`

export const List = tw.ul`
  flex 
  gap-6
`

export const ListItem = tw.li`
  transition-colors
  duration-300
  ease-in-out

  hover:text-link
`
