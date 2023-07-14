import { allPosts } from "contentlayer/generated"

import { Mdx } from "@/components/Mdx"

export const metadata = {
  title: "Home | João Lucas",
  description: "Tela principal"
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>Hello world!</h2>
      <h1>{allPosts[0].title}</h1>
      <Mdx code={allPosts[0].body.code} />
    </main>
  )
}
