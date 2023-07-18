import Image from "next/image"

import { skillsIcons } from "@/configs/skillsIcons"

import { Layout } from "@/components/Layout"
import { Skills } from "@/components/Skills"

import * as S from "./styles"

type ProfileProps = {
  profileInfos: { title: string; about: string }
}

export function Profile({ profileInfos }: ProfileProps) {
  const { title, about } = profileInfos

  return (
    <Layout>
      <S.Container>
        <S.ImageContent>
          <Image
            width={130}
            height={130}
            className="rounded-full"
            src="/assets/images/profile.jpg"
            alt="profile image"
            priority
          />
          <S.Title>{title}</S.Title>
        </S.ImageContent>

        <S.AboutMe>{about}</S.AboutMe>

        <div className="mt-10">
          <Skills items={skillsIcons} />
        </div>
      </S.Container>
    </Layout>
  )
}
