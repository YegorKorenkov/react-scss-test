import React from 'react';
import CounterItem from './CounterItem';

const counterValue = [234, 128, 535, 307];

const Counter = () => {


    return (
        <section className="counter-area">
            <div className="container max-width">
                <div className="row">
                    { counterValue.map((count, index) => (
                        <CounterItem key={'counter'+index} num={count} id={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Counter;