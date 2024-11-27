import Image from "next/image";
import shoes1 from "@/public/images/shoes1.png"
import formal1 from "@/public/images/formal1.png"
import shoes2 from "@/public/images/shoes2.png"
import formal2 from "@/public/images/formal2.png"
import shoes3 from "@/public/images/shoes3.png"
import formal3 from "@/public/images/formal3.png"

export default function Product() {
    return (
        <div>
            <div className="p-1 flex flex-wrap items-center justify-center">
                <div className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg">
                    <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none"
                        style={{ transform: "scale(1.5)", opacity: 0.1 }}>
                        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                    </svg>
                    <div className="relative pt-10 px-10 flex items-center justify-center">
                        <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                            style={{ background: "radial-gradient(black, transparent 60%)", transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)", opacity: 0.2 }}>
                        </div>
                        <Image className="relative w-40"
                        src={shoes1}
                        alt=""
                        
                        />

                        {/* <img className="relative w-40" src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png" alt="" /> */}
                    </div>
                    <div className="relative text-white px-6 pb-6 mt-6">
                        <span className="block opacity-75 -mb-1">Casual</span>
                        <div className="flex justify-between">
                            <span className="block font-semibold text-xl">Nike Shoe</span>
                            <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">$29.99</span>
                        </div>
                    </div>
                </div>

                <div className="flex-shrink-0 m-6 relative overflow-hidden bg-teal-500 rounded-lg max-w-xs shadow-lg">
                    <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none"
                        style={{ transform: "scale(1.5)", opacity: 0.1 }}>
                        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                    </svg>
                    <div className="relative pt-10 px-10 flex items-center justify-center">
                        <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                            style={{ background: "radial-gradient(black, transparent 60%)", transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)", opacity: 0.2 }}>
                        </div>
                        <Image className="relative w-40"
                        src={formal1}
                        alt=""
                        
                        />
                        {/* <img className="relative w-40" src="https://user-images.githubusercontent.com/2805249/64069998-305de300-cc9a-11e9-8ae7-5a0fe00299f2.png" alt="" /> */}
                    </div>
                    <div className="relative text-white px-6 pb-6 mt-6">
                        <span className="block opacity-75 -mb-1">Formal</span>
                        <div className="flex justify-between">
                            <span className="block font-semibold text-xl">HighCut Leather</span>
                            <span className="block bg-white rounded-full text-teal-500 text-xs font-bold px-3 py-2 leading-none flex items-center">$29.99</span>
                        </div>
                    </div>
                </div>

                <div className="flex-shrink-0 m-6 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs shadow-lg">
                    <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none"
                        style={{ transform: "scale(1.5)", opacity: 0.1 }}>
                        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                    </svg>
                    <div className="relative pt-10 px-10 flex items-center justify-center">
                        <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                            style={{ background: "radial-gradient(black, transparent 60%)", transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)", opacity: 0.2 }}>
                        </div>
                        <Image className="relative w-40"
                        src={shoes2}
                        alt=""
                        
                        />
                        {/* <img className="relative w-40" src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png" alt="" /> */}
                    </div>
                    <div className="relative text-white px-6 pb-6 mt-6">
                        <span className="block opacity-75 -mb-1">Casual</span>
                        <div className="flex justify-between">
                            <span className="block font-semibold text-xl">Skate Shoe</span>
                            <span className="block bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center">$19.99</span>
                        </div>
                    </div>
                </div>

                <div className="flex-shrink-0 m-6 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs shadow-lg">
                    <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none"
                        style={{ transform: "scale(1.5)", opacity: 0.1 }}>
                        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                    </svg>
                    <div className="relative pt-10 px-10 flex items-center justify-center">
                        <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                            style={{ background: "radial-gradient(black, transparent 60%)", transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)", opacity: 0.2 }}>
                        </div>
                        <Image className="relative w-40"
                        src={formal2}
                        alt=""
                        
                        />
                        {/* <img className="relative w-40" src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png" alt="" /> */}
                    </div>
                    <div className="relative text-white px-6 pb-6 mt-6">
                        <span className="block opacity-75 -mb-1">Formal</span>
                        <div className="flex justify-between">
                            <span className="block font-semibold text-xl">Formal Shoe</span>
                            <span className="block bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center">$19.99</span>
                        </div>
                    </div>
                </div>
                <div className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg">
                    <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none"
                        style={{ transform: "scale(1.5)", opacity: 0.1 }}>
                        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                    </svg>
                    <div className="relative pt-10 px-10 flex items-center justify-center">
                        <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                            style={{ background: "radial-gradient(black, transparent 60%)", transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)", opacity: 0.2 }}>
                        </div>
                        <Image className="relative w-40"
                        src={shoes3}
                        alt=""
                        
                        />

                        {/* <img className="relative w-40" src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png" alt="" /> */}
                    </div>
                    <div className="relative text-white px-6 pb-6 mt-6">
                        <span className="block opacity-75 -mb-1">Casual</span>
                        <div className="flex justify-between">
                            <span className="block font-semibold text-xl">Skate Shoe</span>
                            <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">$29.99</span>
                        </div>
                    </div>
                </div>
                <div className="flex-shrink-0 m-6 relative overflow-hidden bg-teal-500 rounded-lg max-w-xs shadow-lg">
                    <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none"
                        style={{ transform: "scale(1.5)", opacity: 0.1 }}>
                        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                    </svg>
                    <div className="relative pt-10 px-10 flex items-center justify-center">
                        <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                            style={{ background: "radial-gradient(black, transparent 60%)", transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)", opacity: 0.2 }}>
                        </div>
                        <Image className="relative w-40"
                        src={formal3}
                        alt=""
                        
                        />
                        {/* <img className="relative w-40" src="https://user-images.githubusercontent.com/2805249/64069998-305de300-cc9a-11e9-8ae7-5a0fe00299f2.png" alt="" /> */}
                    </div>
                    <div className="relative text-white px-6 pb-6 mt-6">
                        <span className="block opacity-75 -mb-1">Formal</span>
                        <div className="flex justify-between">
                            <span className="block font-semibold text-xl">Formal Shoe</span>
                            <span className="block bg-white rounded-full text-teal-500 text-xs font-bold px-3 py-2 leading-none flex items-center">$34.99</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
