import Link from "next/link"

import { Nav } from "@/types"

export function Footer({ items }: { items: Nav }) {
  return (
    <div className="flex h-48 w-full items-center justify-center  bg-secondary">
      <div className="flex w-full justify-around">
        <section>
          <h2>João Lucas</h2>
        </section>

        <section>
          <h2 className="mb-4 text-lg font-bold">Minhas redes</h2>
          <p className="cursor-pointer hover:text-link">Linkedin</p>
          <p className="cursor-pointer hover:text-link">Github</p>
          <p className="cursor-pointer hover:text-link">Instagram</p>
        </section>

        <section>
          <h2 className="mb-4 text-lg font-bold">Blogmap</h2>
          <ul>
            {items.map(({ title, href }) => (
              <li
                className="transition-colors duration-300 ease-in-out hover:text-link"
                key={title}
              >
                <Link href={href}>{title}</Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}
