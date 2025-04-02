import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import EscapeLogo from "/public/escape path.png";

import Link from "next/link";
export default function Navbar() {
  return (
    <div className="bg-white/10 backdrop-blur-md p-4 pt-4 pb-3.5 border border-white/20 shadow-2xl rounded-xl mx-8 mb-8">
      <div className="container flex justify-between items-center mx-auto">
        <Link href="/">
          <div className="flex space-x-4 items-center">
            <Image src={EscapeLogo} alt="logo" className="w-12 h-12" />
            <h1 className="text-2xl tracking-wide font-black text-black">
              Career Path
            </h1>
          </div>
        </Link>
        <Link href="/datatable">
          <button className="flex items-center bg-gradient-to-r from-[#a13ddd] to-[#ee3aac] shadow-2xl  text-white p-4 m-4 rounded-3xl hover:from-purple-800 hover:to-pink-600 hover:text-gray-100">
            <h2 className="font-bold">Data Table</h2>
            <span>
              <ArrowTopRightOnSquareIcon className="icon w-8 h-8 ml-2" />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}
