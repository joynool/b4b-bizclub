import React, { useEffect, useState } from 'react'
import RulesItem from '../../components/RulesItem'

function Rules ()
{
    const firstRule = { _id: '61bf47ea27b8ef7185520b63', id: 1, url: 'https://i.ibb.co/1btfX6Y/constitution-1.jpg' };

    const [rules, setRules] = useState({});
    const [imgUrl, setImgUrl] = useState(firstRule);

    useEffect(() =>
    {
        fetch('https://stormy-falls-22010.herokuapp.com/rules')
            .then(res => res.json())
            .then(data => setRules(data));
    }, [])

    const handleRules = (num) =>
    {
        console.log(num)
        const clickedRules = rules.find(val => val.id === num);
        setImgUrl(clickedRules);
        console.log(clickedRules)
    }

    /*--------------------------------------------------- 
                Rules and regulation display components
    -----------------------------------------------------*/
    return (
        <div className='w-2/3 mx-auto'>
            <section className='flex items-center justify-center mt-5 wow animate__animated animate__fadeInUp'>
                <RulesItem handleRules={handleRules} num={1} />
                <RulesItem handleRules={handleRules} num={2} />
                <RulesItem handleRules={handleRules} num={3} />
                <RulesItem handleRules={handleRules} num={4} />
                <RulesItem handleRules={handleRules} num={5} />
                <RulesItem handleRules={handleRules} num={6} />
                <RulesItem handleRules={handleRules} num={7} />
                <RulesItem handleRules={handleRules} num={8} />
            </section>
            <section className='border-2 w-fit h-fit mx-auto my-5 lg:p-5 p-2 rounded-lg wow animate__animated animate__fadeInDown'>
                <img src={imgUrl.url} alt="b4b rules" />
            </section>
            <section className='flex items-center justify-center mb-5 wow animate__animated animate__fadeInUp'>
                <RulesItem handleRules={handleRules} num={1} />
                <RulesItem handleRules={handleRules} num={2} />
                <RulesItem handleRules={handleRules} num={3} />
                <RulesItem handleRules={handleRules} num={4} />
                <RulesItem handleRules={handleRules} num={5} />
                <RulesItem handleRules={handleRules} num={6} />
                <RulesItem handleRules={handleRules} num={7} />
                <RulesItem handleRules={handleRules} num={8} />
            </section>
        </div>
    )
}

export default Rules
