import { Icons } from "@/types"

import { Grid } from "@/components/Grid"

import * as S from "./styles"

type SkillsProps = Icons[]

export function Skills({ items }: { items: SkillsProps }) {
  return (
    <S.Container>
      <S.Title>Tecnologias que possuo conhecimento</S.Title>

      <Grid sm={3} md={3} lg={3} gap={8}>
        {items.map((item) => (
          <S.Card key={item.id}>
            <svg
              width={item.size}
              height={item.size}
              viewBox={item.viewBox}
              className="md:w-1/4"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d={item.d} fill={item.fill} />
            </svg>
            <S.Description>{item.id}</S.Description>
          </S.Card>
        ))}
      </Grid>
    </S.Container>
  )
}
