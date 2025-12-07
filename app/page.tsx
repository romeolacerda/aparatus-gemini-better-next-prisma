import Image from "next/image";
import banner from '../public/banner.png';
import Header from "./_components/header";
import SearchInput from "./_components/search-input";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="px-5">
        <SearchInput />
        <Image 
        src={banner} 
        alt="Agende aqui!"
        sizes="100w" 
        className="h-auto w-full" />
      </div>
    </div>
  )
}
