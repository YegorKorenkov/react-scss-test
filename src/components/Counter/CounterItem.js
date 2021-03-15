import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const CounterItem = ({ num, id }) => {

    // const [counter, setCounter] = React.useState(0);

    // React.useEffect(() => {
    //     const timeout = setInterval(() => {
    //         if (counter <= num) setCounter(counter + 1);
    //     }, 2000 / num);
    
    //     return () => {
    //       clearInterval(timeout);
    //     };
    //   }, [counter]);

    return (
        
        <div className="counter__item">
            <div className="counter__text">
                <h3>
                    {/* <span className={'counter counter--' + id}>{counter}</span> */}
                    <CountUp 
                        start={0}
                        end={num}
                        duration={2}
                        useEasing={false}
                        redraw={true}
                    >
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp>
                    <span className="plus">+</span>
                </h3>
                <p>Students enrolled</p>
            </div>
        </div>
    );
};

export default CounterItem;