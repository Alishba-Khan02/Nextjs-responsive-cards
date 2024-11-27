import Image from "next/image";
import  about1 from "@/public/images/about1.png";
export default function About(){
    return(
   <div>
   <div className="sm:flex items-center max-w-screen-xl">
    
   <div className="sm:w-1/2 p-10">
       
       <div className="image object-center text-center">
               <Image src={about1} alt="about picture" width={500}
               height={600}/>
          
               
          
           </div>

    </div>
    <div className="sm:w-1/2 p-5">
        <div className="text">
           
            <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">About <span className="text-indigo-600">Our Company</span>
            </h2>
            <p className="text-gray-700">
               
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident cupiditate voluptatem deleniti distinctio, officia perspiciatis laborum illum inventore incidunt praesentium unde esse labore cumque dicta ipsa, ullam asperiores facere delectus eius veritatis illo reiciendis. Error explicabo tempore non voluptatum nesciunt molestiae omnis consequatur qui voluptas, animi iure ipsum nostrum dolores!
            </p>
        </div>
    </div>
    
</div>

   </div>


);
}
