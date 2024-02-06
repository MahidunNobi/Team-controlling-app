import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown} from '@fortawesome/free-solid-svg-icons'

export default function Home(props){
    return(

        <div id="HomeDiv" className="-mt-6 md:h-screen w-full" >
            <div className="HomeDiv2 h-full w-full flex md:flex-row flex-col">
                <div className="HeroText md:w-1/2 w-full md:ml-6 flex flex-col justify-between md:pl-0 pl-3">
                    <h1 className="text-white lg:text-9xl text-8xl font-semibold mb-10"> CONTROLL YOUR TEAM WITH US </h1>
                    <div className="mb-10"> <p className="text-xl text-white mt-12 ml-6 border-2 border-gray-200 inline rounded-lg px-6 py-2 cursor-pointer"> User Manual is in bellow <FontAwesomeIcon className="ml-3" icon={faArrowDown} /> </p>
                    </div>
                </div>

                <div className="pl-6 flex items-center">
                    <h2 className="text-gray-200 text-2xl"> I didn't make it responsive because I was so tired after making this whole app plan and design. So, <span className="text-red-400">  This App Can Works Fine In Dextop Or Laptops Not In Any Other Device. </span> <br />
                    I can make it totally responsive for mobile and tablets, If anybody needs this app very much responsive  please contact me.
                     </h2>
                </div>
                
            </div>
          
        </div>
        // <h1>
        //     You have {props.member.length>1 ? props.member.length+ " employees" : props.member.length +" employee" }  in your company
        // </h1>
    )
}