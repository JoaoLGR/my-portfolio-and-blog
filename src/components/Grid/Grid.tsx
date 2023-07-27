type GridProps = {
  children: React.ReactNode
  cols?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
  xxl?: number
  gap?: number
}

export function Grid({
  children,
  cols = 3,
  sm,
  md,
  lg,
  xl,
  xxl,
  gap
}: GridProps) {
  const small = sm ? `sm:grid-cols-${sm}` : ""
  const medium = md ? `md:grid-cols-${md}` : ""
  const large = lg ? `lg:grid-cols-${lg}` : ""
  const extraLarge = xl ? `xl:grid-cols-${xl}` : ""
  const extraExtraLarge = xxl ? `xxl:grid-cols-${xxl}` : ""
  const gapSize = gap ? `gap-${gap}` : ""

  const responsive = `${small} ${medium} ${large} ${extraLarge} ${extraExtraLarge} ${gapSize}`

  return (
    <div
      className={`grid grid-cols-${cols} ${responsive} w-full justify-between`}
    >
      {children}
    </div>
  )
}
