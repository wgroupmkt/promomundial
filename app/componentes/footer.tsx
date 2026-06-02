import Link from 'next/link'
import Image from 'next/image'
import logowolf from '../../public/logowolfmundial.png'

export default function Footer() {
  return (
    <footer className="border-t py-6 bg-[#333366]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 text-white">

        {/* Logo */}
        <div className="text-2xl font-bold">
          <Image src={logowolf} width={100}></Image>
        </div>

        {/* Redes */}
        <div className="flex items-center gap-5">
          <Link
            href="https://instagram.com"
            target="_blank"
            className="transition hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-8 w-8"
            >
              <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5A3.75 3.75 0 0 1 7.75 4zm8.75 1a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
            </svg>
          </Link>

          <Link
            href="https://wa.me/5492610000000"
            target="_blank"
            className="transition hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="currentColor"
              className="h-8 w-8"
            >
              <path d="M16.04 3C8.84 3 3 8.74 3 15.83c0 2.52.74 4.97 2.14 7.08L3 29l6.3-2.06a13.1 13.1 0 0 0 6.74 1.84h.01C23.24 28.78 29 23.04 29 15.95 29 8.86 23.24 3 16.04 3zm0 23.54c-2.03 0-4.02-.55-5.75-1.58l-.41-.24-3.74 1.22 1.22-3.63-.27-.43a10.44 10.44 0 0 1-1.6-5.55c0-5.77 4.74-10.47 10.56-10.47 5.82 0 10.56 4.7 10.56 10.47 0 5.78-4.74 10.48-10.57 10.48zm5.79-7.84c-.32-.16-1.9-.93-2.2-1.03-.3-.11-.52-.16-.74.16-.21.32-.84 1.03-1.03 1.24-.19.21-.38.24-.7.08-.32-.16-1.35-.49-2.57-1.57-.95-.84-1.59-1.88-1.77-2.2-.19-.32-.02-.49.14-.65.14-.14.32-.38.48-.57.16-.19.21-.32.32-.54.11-.22.05-.41-.03-.57-.08-.16-.74-1.77-1.01-2.42-.27-.65-.54-.57-.74-.58h-.63c-.22 0-.57.08-.87.41-.3.32-1.14 1.11-1.14 2.7s1.17 3.13 1.33 3.35c.16.22 2.29 3.46 5.55 4.85.78.34 1.39.54 1.87.69.79.25 1.51.22 2.08.13.63-.09 1.9-.78 2.17-1.53.27-.76.27-1.41.19-1.54-.08-.13-.3-.21-.62-.38z" />
            </svg>
          </Link>
        </div>

      </div>
    </footer>
  )
}