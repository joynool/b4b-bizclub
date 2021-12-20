import React from 'react'
import { ResponsiveContainer, PieChart, Pie } from 'recharts';
import AnnualItem from '../../../components/AnnualItem';

/*--------------------------------------------------- 
            Implement Annual Statement using rechart
-----------------------------------------------------*/
const data = [
    { name: 'Group A', value: 120 },
    { name: 'Group B', value: 180 },
    { name: 'Group C', value: 200 },
    { name: 'Group D', value: 150 },
    { name: 'Group E', value: 100 },
    { name: 'Group F', value: 50 },
    { name: 'Group G', value: 150 },
    { name: 'Group H', value: 50 },
];

function Annual ()
{
    return (
        <div className='flex flex-col items-center border-2 rounded-lg py-5'>
            <div className='text-lg font-extralight'>
                <ul>
                    <AnnualItem name='Roman' deposit='200' />
                    <AnnualItem name='Bulbul' deposit='150' />
                    <AnnualItem name='Mitul' deposit='100' />
                    <AnnualItem name='Taposh' deposit='50' />
                </ul>
            </div>
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie dataKey="value" data={data} fill="#8884d8" label />
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className='text-lg font-extralight'>
                <ul>
                    <AnnualItem name='Shohel' deposit='180' />
                    <AnnualItem name='Shimul' deposit='120' />
                    <AnnualItem name='Mithoon' deposit='50' />
                    <AnnualItem name='Rupok' deposit='150' />
                </ul>
            </div>
        </div>
    )
}

export default Annual
