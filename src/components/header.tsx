import logo from "@/public/images/logo.png" 
import Image from "next/image";
import Link from "next/link";




export default function Header(){
    return(
     

        <div>


<nav className="bg-slate-500 ">
    <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
    <Image 
                src={logo}
                alt="Logo"
                width={150} 
                height={100} 
            />

        <div className="lg:hidden">
            <button className="text-white focus:outline-none">
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        ></path>
                    </svg>
                </button>
        </div>

        <div className="lg:flex flex-col lg:flex-row lg:space-x-9 lg:mt-0 mt-4 flex flex-col items-center text-xl">
            <a href="/" className="text-white  px-4 py-2 hover:text-orange-600 ">Home</a>
            < Link href={"/Product"} className="text-white  px-4 py-2  hover:text-orange-600">Product</Link>
            
                    
              
            <Link  href= {"/About-us"} className="text-white  px-4 py-2  hover:text-orange-600">About Us</Link>
            < Link href={"/contact-us"} className="text-white  px-4 py-2  hover:text-orange-600">Contact Us</Link>
        </div>
    </div>

</nav>


        </div>
    )
}
