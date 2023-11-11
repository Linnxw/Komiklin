import Navigation from "@/components/Navigation"
import HeaderKomikType from "@/components/HeaderKomikType"
import SliderKomik from "@/components/SliderKomik"
export default function HomePage(){
  return (
    <main className="w-screen min-h-screen bg-main flex flex-col">
      <Navigation/>
      <section className="py-4 flex flex-col px-2 gap-4">
       <HeaderKomikType title="Komiklin Baca-Manga" description="ut aliqua sint esse cupidatat consectetur nostrud do veniam enim mollit qui laboris enim utconsequat ea ipsum dolor mollit sint minim culpa qui dolore reprehenderit proident eiusmod amet incididunt mollit irure sint eiusmod ut
       "/>
       <SliderKomik/>
      </section>
    </main>
    )
}