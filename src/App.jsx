
import Controller from './components/controller'
import Loginscreen from './components/loginscreen'

const style = {
  bg: 'h-screen w-screen p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500',
  panels: 'flex justify-start'
}

function App () {
  return (

    <div className={style.bg}>
      <div>
        <div>
          <Loginscreen />
          <Controller />
        </div>
      </div>
    </div>
  )
}

export default App
