import Card from "@/components/card";
import Image from "next/image";
import tailwind from "@/assets/tailwind.jpg";
import reactJS from "@/assets/reactJS.png"
import next from "@/assets/next.png"
import jquery from "@/assets/jquery.png"


export default function Home() {
  return (
    <>

        <div className="h-full w-full flex flex-col p-4 lg:p-10 ">

          <div className=" flex flex-col md:flex-row  md:flex-wrap xl:flex-nowrap justify-center items-center h-1/5 w-full" id="session1">
              <Card titulo={"React"} texto1={"O React é uma poderosa biblioteca para construção de interfaces visuais em JavaScript. Ou seja, é uma ferramenta ideal para o desenvolvimento front-end."} session={"#2"}/>
              <Card titulo={"Tailwind"} texto1={"Uma estrutura CSS utilitária repleta de classes como flex, text-center, que podem ser compostas para construir qualquer design, diretamente em sua marcação."} session={"#3"}/>
              <Card titulo={"AngularNext"} texto1={"Next.js é uma estrutura para construir aplicativos web full-stack. Você usa React para construir interfaces de usuário e Next.js para recursos e otimizações."} session={"#4"}/>
              <Card titulo={"JQuery"} texto1={"Biblioteca livre que contém funções do JavaScript que interage com páginas em HTML, desenvolvida para simplificar os scripts executados/interpretados."} session={"#5"}/>
          </div>

          <div className=" flex flex-col justify-center h-1/5 lg:h-[60rem] w-full items-center mt-5 p-3 lg:p-10 shadow-xl " id="2">
              <Image className="w-80 h-48 lg:mb-44" src={reactJS} alt={""} width={208} height={208}></Image>
              <p className=" font-medium mt-4 p-2 lg:text-xl lg:p-16 ">O React é uma poderosa biblioteca para construção de interfaces visuais em JavaScript.
                 Ou seja, é uma ferramenta ideal para o desenvolvimento front-end. No React, você pode adotar estruturas do HTML e do JavaScript em um só código, a fim de manipular os aspectos da apresentação de um site.
                  Como se trata de uma biblioteca, é um conjunto de códigos prontos e funções específicas para lidar com determinados problemas. 
                  Para quem trabalha com front-end (parte visual) ou é full-stack, esse recurso quebra um galho. 
                  Inicialmente, a tecnologia foi desenvolvida como uma forma de o Facebook lidar com o problema de sincronização dos componentes em sua página. 
                 Afinal, uma aplicação como a página inicial do Facebook contém vários elementos abertos ao mesmo tempo que precisam ser sincronizados: o chat, um menu com ícones principais, a timeline, entre outros.
                 </p>
          </div>

          <div className=" flex flex-col justify-center h-1/5 lg:h-[60rem] w-full mt-5 p-3 lg:p-10 items-center shadow-xl " id="3">
              <Image className="w-80 h-48 lg:mb-44"  src={tailwind} alt={""} width={208} height={208}></Image>
              <p className="font-medium mt-4 p-2 lg:text-xl lg:p-16 ">
                     O Tailwind CSS, segundo o próprio site da web é um "framework CSS visando a utilidade", que fornece várias dessas classes utilitárias, opinativas e de propósito único, que você pode usar diretamente dentro de sua marcação de texto para projetar um elemento.
                     Algumas das classes utilitárias que uso frequentemente hoje em dia são:
                     <br />
                     <br />
                    flex: usado para aplicar o Flexbox a uma div
                    <br />
                    <br />
                    items-center: para aplicar as propriedades do CSS  align-items: center; a uma div
                    <br />
                    <br />
                    rounded-full: para fazer uma imagem circular, e assim por diante.
                    <br />
                    <br />
                 </p>
          </div>

          <div className=" flex flex-col justify-center h-1/5 lg:h-[60rem] w-full mt-5 p-3  lg:p-10 items-center shadow-xl " id="4">
            <Image className="w-80 h-48 lg:mb-44"  src={next} alt={""} width={208} height={208}></Image>
            <p className="font-medium mt-4 p-2  lg:text-xl lg:p-16">
                A programação web tem evoluído constantemente, e cada vez mais surgem novas ferramentas e tecnologias para facilitar o desenvolvimento de aplicações. 
                Entre essas ferramentas, os frameworks têm se destacado como uma forma de acelerar o processo de criação de projetos e oferecer recursos adicionais. 
            </p>
          </div>

          <div className=" flex flex-col justify-center h-1/5 lg:h-[60rem] w-full mt-5 p-3 lg:p-10 items-center shadow-xl" id="5">
          <Image className="w-80 h-48 lg:mb-44"  src={jquery} alt={""} width={208} height={208}></Image>
          <p className=" font-medium mt-4 p-4 mb-3 lg:text-xl lg:p-16 ">
            jQuery é uma biblioteca JavaScript criada por John Resig em 2006. É como um software de código aberto: seu uso é licenciado pelo Massachusetts Institute of Technology (MIT) e pelo GNU General Public License (GPL).
            Sua principal finalidade é associar-se aos elementos JavaScript em HTMLpara conferir mais dinamismo e usabilidade às páginas na internet.
            Suas linhas de código simplificam os scripts interpretados pelo navegador do client-side e por esse motivo é uma das bibliotecas mais populares na comunidade de desenvolvedores.
          </p>
          </div>
        </div>

    </>
  );
}
