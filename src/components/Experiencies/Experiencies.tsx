import Image from "next/image"
import Link from "next/link"

import { experiencies } from "@/configs/experiencies"

import { Grid } from "@/components/Grid"

import * as S from "./styles"

export function Experiencies() {
  return (
    <S.Container>
      <S.Title>Experiências</S.Title>

      <Grid cols={1} gap={4} md={2} lg={3}>
        {experiencies.map((item) => (
          <S.Card key={item.company}>
            <Link href={item.href} target="_blank">
              <Image
                width={60}
                height={60}
                src={item.logoCompany}
                alt={`logo da empresa ${item.company}`}
              />
            </Link>

            <S.CardContent>
              <S.CompanyName>{item.company}</S.CompanyName>
              <S.TimeDescription>{item.timeInCompany}</S.TimeDescription>
              <S.PositionCompany>{item.positionCompany}</S.PositionCompany>
            </S.CardContent>
          </S.Card>
        ))}
      </Grid>
    </S.Container>
  )
}
