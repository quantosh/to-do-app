import React from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from '../components/topbar'
import Sidebar from '../components/sidebar'

const style = {
  mainContainer: 'text-black backdrop-blur-sm bg-white/40 border border-white/40 rounded-xl flex rounded shadow-xl w-full h-full',
  topContainer: 'mb-1 float-right w-full mr-4',
  sideContainer: 'block text-sm max-w-[240px]',
  appContainer: '',
  contentContainer: 'block w-full'
}

const Home = () => {
  return (
    <>
      <div className={style.mainContainer}>
        <div className={style.sideContainer}>
          <Sidebar />
        </div>
        <div className={style.contentContainer}>
          <div className={style.topContainer}>
            <Topbar />
          </div>
          <div className={style.appContainer}>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
