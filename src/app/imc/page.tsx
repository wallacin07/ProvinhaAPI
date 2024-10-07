"use client"

import React, {useState} from "react"
import Acadimia from "@/assets/c5beec0aff097139052f79f2e19a3a51.svg"
import Image from "next/image"

const IMC: React.FC = () => {
    const [numero1, setNumero1] = useState<string>("")
    const [numero2, setNumero2] = useState<string>("")
    const [massa, setMassa] = useState<number | undefined>()
    const msgError = "Digite um numero valido"
    
    const handleOperacao = () =>
        {
            const n1 = parseFloat(numero1)
            const n2 = parseFloat(numero2)
            setMassa(n1/(n2*n2))


        }
        return (
            
        <div className="h-screen w-full flex justify-center items-center bg-lightYellow">

            <div className="w-4/6 h-80 lg:h-[31rem] flex  flex-col shadow-2xl bg-lightYellow rounded-lg border-poopYellow border-solid border-[1px]">

                    <div>
                        <Image src={Acadimia} alt={""} className="hidden lg:block w-50 h-44"></Image>
                    </div>

                    <div className="flex flex-col justify-center items-center my-5">
                        <label htmlFor="n1" className="font-semibold">Peso (KG)</label>
                        <input type="text" id="n1" value={numero1} onChange={(e) => setNumero1(e.target.value)}   className=" font-semibold border-solid border-[1px] text-center border-blue mx-2 rounded-xl px-2 w-11/12"/>
                    </div>

                <div className="flex flex-col justify-center items-center mb-5">
                    <label htmlFor="n2" className="font-semibold">Altura (Metro)</label>
                    <input type="text" value={numero2} id="n2" className="border-solid  border-[1px] border-blue mx-2 text-center rounded-xl px-2 w-11/12 font-semibold" onChange={(e) => setNumero2(e.target.value)} />
                </div>




                <div className="flex flex-col justify-center items-center ">
                    <button  className="border-solid border-2 border-blue mx-2 w-11/12 rounded-lg shadow-xl h-8 bg-white font-semibold" onClick={handleOperacao}>Faça o calculo</button>
                    <h2 className="my-8 text-lg shadow-lg rounded-lg font-semibold">{!isNaN(massa ?? NaN) ? `Seu IMC é: ${massa?.toFixed(2)}`: msgError}</h2>
                </div>
                    


            </div>
        </div>


      

    )


}

export default IMC;