function RulesItem ({ num, handleRules })
{
    return (
        <div>
            <button onClick={() => handleRules(num)} className='bg-gray-500 w-9 h-9 rounded-full cursor-pointer hover:bg-gray-400 hover:text-white text-xl shadow mr-2'>{num}</button>
        </div>
    )
}

export default RulesItem
