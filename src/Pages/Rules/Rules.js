import React, { useState } from 'react'
import RulesItem from '../../components/RulesItem'
import b4b from '../../images/login.png';

function Rules ()
{
    const [image, setImage] = useState(b4b)
    const handleRules = (num) =>
    {
        console.log(num)
    }

    return (
        <div>
            <section className='border-2 w-fit h-fit mx-auto my-5 p-5 rounded-lg wow animate__animated animate__fadeInDown'>
                <img src={image} alt="b4b" />
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
