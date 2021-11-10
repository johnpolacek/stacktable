import React, { useState } from "react"
import Head from "next/head"
import StackTable from "../components/StackTable"
import getItemColumns from "../components/getItemColumns"

const data = [
  {
    id: 1,
    status: "⚡ Live",
    data: {
      name: "Spaceship",
      category: "space",
      link: "https://www.youtube.com/watch?v=fGATYOMajig",
      icon: "🚀",
    },
    cost: "$100",
    departure: "08/01/2023",
    count: 5,
  },
  {
    id: 2,
    status: "⚡ Live",
    data: {
      name: "Bicycle",
      category: "ground",
      link: "https://www.youtube.com/watch?v=Guv6hWaIQaE",
      icon: "🚲",
    },
    cost: "$5",
    departure: "08/01/2023",
    count: 2,
  },
  {
    id: 3,
    status: "🔜 Soon",
    data: {
      name: "Teleporter",
      category: "instant",
      link: "https://www.youtube.com/watch?v=vsqSUb9-Lwk",
      icon: "🪰",
    },
    cost: "$1,000,000,000",
    departure: "08/01/3023",
    count: 0,
  },
]

export default function Home() {
  const [itemData, setItemData] = useState(data)
  const [activeItem, setActiveItem] = useState(null)

  const onToggleDropdown = ({ id, isActive }) => {
    console.log("onToggleDropdown " + id + " " + isActive)
    setActiveItem(isActive ? null : id)
  }

  const onAddToCount = (id) => {
    console.log("onAddToCount " + id)
    var newData = itemData.map((item) =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    )
    setItemData(newData)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>StackTable</title>
        <meta
          name="description"
          content="Responsive tables with CSS Grid, React and Tailwind CSS."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 p-4 md:px-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold pt-4">StackTable</h1>

        <p className="mt-3 text-lg  md:text-2xl">
          Responsive tables with CSS Grid, React and Tailwind CSS.
        </p>

        <div className="my-12 w-full max-w-5xl">
          <StackTable
            id="ItemTable"
            columns={getItemColumns({
              onAddToCount,
              activeItem,
              onToggleDropdown,
            })}
            data={itemData}
            gridTemplateColumns="1fr 2fr 4fr 3fr 3fr 2fr"
          />
        </div>

        <div className="mb-20 hidden md:block flex flex-col">
          <button
            onClick={() => {
              window.open(
                document.location.href,
                "targetWindow",
                "width=360,height=640"
              )
            }}
            className="blox mx-auto w-64 bg-gray-200 rounded px-3 py-2 text-lg mb-4"
          >
            ↖️ View Small Screen Size
          </button>
          <a href="#" className="block mx-auto w-64 bg-gray-200 rounded px-3 py-3 text-lg"><img className="inline mr-2 -mt-1" width="20" src="/images/github.svg" alt="Github logo" />View Source on Github</a>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <p>
          Built by <a className="text-blue-600 bold underline"
          href="https://johnpolacek.com"
        >
          John Polacek
        </a> in Chicago</p>
      </footer>
    </div>
  )
}
