import tw from "tailwind-styled-components"

export const Container = tw.div``

export const Title = tw.h2`
  mb-6
  text-center
  font-bold
  text-3xl
`

export const Card = tw.div`
  flex
  h-16
  w-60
  items-center
  gap-6
  rounded-md
  border
  border-link
  p-4
  shadow-md
  shadow-link
  duration-700

  hover:bg-secondary
`
