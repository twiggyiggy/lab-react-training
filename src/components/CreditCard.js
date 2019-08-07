import React from 'react'
// import visaLogo from '../../public/img/visa.png'



function CreditCard(props) {

    const divStyle = {backgroundColor: `${props.bgColor}`, color: `${props.color}`}


    function getCreditCardCompanyLogo(type) {
        if (type === 'Visa') {
            return 'img/visa.png';
        } else if (type === 'Master Card') {
            return 'img/master-card.svg';
        } else {
            return 'img/dice6.png';
        }
    }

    function maskify(cc) {
        let ccArr = cc.split('');
        for(let i = 0; i < (ccArr.length-4); i++) {
          ccArr[i] = '•'
        }
        let output = ccArr.join('')
        return output;
      }

    return (
        <div style={divStyle}>
            <div>
                <img src={getCreditCardCompanyLogo(props.type)} width='50px'></img>
            </div>
            <div>
                {maskify(props.number)}
            </div>
            <div>
                <p>Expires: {props.expirationMonth}/{props.expirationYear} {props.bank}</p>
                <p>{props.owner}</p>
            </div>
        </div>
    )
}

export default CreditCard;