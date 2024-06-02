import { useEffect, useState } from "react"
import './NumPad.scss'
interface Props {
    onSubmit: (value: number) => void
    onValueChanged: (value: number | undefined) => void
}
const NumPad = (props: Props) => {
    const {onSubmit, onValueChanged} = props
    const [value, setValue] = useState(undefined as number | undefined)

    const clickDigit = (digit: number) => {
        setValue((value || 0) * 10 + digit)
    }

    const clear = () => {
        setValue(undefined)
    }

    useEffect(() => {
        onValueChanged(value)
    }, [value, onValueChanged])

    const submit = () => {
        clear()
        onSubmit(value || 0)
    }

    return <div id='numpad'>
        <div className='keyboard'>
            { [1,2,3,4,5,6,7,8,9,0].map((digit) => 
                <div className='key' key={digit} onClick={() => clickDigit(digit)}>{ digit }</div>

            )}
            <div className='key red' onClick={clear}>Effacer</div>
            <div className='key green' onClick={submit}>OK</div>
      </div>
    </div>
}
export default NumPad