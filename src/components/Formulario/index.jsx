import { useState } from "react"
import { useEffect } from "react";

const Formulario = () =>{
    let [materiaA, setMateriaA] = useState();
    let[materiaB, setMateriaB] = useState();
    let [materiaC, setMateriaC] = useState();
    let [nome,setNome] =useState('');

    
    
    useEffect (()=>{
        console.log('O estado mudou');
    },[materiaA,materiaB,nome]);

    useEffect (()=>{
        console.log('materia A mudou para ' + materiaA);
    }, [materiaA]);

    useEffect (()=>{
        console.log('O componente iniciou');
        return ()=>{
            console.log('O componente finalizou')
        }
    });

    const changeName = (evento) =>{
        setNome (evento.target.value)}

    const renderizaResultado = ()=>{
        const suma = materiaA + materiaB + materiaC;
        const media = suma / 3;
        if ( media >= 7){
            return (
                <p>Olá {nome} , voce aprovou</p>
            )
        } else {
            return ( 
                <p>
                    Olá {nome}, voce nao aprovou.
                </p>
            )
        }
    }
    return(
<>
        <form>
            <input type="text"  placeholder="Seu Nome" onChange = {changeName} />
            <input type="number" placeholder="Nota materia A" onChange = {evento =>setMateriaA(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota materia B" onChange = {({target}) => setMateriaB(parseInt(target.value))} />
            <input type="number" placeholder="Nota materia C" onChange = {evento => setMateriaC(parseInt(evento.target.value))} />

            {renderizaResultado()}
            
            

        </form>
        <ul>
        {['Chopin','Bach','Stravinsky'].map(item=><li key={item}>{item}</li>)}
        </ul>
</>
    )
}
export default Formulario;