import React from 'react'
import HeaderItem from '../../../components/HeaderItem';
import logo from './../../../images/logo.png';
import
{
    ChartPieIcon,
    ChatAlt2Icon,
    HomeIcon,
    CogIcon,
    UserIcon,
    LogoutIcon
} from '@heroicons/react/outline';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

/*--------------------------------------------------- 
    Simple header with navigation and functionality
-----------------------------------------------------*/
function Header ()
{
    const { user, logOut } = useAuth();

    return (
        <header className='sticky top-0 z-50 flex flex-col sm:flex-row items-center justify-around bg-gray-800 py-1 shadow-lg'>
            <div className='hover:animate-pulse cursor-pointer m-5 lg:m-1'>
                <a href="/">
                    <img src={logo} alt='b4b biz club logo' width={80} height={80} />
                </a>
            </div>
            <div className='flex flex-grow justify-center max-w-2xl'>
                <NavLink to={'/home'}>
                    <HeaderItem title='HOME' Icon={HomeIcon} />
                </NavLink>
                <NavLink to={'/rules'}>
                    <HeaderItem title='RULES' Icon={CogIcon} />
                </NavLink>
                <NavLink to={'/dashboard'}>
                    <HeaderItem title='DASHBOARD' Icon={ChartPieIcon} />
                </NavLink>
                <NavLink to={'/contact'}>
                    <HeaderItem title='CONTACT' Icon={ChatAlt2Icon} />
                </NavLink>
            </div>
            <div className='hover:text-white cursor-pointer my-2'>
                {
                    user.email ?
                        <div className='flex flex-col lg:flex-row items-center justify-center'>
                            <h1 className='text-xl font-thin mb-2 lg:mr-5'>{user.displayName}</h1>
                            <button onClick={logOut} className='flex items-center text-lg text-black bg-white rounded-md hover:bg-gray-600 hover:text-white active:bg-blue-500 shadow-md px-2 py-1'>
                                <LogoutIcon className='h-7 w-7 mr-1' />
                                LogOut
                            </button>
                        </div>
                        :
                        <NavLink to={'/login'} className={'flex items-center justify-between'}>
                            <UserIcon className='h-7 mr-2' />
                            <p>Member Login</p>
                        </NavLink>
                }
            </div>
        </header>
    )
}

export default Header
