import React, { useCallback, useState } from 'react'
import { BarChart, Bar, Cell } from "recharts";
import useAuth from '../../../hooks/useAuth';

const data = [
    {
        name: "January",
        uv: 2900
    },
    {
        name: "February",
        uv: 2500
    },
    {
        name: "March",
        uv: 2000
    },
    {
        name: "April",
        uv: 2780
    },
    {
        name: "May",
        uv: 1890
    },
    {
        name: "June",
        uv: 2390
    },
    {
        name: "July",
        uv: 2490
    },
    {
        name: "August",
        uv: 1490
    },
    {
        name: "September",
        uv: 2390
    },
    {
        name: "October",
        uv: 1200
    },
    {
        name: "November",
        uv: 2000
    },
    {
        name: "December",
        uv: 3000
    }
];

/*--------------------------------------------------- 
        Implement Individual statement using rechart
-----------------------------------------------------*/
function Individual ()
{
    const [activeIndex, setActiveIndex] = useState(0);
    const activeItem = data[activeIndex];
    const { user } = useAuth();

    const handleClick = useCallback((entry, index) =>
    {
        setActiveIndex(index);
    },
        [setActiveIndex]
    );

    return (
        <div className='flex flex-col items-center justify-center border-2 rounded-lg'>
            <p className='my-5 text-xl text-center'>Click each rectangle to view your Deposit for each Month</p>
            <BarChart width={300} height={400} data={data}>
                <Bar dataKey="uv" onClick={handleClick}>
                    {data.map((entry, index) => (
                        <Cell
                            cursor="pointer"
                            fill={index === activeIndex ? "#82ca9d" : "#8884d8"}
                            key={`cell-${index}`}
                        />
                    ))}
                </Bar>
            </BarChart>
            <p className="content my-3 text-lg">{`Deposit of ${activeItem.name} is ${activeItem.uv} BDT`}</p>
            <p className='text-lg font-light'>Depositor: {user.displayName}</p>
        </div>
    )
}

export default Individual
