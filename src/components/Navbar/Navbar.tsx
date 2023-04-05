import { ReactNode } from "react"

interface INavbar {
  children: ReactNode
}

const Navbar: React.FC<INavbar> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default Navbar