import { MouseEventHandler, useEffect, useState } from "react"
import './NumPad.scss'
interface Props {
    reset: number
    onSubmit: (value: number) => void
    onValueChanged: (value: number | undefined) => void
}
const NumPad = (props: Props) => {
    const {onSubmit, onValueChanged, reset} = props
    const [value, setValue] = useState(undefined as number | undefined)

    useEffect(() => {
        clear()
    }, [reset])

    const clickDigit = (digit: number) => {
        setValue((value || 0) * 10 + digit)
    }

    const handleClickOrTouch = (e: any, callback: any) => {
        console.log(typeof(window.ontouchstart))
        if(typeof(window.ontouchstart) != 'undefined' && e.type == 'mousedown') return;
        callback()
    }

    const clear = () => {
        setValue(undefined)
    }

    useEffect(() => {
        onValueChanged(value)
    }, [value, onValueChanged])

    const submit = () => {
        if(value === undefined) return;
        onSubmit(value)
    }


    return <div id='numpad'>
        <div className='keyboard'>
            { [1,2,3,4,5,6,7,8,9,0].map((digit) => 
                <div className='key' key={digit}
                    onMouseDown={(e) => handleClickOrTouch(e, () => clickDigit(digit))}
                    onTouchStart={(e) => handleClickOrTouch(e, () => clickDigit(digit))}
                    >{ digit }</div>
            )}
            <div className='key red'
                onMouseDown={(e) => handleClickOrTouch(e, clear)}
                onTouchStart={(e) => handleClickOrTouch(e, clear)}
                >Effacer</div>
            <div className='key green'
                onMouseDown={(e) => handleClickOrTouch(e, submit)}
                onTouchStart={(e) => handleClickOrTouch(e, submit)}>OK</div>
      </div>
    </div>
}
export default NumPad