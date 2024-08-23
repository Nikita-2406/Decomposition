import { ReactNode } from "react"

interface ISideAdvertisementProps {
  title: string
  pngSrc: string
  children: ReactNode
}

export const SideAdvertisement = ({title, pngSrc, children} :ISideAdvertisementProps) => {
  return (
    <div className="side--ads--body">
      <img src={pngSrc} alt="" />
      <h3>{title}</h3>
      {children}
    </div>
  )
}
