import Link from 'next/link'

export default function Header({location}) {
  return (
    <div className="p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src="vercel.svg" width="50" alt="Logo" className="mr-2" />
          <a href="#" className="inline-block p-2 text-indigo-200 hover:text-indigo-100 mr-2">NQNGO</a>
          <a href="#" className="inline-block p-2 text-indigo-200 hover:text-indigo-100">About</a>
      </div>

      <div className="hidden md:block">
        <a href="#" className="inline-block p-2 text-indigo-200 hover:text-indigo-100 mr-2">Projects</a>
      </div>
    </div>
  )
}