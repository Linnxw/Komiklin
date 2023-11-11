import {FC,useRef} from "react"
import logo from "@/assets/image/fav.png"
import {FaSearch} from "react-icons/fa"
import {Link} from "react-router-dom"

const Navigation: FC = () => {

  return (
    <div className="w-screen h-full flex flex-col bg-second font-roboto text-red-500">
      <section className="pt-2">
        <div className="flex gap-3 items-center justify-center">
          <img
          src={logo}
          alt="logo"
          className="rounded-md w-6 h-6"
          />
          <Input/>
        </div>
        <div className="font-roboto text-red-500 font-light"></div>
      </section>
      <section className="w-full flex gap-6 justify-center p-3 font-roboto font-medium text-slate-100">
        <Link to="">Manga</Link>
        <Link to="">Manhua</Link>
        <Link to="">Manhwa</Link>
      </section>
      <section className="w-full overflow-x-scroll py-1 bg-threed">
        <div className="flex items-center gap-2 min-w-full text-txtPrimary font-light px-2 text-sm">
          <Link className="bg-second py-[3px] px-5" to="">Manga</Link>
          <Link className="bg-second py-[3px] px-5" to="">Manga</Link>
          <Link className="bg-second py-[3px] px-5" to="">Manga</Link>
          <Link className="bg-second py-[3px] px-5" to="">Manga</Link>
          <Link className="bg-second py-[3px] px-5" to="">Manga</Link>
          <Link className="bg-second py-[3px] px-5" to="">Manga</Link>
          <Link className="bg-second py-[3px] px-5" to="">Manga</Link>
          <Link className="bg-second py-[3px] px-5" to="">Manga</Link>

        </div>
      </section>
    </div>
    )
}

const Input:FC = () => {
  const inputRef = useRef()
  return (
    <div className="relative text-txtPrimary flex items-center">
    <input ref={inputRef} className="w-72 outline-none peer rounded p-2 bg-threed text-sm font-light font-roboto" type="teks" placeholder="Cari..." required/>
    <span onClick={()=>inputRef.current.focus()} className="text-xl absolute right-3 peer-focus:text-blue-500">
      <FaSearch/>
    </span>
    </div>
    ) 
}

export default Navigation