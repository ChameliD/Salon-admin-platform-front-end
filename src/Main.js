import {React,useEffect} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {FiSettings} from 'react-icons/fi'
import {TooltipComponent} from '@syncfusion/ej2-react-popups'
import './App.css'
import{Navbar,Footer,SideBar} from './components'
import{Calendar,Client,Dashboard,Resevation,Pie,Bar,Hairstylist} from './pages'
import{useStateContext} from './contexts/ContextProvider'
import CreateClient from './pages/CreateClient'
import CreateResevation from './pages/CreateResevation'
import SendEmail from './components/SentMail'


const Main=()=>{
    const {activeMenu}=useStateContext();
    return(
        <div>
           <BrowserRouter>
            <div className='flex relative dark:bg-main-dark-bg'>
                <div className='fixed right-4 bottom-4' style={{zIndex:'1000'}}>
                    <TooltipComponent content="Settings" position ="Top">
                        <button type='button' className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' 
                        style={{background:'blue',borderRadius:'50%'}}>
                            <FiSettings/>
                        </button>
                    </TooltipComponent>
                </div>
                {activeMenu?(
                    <div className='w-72 fixed sidebar
                    dark:bg-secondary-dark-bg
                    bg-white'>
                        <SideBar/>
                    </div>
                ):(
                    <div className='w-0 
                    dark:bg-secondary-dark-bg'>
                        SideBar
                    </div>
                )}
                <div className={
                    `dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72':
                    'flex-2' }`
                }>
                    <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                        <Navbar/>
                    </div>
                
                <div>
                <Routes>					
					{/*Dashboard */}
					<Route path='/dashboard' element={<Dashboard/>}/>

					{/*Pages*/}
					<Route path='/client' element={<Client/>}/>
					<Route path='/reservation' element={<Resevation/>}/>
					<Route path='/hairstylist' element={<Hairstylist/>}/>
                    <Route path='/create-client' element={<CreateClient/>}/>
                    <Route path='/create-reservation' element={<CreateResevation/>}/>

					{/*Apps*/}
					<Route path='/calendar' element={<Calendar/>}/>
                    <Route path='/sendMail' element={<SendEmail/>}/>

					{/*Charts*/}
					<Route path='/pie' element={<Pie/>}/>
					<Route path='/bar' element={<Bar/>}/>

				</Routes>
                </div>
            </div>
            </div>

           
                </BrowserRouter>

        </div>
    )
}

export default Main
