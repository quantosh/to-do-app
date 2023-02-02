const style = {
  container: 'flex items-center justify-between flex-wrap bg-slate-100 p-2 rounded-md shadow-xl'
}

function Topbar () {
  return (
    <div>
      <nav className={style.container}>
        <div class='flex items-center flex-shrink-0 text-black mr-6'>
          <p class='font-semibold text-xl mr-2 ml-1'>📓</p>
          <span class='font-semibold text-xl tracking-tight'>Task Manager</span>
        </div>
        <div class='block lg:hidden'>
          <button class='flex items-center px-3 py-2 border rounded text-black hover:text-white hover:border-white'>
            <svg class='fill-current h-3 w-3' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><title>Menu</title><path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' /></svg>
          </button>
        </div>
        <div class='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
          <div class='text-sm lg:flex-grow'>
            <a href='#responsive-header' class='block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4'>
              Important
            </a>
            <a href='#responsive-header' class='block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4'>
              Planned
            </a>
            <a href='#responsive-header' class='block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white'>
              Tasks
            </a>
          </div>
          <div>
            <a href='#' class='inline-block text-sm px-4 py-2 leading-none border rounded text-black border-white hover:border-transparent hover:text-white hover:bg-black mt-4 lg:mt-0 mr-1'>Login</a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Topbar
