import Link from "next/link";

interface ICard {
    titulo: string;
    texto1: string;
    session: string;
}

 const Card:React.FC<ICard> = ({titulo,texto1, session}) =>
    {
        return (      
            
            <div className="h-[32rem] w-80 rounded-xl shadow-lg m-6 flex flex-col ">
                {/* header */}
                <div className="h-3/6 w-full flex">
                    <div className="h-full w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                        <p className="h-full w-full flex font-bold text-3xl text-white justify-center items-center">{titulo}</p>
                    </div>
                </div>

                {/* Body */}
                <div className="h-3/6 w-full items-center justify-center flex flex-col p-3 ">
                    <p className="mt-3 text-lg font-semibold  text-gray-900  text-center">
                        {texto1 ? texto1 : "Unknow"}
                    </p>
                    <Link className="mt-3 h-1/6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-64 text-white font-semibold text-center p-1 text-lg" href={session}>Ler Mais</Link>
                </div>
            </div>
        )
    }

export default Card;