import Logo from "../assets/logo.png"
import Footer from "./Footer";
import Home_header from "./Home_header";
import SearchInput from "./SearchInput";

const Home = () => {
  return (
      <div className="flex h-[100vh] flex-col"> 
        <Home_header/>
        <main className="grow flex justify-center">
          <div className="w-full px-5 flex flex-col items-center mt-40">
          <img src={Logo} className="w-[172px] md:w-[272px] mb-4" alt="" />
          <SearchInput/>
          <div className="flex gap-2 text-[#3c4043] mt-6">
            <button className="h-9 px-4 bg-[#f8f9fa] text-sm rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-cs2">Google Search</button>
            <button className="h-9 px-4 bg-[#f8f9fa] text-sm rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-cs2">I'm Feeling Lucky</button>
          </div>
          </div>
        </main>
        <Footer/>
      </div>
    );
}

export default Home
