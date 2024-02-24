import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="flex justify-around bg-orange-400 py-3">
        <div>Logo</div>
      <ul className="list-none flex gap-3 ">
              <Link href="/"><li>Home</li></Link>
              <Link href="/about"><li>About</li></Link>
              <Link href="/contact"><li>Contact</li></Link>
      </ul>
    </div>
  )
}

export default Navbar



