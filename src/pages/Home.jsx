import Banner from "../components/Banner"
import Header from "../components/header"
import SpecialityMenu from "../components/specialityMenu"
import TopDoctors from "../components/TopDoctors"


const Home = () => {
  return (
    <div>
      <Header/>
      <SpecialityMenu/>
      <TopDoctors/>
      <Banner/>
    </div>
  )
}

export default Home
