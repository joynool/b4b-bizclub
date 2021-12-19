function RulesItem ({ num, handleRules })
{
    return (
        <div>
            <button onClick={() => handleRules(num)} className='bg-gray-500 lg:w-9 lg:h-9 w-6 h-6 rounded-full cursor-pointer hover:bg-gray-400 hover:text-white lg:text-xl shadow mr-2'>{num}</button>
        </div>
    )
}

export default RulesItem
