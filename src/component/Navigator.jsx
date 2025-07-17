import logo from '../assets/logo.png'

const Navigator = () => {
     return(
          <nav className="w-full bg-[#C07F00] flex items-center gap-3 px-3 py-2 absolute top-0">
               <img src={logo} alt="logo" className='w-20'/>
               <p className='text-gray-900 font-semibold'>BlockChain Talking</p>
          </nav>
     )
}

export default Navigator