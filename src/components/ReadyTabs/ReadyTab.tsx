// показывает один готовый поисковый запрос

import { ReactNode } from "react"

interface IReadyTabProps {
  type: string,
  children: ReactNode
}

export const ReadyTab = ({type, children}: IReadyTabProps) => {
  return (
    <div>
      <h3 className="tab-title">{type}</h3>
      {children}
    </div>
  )
}
