import { useMediaQuery } from "react-responsive"
import SideBar from "./SideBar"
import { useState } from "react"

const Layout = (props) => {
  const [open, setOpen] = useState(false)
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1023px)' })
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' })


// console.log(email)

  const openSidebar = () =>{
    open === false ? setOpen(true) : setOpen(false)
    console.log("Clicked")
  }
  return (
<div className="relative h-[100vh]">
  {/* Mobile Navbar */}
  {isTabletOrMobile && <div className="flex gap-6 p-4 z-20 fixed top-0 left-0 bg-white w-full border-b-[0.5px] border-grey-100 ">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" onClick={openSidebar}>
  <rect x="3" y="4" width="18" height="2" rx="1" fill="#676664"/>
  <rect x="3" y="11" width="18" height="2" rx="1" fill="#676664"/>
  <rect x="3" y="18" width="18" height="2" rx="1" fill="#676664"/>
</svg>

<p>Dashboard</p>
    </div>}
  {/* SideBar come to refactooor logic */}
  { open &&
     <SideBar />
  }
   { isDesktop &&
     <SideBar />
  }
  {/* SideBar come to refactooor logic */}

 
  <div className="mt-[56px] py-5 px-4 md:px-6 lg:py-[42px] lg:mt-0 lg:ml-[256px] xl:px-8 text-UntitledSans">
    {props.children}
  </div>
    </div>  )
}

export default Layout