import { profileInfos } from "@/configs/profile"
import { skillsIcons } from "@/configs/skillsIcons"

import { Profile } from "@/components/Profile"
import { Skills } from "@/components/Skills"

export const metadata = {
  title: "Home | João Lucas",
  description: "Tela principal"
}

export default function Home() {
  return (
    <main className="py-24">
      <Profile profileInfos={profileInfos} />

      <div className="mt-10">
        <Skills items={skillsIcons} />
      </div>
    </main>
  )
}
