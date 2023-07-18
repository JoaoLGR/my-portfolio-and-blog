import { Icons } from "@/types"

import { Grid } from "@/components/Grid"

import * as S from "./styles"

type SkillsProps = Icons[]

export function Skills({ items }: { items: SkillsProps }) {
  return (
    <S.Container>
      <S.Title>Tecnologias que possuo conhecimento</S.Title>

      <Grid sm={1} md={2} lg={3} gap={8}>
        {items.map((item) => (
          <S.Card key={item.id}>
            <svg
              width={item.size}
              height={item.size}
              viewBox={item.viewBox}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d={item.d} fill={item.fill} />
            </svg>
            <p>{item.id}</p>
          </S.Card>
        ))}
      </Grid>
    </S.Container>
  )
}
