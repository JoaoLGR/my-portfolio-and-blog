import tw from "tailwind-styled-components"

export const Container = tw.div``

export const Title = tw.h2`
  mb-6
  text-start
  font-bold
  text-md

  lg:text-2xl
`

export const Card = tw.div`
  flex
  h-16
  w-24
  items-center
  justify-center
  gap-6
  rounded-md
  border
  border-link
  p-4
  shadow-md
  shadow-link
  transition-colors
  duration-300
  ease-in-out
  
  md:w-52
  lg:w-72
  md:justify-around

  hover:bg-secondary
`

export const Description = tw.p`
  hidden
  
  md:w-3/4
  md:block
`
