
import shoes2 from "@/public/images/shoes2.png";
import Image from "next/image";

export default function Hello(){
    return(
        <div>
        
<section className=" bounce-in-top text-gray-600 body-font bg-white dark:bg-cyan-900 ">
    <div className= "container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center ">
        <div
            className="lg:flex-grow mt-5 md:mt-0   md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1
                className="text-2xl font-extrabold leading-9 tracking-tight mb-3 text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
               Sneakers Skate Shoe
            </h1>
            <p className="mb-8 md:pl-0  pl-2 pr-2 leading-relaxed dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quaerat ex aliquid natus est voluptates, deleniti eaque? Obcaecati minima tempora quam ad rem consequatur excepturi quo veniam saepe tempore sit incidunt totam magni quibusdam sunt, deserunt voluptate recusandae architecto dolorem.
            </p>
            <div className="flex justify-center">
                <a href="#"
                    className="inline-flex text-white bg-emerald-600 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-900 rounded text-lg">Buy Now
                </a>
                <a href="#"
                    className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-400 rounded text-lg">Save As Draft</a>
            </div>
        </div>
        <div className="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
        <Image className="cardimg1"
                src={shoes2}
                alt="Logo"
                width={400} 
                height={150} 
            />
        </div>
    </div>
</section>

</div>

    );
}