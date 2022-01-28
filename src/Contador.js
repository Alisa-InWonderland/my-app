import React, { useState } from 'react';

function Contador() {
    const [count, setCount] = useState(0);

    return (
            <>
                <h1>Contador</h1>
                <h2>{count}</h2>
                <button
                    onClick={() => {
                        setCount(count + 1);
                    }}
                >
                    Incrementar
                </button>
            </>
    )

}

export default Contador;