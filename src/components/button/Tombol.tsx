import React, { FC, ReactNode } from "react"

interface Props{
    children: ReactNode | ReactNode[]
}

const Tombol:FC<Props> = ({children}) => {
  return (
    <button style={{
        padding: '2em'
    }} >{children}</button>
  )
}

export default Tombol