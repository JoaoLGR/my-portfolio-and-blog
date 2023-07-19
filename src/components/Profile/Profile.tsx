import Image from "next/image"

import * as S from "./styles"

type ProfileProps = {
  profileInfos: { title: string; about: string }
}

export function Profile({ profileInfos }: ProfileProps) {
  const { title, about } = profileInfos

  return (
    <S.Container>
      <S.ImageContent>
        <Image
          width={80}
          height={80}
          className="rounded-full"
          src="/assets/images/profile.jpg"
          alt="profileImage"
          priority
        />
        <S.Title>{title}</S.Title>
      </S.ImageContent>

      <S.AboutMe>{about}</S.AboutMe>
    </S.Container>
  )
}
