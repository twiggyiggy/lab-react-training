import React from 'react'

export default function NumbersTable(props) {

    const sequence = []
    for (let i = 1; i <= props.limit; i++) {
        sequence.push(i);
    }

    function getBoxClasses (number) {
        if (number % 2 === 0) {
            return "number-box red-box";
        }
        return "number-box";
    }

    const numbersTable = sequence.map((number, index) => 
        <article className={getBoxClasses(number)} key = {index}>
            <p>{number}</p>
        </article>
    );

    return (
        <section className="numbers-table">
            {numbersTable}
        </section>
    )
}