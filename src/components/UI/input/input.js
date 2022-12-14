import React from 'react'
import Classes from './input.module.css'
const input = props => {
    let inputElement = '';
    let cssClasses = [Classes.InputElement]

    if (props.valid && props.shouldValid && props.touched) {
        cssClasses.push(Classes.Invalid);

    }
    const SelctedOptionStyle = {
        fontWeight: '',
        color:'',
        font:'',
    }
    const getStyleToSelctedOption = (index) => {
        if (props.value === props.elementConfig.options[index].value && props.value !== '') {
            SelctedOptionStyle.fontWeight = 'bold'
        }
    }
    switch (props.elementType) {
        case ('input'): {


            inputElement = <input
                style={props.style}
                className={cssClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
            break;
        }
        case ('textarea'): {
            inputElement = <textarea
                style={props.style}
                className={cssClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
            break;
        }
        case ('select'): {

            inputElement = (
                <select
                    style={SelctedOptionStyle}
                    // style={props.style}
                    className={Classes.InputElement}
                    value={props.value}
                    onChange={props.changed} >
                    {props.elementConfig.options.map((data, index) => (
                        getStyleToSelctedOption(index),
                        <option key={data.value} value={data.value}>
                            {data.displayValue}
                        </option>
                    ))}
                </select>)
            break;
        }
        default: {
            inputElement = <input
                style={props.style}
                className={cssClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
        }
    }
    let icon = ''
    switch (props.icon) {
        case 'username':
            icon = (
                <svg className={Classes.Icon} width="25" height="25" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.375 16.9167C19.5525 16.9167 23.75 18.8102 23.75 21.1459V24.1667H5V21.1459C5 18.8102 9.1975 16.9167 14.375 16.9167ZM22.5 21.1459C22.5 19.4784 18.8625 18.1251 14.375 18.1251C9.8875 18.1251 6.25 19.4784 6.25 21.1459V22.9584H22.5V21.1459ZM14.375 6.04175C15.5353 6.04175 16.6481 6.48732 17.4686 7.28044C18.2891 8.07357 18.75 9.14927 18.75 10.2709C18.75 11.3926 18.2891 12.4683 17.4686 13.2614C16.6481 14.0545 15.5353 14.5001 14.375 14.5001C13.2147 14.5001 12.1019 14.0545 11.2814 13.2614C10.4609 12.4683 10 11.3926 10 10.2709C10 9.14927 10.4609 8.07357 11.2814 7.28044C12.1019 6.48732 13.2147 6.04175 14.375 6.04175ZM14.375 7.25008C13.5462 7.25008 12.7513 7.56835 12.1653 8.13486C11.5792 8.70138 11.25 9.46974 11.25 10.2709C11.25 11.0721 11.5792 11.8405 12.1653 12.407C12.7513 12.9735 13.5462 13.2917 14.375 13.2917C15.2038 13.2917 15.9987 12.9735 16.5847 12.407C17.1708 11.8405 17.5 11.0721 17.5 10.2709C17.5 9.46974 17.1708 8.70138 16.5847 8.13486C15.9987 7.56835 15.2038 7.25008 14.375 7.25008Z" fill="#C4C4C4" />
                </svg>

            )
            break;
        case 'password':
            icon = (
                <svg className={Classes.Icon} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.6667 8.33325C17.4956 8.33325 18.2904 8.66249 18.8765 9.24854C19.4625 9.83459 19.7917 10.6295 19.7917 11.4583V19.7916C19.7917 20.6204 19.4625 21.4152 18.8765 22.0013C18.2904 22.5873 17.4956 22.9166 16.6667 22.9166H7.29175C6.46295 22.9166 5.66809 22.5873 5.08204 22.0013C4.49599 21.4152 4.16675 20.6204 4.16675 19.7916V11.4583C4.16675 10.6295 4.49599 9.83459 5.08204 9.24854C5.66809 8.66249 6.46295 8.33325 7.29175 8.33325V6.77075C7.29175 5.52755 7.78561 4.33527 8.66469 3.45619C9.54376 2.57711 10.736 2.08325 11.9792 2.08325C13.2225 2.08325 14.4147 2.57711 15.2938 3.45619C16.1729 4.33527 16.6667 5.52755 16.6667 6.77075V8.33325ZM7.29175 9.37492C6.73921 9.37492 6.20931 9.59441 5.81861 9.98511C5.42791 10.3758 5.20841 10.9057 5.20841 11.4583V19.7916C5.20841 20.3441 5.42791 20.874 5.81861 21.2647C6.20931 21.6554 6.73921 21.8749 7.29175 21.8749H16.6667C17.2193 21.8749 17.7492 21.6554 18.1399 21.2647C18.5306 20.874 18.7501 20.3441 18.7501 19.7916V11.4583C18.7501 10.9057 18.5306 10.3758 18.1399 9.98511C17.7492 9.59441 17.2193 9.37492 16.6667 9.37492H7.29175ZM15.6251 8.33325V6.77075C15.6251 5.80382 15.241 4.87649 14.5572 4.19276C13.8735 3.50903 12.9462 3.12492 11.9792 3.12492C11.0123 3.12492 10.085 3.50903 9.40126 4.19276C8.71753 4.87649 8.33342 5.80382 8.33342 6.77075V8.33325H15.6251ZM11.9792 14.5833C11.5648 14.5833 11.1674 14.7479 10.8744 15.0409C10.5814 15.3339 10.4167 15.7314 10.4167 16.1458C10.4167 16.5602 10.5814 16.9576 10.8744 17.2506C11.1674 17.5436 11.5648 17.7083 11.9792 17.7083C12.3936 17.7083 12.7911 17.5436 13.0841 17.2506C13.3771 16.9576 13.5417 16.5602 13.5417 16.1458C13.5417 15.7314 13.3771 15.3339 13.0841 15.0409C12.7911 14.7479 12.3936 14.5833 11.9792 14.5833ZM11.9792 13.5416C12.6699 13.5416 13.3323 13.816 13.8207 14.3043C14.309 14.7927 14.5834 15.4551 14.5834 16.1458C14.5834 16.8364 14.309 17.4988 13.8207 17.9872C13.3323 18.4756 12.6699 18.7499 11.9792 18.7499C11.2886 18.7499 10.6262 18.4756 10.1378 17.9872C9.64945 17.4988 9.37508 16.8364 9.37508 16.1458C9.37508 15.4551 9.64945 14.7927 10.1378 14.3043C10.6262 13.816 11.2886 13.5416 11.9792 13.5416Z" fill="#C4C4C4" />
                </svg>
            )
            break;
        case 'role':
            icon = (
                <svg className={Classes.Icon} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.9375 14.5833C15.2521 14.5833 18.75 16.2155 18.75 18.2291V20.8333H3.125V18.2291C3.125 16.2155 6.62292 14.5833 10.9375 14.5833ZM17.7083 18.2291C17.7083 16.7916 14.6771 15.6249 10.9375 15.6249C7.19792 15.6249 4.16667 16.7916 4.16667 18.2291V19.7916H17.7083V18.2291ZM10.9375 5.20825C11.9044 5.20825 12.8318 5.59237 13.5155 6.27609C14.1992 6.95982 14.5833 7.88715 14.5833 8.85409C14.5833 9.82102 14.1992 10.7484 13.5155 11.4321C12.8318 12.1158 11.9044 12.4999 10.9375 12.4999C9.97056 12.4999 9.04323 12.1158 8.35951 11.4321C7.67578 10.7484 7.29167 9.82102 7.29167 8.85409C7.29167 7.88715 7.67578 6.95982 8.35951 6.27609C9.04323 5.59237 9.97056 5.20825 10.9375 5.20825ZM10.9375 6.24992C10.2468 6.24992 9.58445 6.52429 9.09608 7.01266C8.6077 7.50104 8.33333 8.16342 8.33333 8.85409C8.33333 9.54475 8.6077 10.2071 9.09608 10.6955C9.58445 11.1839 10.2468 11.4583 10.9375 11.4583C11.6282 11.4583 12.2905 11.1839 12.7789 10.6955C13.2673 10.2071 13.5417 9.54475 13.5417 8.85409C13.5417 8.16342 13.2673 7.50104 12.7789 7.01266C12.2905 6.52429 11.6282 6.24992 10.9375 6.24992ZM20.8333 16.6666V15.6249H21.875V16.6666H20.8333ZM20.8333 13.5416V7.29159H21.875V13.5416H20.8333Z" fill="#C4C4C4" />
                </svg>

            )

    }
    return (
        <div className={Classes.Input}>
            {inputElement}
            {icon}
        </div>
    )
}
export default input