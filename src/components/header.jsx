import { assets } from "../assets/assets"


const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flew-wrap bg-primary rounded-lg px-6 my-7 md:px-10 lg:px-20">
      {/* ========== Left Side =========== */}
        <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
            <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight ">
            Book Appointment  <br/>
            With Trusted Doctors
            </p>
            <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm">
                <img  src={assets.group_profiles} alt="group_profile"/>
                <p>Simply browse through our extensive list of trusted doctors, <br className="hidden sm:block"/> 
                schedule your appointment hassle-free.</p>
            </div>
            <a className="flex items-centergap-2 bg-white px-8 py-3 gap-1 rounded-full text-gray-600  text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300" href="#speciality">
            Book appointment
            <img className="w-3"  src={assets.arrow_icon} alt="arrow_icon"/>
            </a>

            
        </div>
      {/* ========== Right Side =========== */}
      
        <div className="md:w-1/2 relative">
        <img className="w-full md:absolute bottom-0 h-auto " src={assets.header_img} alt="header_img"/>
        </div>
    </div>
  )
}

export default Header
