import Image from "next/image"
import Link from "next/link"

import { experiencies } from "@/configs/experiencies"

export function Experiencies() {
  return (
    <div className="flex w-full flex-col gap-4">
      {experiencies.map((item) => (
        <div className="flex items-center gap-4" key={item.company}>
          <Link href={item.href} target="_blank">
            <Image
              width={60}
              height={60}
              src={item.logoCompany}
              alt="logo da empresa doal"
            />
          </Link>
          <div>
            <p className="text-lg font-bold">{item.company}</p>
            <p className="text-sm text-slate-500">{item.timeInCompany}</p>
            <p>{item.positionCompany}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
