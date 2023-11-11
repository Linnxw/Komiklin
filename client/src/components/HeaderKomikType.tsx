import {FC} from "react"

type HeaderKomikType = {
  title: string
  description: string
}

const HeaderKomikType: FC<HeaderKomikType> = ({title,description}) => {
  return (
    <main className="w-full rounded text-txtPrimary bg-green-800 overflow-hidden">
      <section className="bg-threed pt-3 px-2">
        <div className="bg-second w-fit h-fit text-xl rounded-t-md p-2 font-medium">
          <h1>
          {
          title
          }
          </h1>
        </div>
      </section>
      <section className="bg-second text-txtPrimary p-2 text-[.9rem]">
        <p>
        {
          description
        }
        </p>
      </section>
    </main>
    )
}

export default HeaderKomikType