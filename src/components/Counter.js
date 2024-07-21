import React, {useState} from 'react'

function Counter() {
    let [count, setCount] = useState(0);
    const handleClick = () => {
        const newValue = count + 1;
        setCount(newValue);
    };

    return (<div className='w-100 container d-flex justify-content-center align-items-center'>
        <div className='row'>
            <div className="col-12">
                <p className='h1 fw-bold text-center text-white'>
                    Giá trị {count}
                </p>
            </div>
            <div className="col-12">
                <button type='button' className='btn btn-success' onClick={handleClick}>Tăng</button>
            </div>
        </div>
    </div>);
}

export default Counter
