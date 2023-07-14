import Link from "next/link"

import { socialMedia } from "@/configs"
import { Nav } from "@/types"

import { Layout } from "@/components/Layout"

import * as S from "./styles"

export function Footer({ items }: { items: Nav }) {
  const fullYear = new Date().getFullYear()

  return (
    <S.Container>
      <Layout>
        <S.Content>
          <S.Section>
            <S.TitleOfSection>João Lucas</S.TitleOfSection>
          </S.Section>

          <S.Section>
            <S.TitleOfSection>Minhas redes</S.TitleOfSection>
            {socialMedia.map(({ href, network }) => (
              <S.List key={network}>
                <Link href={href} target="_blank" className="hover:text-link">
                  {network}
                </Link>
              </S.List>
            ))}
          </S.Section>

          <S.Section>
            <S.TitleOfSection>Blogmap</S.TitleOfSection>
            <S.List>
              {items.map(({ title, href }) => (
                <S.ListItem key={title}>
                  <Link href={href}>{title}</Link>
                </S.ListItem>
              ))}
            </S.List>
          </S.Section>
        </S.Content>
        <p className="translate-y-10 text-center">
          Todos os direitos reservados © João Lucas {fullYear}
        </p>
      </Layout>
    </S.Container>
  )
}
