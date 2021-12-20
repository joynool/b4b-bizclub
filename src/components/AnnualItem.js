import { CheckCircleIcon } from '@heroicons/react/solid'

/*--------------------------------------------------- 
            Annual Reusable Components
-----------------------------------------------------*/
function AnnualItem ({ name, deposit })
{
    return (
        <li className='flex items-center wow animate__animated animate__fadeInDown'>
            <CheckCircleIcon className="h-5 w-5 text-blue-500 mr-2" />
            {`${name} Deposit: ${deposit}K BDT`}
        </li>
    )
}

export default AnnualItem
