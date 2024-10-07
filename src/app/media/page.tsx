"use client"

import React, {useState} from "react"
import Image from "next/image"
import circle from "@/assets/circle-x.png"
import square from "@/assets/square-check-big.png"
import school from "@/assets/school-building.svg"

const Media: React.FC = () => {
    const [aluno, setAluno] = useState<string>("")
    const [numero1, setNumero1] = useState<string>("")
    const [numero2, setNumero2] = useState<string>("")
    const [numero3, setNumero3] = useState<string>("")
    const [numero4, setNumero4] = useState<string>("")
    const [numero5, setNumero5] = useState<string>("")
    const [media, setMedia] = useState<number | undefined>()
    const [passou, setPassou] = useState<boolean>(false)
    const msgError = "Digite um numero valido"
    
    const handleOperacao = () =>
        {
            const a = aluno;
            const n1 = parseFloat(numero1)
            const n2 = parseFloat(numero2)
            const n3 = parseFloat(numero3)
            const n4 = parseFloat(numero4)
            const n5 = parseFloat(numero5)
            
           setMedia((n1+n2+n3+n4+n5)/5)

           if ((n1+n2+n3+n4+n5)/5 > 7) {
            setPassou(true)
           }

        }
        return (
            
        <div className="h-screen w-full flex justify-center items-center bg-lightYellow">




            <div className="w-5/6 h-auto flex lg:h-[40rem]  flex-col shadow-2xl bg-lightYellow rounded-lg border-poopYellow border-solid border-[1px]">
            <div className="w-full h-full flex justify-center items-center">

                <Image src={school} alt={""} className="hidden lg:block w-50 h-44"></Image>

            </div>



                    <div className="flex flex-col lg:flex-row  lg:justify-around justify-center items-center my-5">
                        <label htmlFor="n1" className="font-semibold">Aluninho chato:</label>
                        <input type="text" id="n1" value={aluno} onChange={(e) => setAluno(e.target.value)}   className=" font-semibold border-solid border-[1px] text-center border-blue mx-2 rounded-xl px-2 lg:w-9/12 w-11/12"/>
                    </div>

                <div className="flex flex-col justify-center items-center mb-5  lg:flex-row  lg:justify-around ">
                    <label htmlFor="n2" className="font-semibold">Nota 01</label>
                    <input type="text" value={numero1} id="n2" className="border-solid  border-[1px] border-blue mx-2 text-center rounded-xl px-2  lg:w-9/12 w-11/12 font-semibold" onChange={(e) => setNumero1(e.target.value)} />
                </div>

                <div className="flex flex-col justify-center items-center mb-5  lg:flex-row  lg:justify-around">
                    <label htmlFor="n2" className="font-semibold">Nota 02</label>
                    <input type="text" value={numero2} id="n2" className="border-solid  border-[1px] border-blue mx-2 text-center rounded-xl px-2 lg:w-9/12 w-11/12 font-semibold" onChange={(e) => setNumero2(e.target.value)} />
                </div>

                <div className="flex flex-col justify-center items-center mb-5  lg:flex-row  lg:justify-around">
                    <label htmlFor="n2" className="font-semibold">Nota 03</label>
                    <input type="text" value={numero3} id="n2" className="border-solid  border-[1px] border-blue mx-2 text-center rounded-xl px-2  lg:w-9/12 w-11/12 font-semibold" onChange={(e) => setNumero3(e.target.value)} />
                </div>


                <div className="flex flex-col justify-center items-center mb-5  lg:flex-row  lg:justify-around">
                    <label htmlFor="n2" className="font-semibold">Nota 04</label>
                    <input type="text" value={numero4} id="n2" className="border-solid  border-[1px] border-blue mx-2 text-center rounded-xl px-2 lg:w-9/12 w-11/12 font-semibold" onChange={(e) => setNumero4(e.target.value)} />
                </div>

                <div className="flex flex-col justify-center items-center mb-5  lg:flex-row  lg:justify-around">
                    <label htmlFor="n2" className="font-semibold">Nota 05</label>
                    <input type="text" value={numero5} id="n2" className="border-solid  border-[1px] border-blue mx-2 text-center rounded-xl px-2  lg:w-9/12 w-11/12 font-semibold" onChange={(e) => setNumero5(e.target.value)} />
                </div>




                <div className="flex flex-col justify-center items-center ">
                    <button  className="border-solid border-2 border-blue mx-2 w-11/12 rounded-lg shadow-xl h-8 bg-white font-semibold" onClick={handleOperacao}>Faça o calculo</button>
                    <h2 className="my-8 text-lg shadow-lg rounded-lg font-semibold">{!isNaN(media ?? NaN) ? `A media do aluno ${aluno}: ${media?.toFixed(2)}`: msgError}</h2>
                    <h2 className="mb-6 text-lg shadow-lg rounded-lg font-semibold flex flex-wrap">{passou ? "Passou" : "Não Passou"} <Image className="ml-3" src={passou ? square : circle} alt={""}></Image>   </h2>
                       
                </div>
                    


            </div>
        </div>


      

    )


}

export default Media;