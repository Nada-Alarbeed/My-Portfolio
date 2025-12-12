import Menu from '../components/Menu'
 const Header = () => {
  return (
    <header className="bg-blackberry-cream sticky w-full top-0 left-0 z-50 py-5 shadow-lg  ">
        <div className="center-container flex justify-between items-center">
        <span className="text-3xl text-white italic font-semibold">NR</span>
       <Menu/>
        </div>
    </header>
  )
}
export default Header