import formal1 from "@/public/images/formal1.png";
import formal2 from "@/public/images/formal2.png";
import formal3 from "@/public/images/formal3.png";
import Image from "next/image";
import Link from "next/link";


export default function Cards(){
    return(
      
        <section className="container mx-auto p-10 md:py-12 px-0 md:p-8 md:px-0">
        <section
             className="roll-in-left p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 items-start ">
            <section  className="shadow rounded-2xl p-5 py-10 bg-purple-300 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
            <Image 
                src={formal1}
                alt="Logo"
                width={250} 
                height={300} 
            />
                <h1  className="text-3xl my-5">Prestige High-Cut Leather</h1>
                <p  className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, incidunt...</p>
                <h2  className="font-semibold mb-5">$29.99</h2>
                <Link href={"/formal-1"}>
                <button  className="p-2 px-6 bg-purple-500 text-white rounded-md hover:bg-purple-600">See More</button>
           </Link>
            </section>
    
    
            <section  className="shadow rounded-2xl p-5 py-10 bg-red-300 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
            <Image 
                src={formal2}
                alt="Logo"
                width={250} 
                height={300} 
            />
               
                <h1  className="text-3xl my-5">Slip-On Formal Shoe</h1>
                <p  className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, incidunt....</p>
                <h2  className="font-semibold mb-5">$19.99</h2>
                <Link href={"/formal-2"}>
                <button  className="p-2 px-6 bg-red-500 text-white rounded-md hover:bg-red-600">See More</button>
           </Link>
           </section>
    
            <section  className="shadow rounded-2xl p-5 py-10 bg-blue-300 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
            <Image 
                src={formal3}
                alt="Logo"
                width={250} 
                height={300} 
            />
                
              
                <h1  className="text-3xl my-5">Slip-On Formal Shoe</h1>
                <p  className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, incidunt...</p>
                <h2  className="font-semibold mb-5">$34.99</h2>
                <Link href={"/formal-3"}>
                <button  className="p-2 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600">See More</button>
           </Link>
            </section>
        </section>
    </section>
    );
    }