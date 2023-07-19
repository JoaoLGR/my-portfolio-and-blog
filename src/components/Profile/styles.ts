import tw from "tailwind-styled-components"

export const Container = tw.div``

export const ImageContent = tw.div`
  flex
  flex-col
  mb-6
  gap-4

`

export const Title = tw.h2`
  text-xl
  text-start
  font-bold
  
  md:text-2xl
  lg:text-3xl
`

export const AboutMe = tw.p`
  text-sm
  font-bold
  text-start

  md:text-base
  lg:text-lg 
`
