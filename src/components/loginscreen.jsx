import GoogleButton from 'react-google-button'

function Loginscreen () {
  return (
    <div className='flex items-center justify-center h-screen w-screen bg-gray-100'>
      <div className=''>
        <div className='bg-white shadow-md p-4 center rounded'>
          <div>
            <form class=''>
              <div className='mb-3 text-center'>
                Task Manager
              </div>
              <div class='mb-4'>
                <GoogleButton
                  className=''
                  onClick={() => { console.log('Google button clicked') }}
                />
              </div>

              <div class='mb-4'>
                <input class='text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='username' type='text' placeholder='Username' />
              </div>
              <div class='mb-2'>
                <input class='text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' id='password' type='password' placeholder='Password' />
              </div>
              <div class='items-center justify-between mb-4'>
                <button class='text-sm w-full bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='button'>
                  Sign In
                </button>
              </div>
            </form>
          </div>

        </div>
        <div className='flex justify-between mt-4 text-sm'>
          <a class='inline-block align-baseline text-blue-500 hover:text-blue-800' href='#'>
            Sign up
          </a>
          <a class='inline-block align-baseline text-blue-500 hover:text-blue-800' href='#'>
            Forgot Password?
          </a>
        </div>

      </div>
    </div>
  )
}

export default Loginscreen
