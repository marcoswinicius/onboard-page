import Image from "next/image";

const Header = () => {
  return (
    <div>
    <header className="bg-yellow-500 grid grid-rows-7 grid-flow-col gap-4" >
    <div className="bg-transparent flex flex-row items-center">
    <img src="https://easyb2b.io/wp-content/uploads/2023/05/Logo-EASYB2B-Vetorizada.svg" alt="" />
    </div>
    <div className="bg-red-500 flex flex-row items-center ">
    <nav className="flex justify-center space-x-4">
  <a href="/dashboard" className="font- px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Home</a>
  <a href="/team" className="font- px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Team</a>
  <a href="/projects" className="font- px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Projects</a>
  <a href="/reports" className="font- px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Reports</a>
</nav>
    </div>
    <div className="bg-red-500 flex bg-red-500 flex-row items-center">
    <button>Entrar</button>
    </div> 
    <div className="bg-red-500 flex bg-red-500 flex-row items-center">
    <button>Teste grátis por 14 dias</button>
    </div> 
    <div className="bg-red-500 flex bg-red-500 flex-row items-center">
      <img className="h-6" src="https://easyb2b.io/wp-content/uploads/2023/01/InvestedByGoogle2Negativo.png" alt="" />
    </div> 
    <div className="bg-red-500 flex flex-row items-center">
    <button>pt</button>
    </div>
  </header> 
  </div>
  )
}

export default Header