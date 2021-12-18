import React from 'react'
import HeaderItem from '../../../components/HeaderItem';
import logo from './../../../images/logo.png';
import
{
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
} from '@heroicons/react/outline';

function Header ()
{
    return (
        <header className='sticky top-0 z-50 flex flex-col sm:flex-row items-center justify-around bg-gray-800 py-1 shadow-lg'>
            <div className='hover:animate-pulse cursor-pointer m-5 lg:m-1'>
                <img src={logo} alt='b4b biz club logo' width={80} height={80} />
            </div>
            <div className='flex flex-grow justify-center max-w-2xl'>
                <HeaderItem title='HOME' Icon={HomeIcon} />
                <HeaderItem title='TRENDING' Icon={LightningBoltIcon} />
                <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon} />
                <HeaderItem title='COLLECTIONS' Icon={CollectionIcon} />
                <HeaderItem title='SEARCH' Icon={SearchIcon} />
            </div>
            <div className='flex items-center justify-between hover:text-white cursor-pointer my-4'>
                <UserIcon className='h-7 mr-2' />
                <p>Member Login</p>
            </div>
        </header>
    )
}

export default Header
