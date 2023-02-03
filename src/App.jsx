
import Controller from './components/controller'
import Loginscreen from './components/loginscreen'
import Palette from './components/palette'

function App () {
  return (
    <div>
      <div className='flex items-center justify-center h-screen w-screen bg-lime-200'>
        {/* This is /main route */}
        <Controller />
      </div>
      <div>
        {/* This is /login route */}
        <Loginscreen />
      </div>
      <div>
        {/* Settings bubble? */}
        <Palette />
      </div>
    </div>
  )
}

export default App
