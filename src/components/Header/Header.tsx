import Link from "next/link"

import { Logo } from "@/components/Logo"

import * as S from "./styles"

export function Header() {
  return (
    <S.Container>
      <S.Content>
        <Logo />

        <S.Nav>
          <S.List>
            <S.ListItem>
              <Link href="/home">Home</Link>
            </S.ListItem>
            <S.ListItem>
              <Link href="/about">Artigos</Link>
            </S.ListItem>
            <S.ListItem>
              <Link href="/about">Projetos</Link>
            </S.ListItem>
            <S.ListItem>
              <Link href="/about">Sobre mim</Link>
            </S.ListItem>
          </S.List>
        </S.Nav>
      </S.Content>
    </S.Container>
  )
}
