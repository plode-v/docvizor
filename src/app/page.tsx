import HomeSidebar from "@/components/HomeSidebar"
import HomeNavbar from "@/components/HomeNavbar"
import AboutUs from "@/components/AboutUs"
import Herobanner from "@/components/Herobanner"

export default function Home() {
  return (
    <div className="max-w-screen min-h-screen">
      <HomeSidebar />
      <div className="pl-[70px]">
        <HomeNavbar />
        <Herobanner />
      </div>
      <div className="pl-[70px]">
        <AboutUs />
      </div>
    </div>
  )
}
