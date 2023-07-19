import Link from "next/link"

import { socialMedia } from "@/configs"

import { Layout } from "@/components/Layout"

import * as S from "./styles"

export function Footer() {
  const fullYear = new Date().getFullYear()

  return (
    <Layout>
      <S.Container>
        <S.Content>
          {socialMedia.map((item) => (
            <Link key={item.id} target="_blank" href={item.href}>
              <S.Icon viewBox={item.viewBox} xmlns="http://www.w3.org/2000/svg">
                <path d={item.d} />
              </S.Icon>
            </Link>
          ))}
        </S.Content>
        <p className="text-center text-slate-500">
          Todos os direitos reservados © João Lucas {fullYear}
        </p>
      </S.Container>
    </Layout>
  )
}
