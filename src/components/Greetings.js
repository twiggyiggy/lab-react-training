import React from 'react'

function Greetings(props) {


    function chooseGreeting (lang) {
        if (lang === 'de') {
            return "Hallo, "
        } else if (lang === 'fr') {
            return "Bonjour, "
        } else {
            return "Hello, "
        }
    }

    return (
        <div>
            <p>{chooseGreeting(props.lang)}{props.children}</p>
        </div>
    )
}

export default Greetings;