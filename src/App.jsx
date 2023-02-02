import Controller from './components/controller'
import Loginscreen from './components/loginscreen'
import Todo from './components/todo'

const style = {
  bg: 'h-screen w-screen p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500',
  panels: 'flex justify-start'
}

function App () {
  return (

    <div className={style.bg}>
      <div>
        <h1>el pepe</h1>
        <div>
          <Loginscreen />
          <Controller />
          <Todo />
        </div>
      </div>
    </div>
  )
}

export default App
