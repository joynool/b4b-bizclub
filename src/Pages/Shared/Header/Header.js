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
        <header className='sticky top-0 z-50 flex flex-col sm:flex-row items-center justify-around bg-gray-700 py-1'>
            <div className='hover:animate-pulse cursor-pointer active:animate-ping'>
                <img src={logo} alt='b4b biz club logo' width={80} height={80} />
            </div>
            <div className='flex flex-grow justify-center max-w-2xl'>
                <HeaderItem title='HOME' Icon={HomeIcon} />
                <HeaderItem title='TRENDING' Icon={LightningBoltIcon} />
                <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon} />
                <HeaderItem title='COLLECTIONS' Icon={CollectionIcon} />
                <HeaderItem title='SEARCH' Icon={SearchIcon} />
            </div>
            <div className=''>
                <HeaderItem title='USER' Icon={UserIcon} />
            </div>
        </header>
    )
}

export default Header
