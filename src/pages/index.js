import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`h-screen flex flex-col items-center justify-center p-24 ${inter.className}`}
    >
      <h1 className="font-bold text-3xl mb-2">Coming Soon</h1>
      <p>In the meantime check our work at <Link className='underline' href={"https://codextreme.infinitloop.io"}>CodeXtreme</Link></p>
    </main>
  )
}
