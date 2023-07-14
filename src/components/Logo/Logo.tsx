import Image from "next/image"

export function Logo() {
  return (
    <div>
      <Image
        src="/assets/images/logoJL2.png"
        alt="logo"
        width={45}
        height={45}
      />
    </div>
  )
}
