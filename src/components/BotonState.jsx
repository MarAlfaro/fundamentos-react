import { useState } from "react"

const BotonState = () => {

    const [contador, setContador] = useState(0)

    const aumentar = () => {
        setContador(contador + 1);
        console.log("Contador: " + contador)
    }

    return (
        <div className="text-center">
            <button className="btn btn-info" onClick={aumentar} >Contador: {contador}</button>
        </div>
    )
}

export default BotonState;
