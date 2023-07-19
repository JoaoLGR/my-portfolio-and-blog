import Link from "next/link"

import { Nav } from "@/types"

import { Layout } from "@/components/Layout"
import { Logo } from "@/components/Logo"

import * as S from "./styles"

export function Header({ items }: { items: Nav }) {
  return (
    <S.Container>
      <Layout>
        <S.Content>
          <Logo />

          <S.Nav>
            <S.List>
              {items.map(({ title, href }) => (
                <S.ListItem key={title}>
                  <Link href={href}>{title}</Link>
                </S.ListItem>
              ))}
            </S.List>
          </S.Nav>
        </S.Content>
      </Layout>
    </S.Container>
  )
}
