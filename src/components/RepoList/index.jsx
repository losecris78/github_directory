import { useEffect, useState } from "react";
import styles from './RepoList.module.css'



const RepoList =({nomeUsuario})=>{
    const [repos,setRepos]= useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);
    useEffect(() => {
        fetch (`http://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => res.json())
        .then(resJson => {
            console.log(resJson)
            setTimeout(() => {
            setEstaCarregando(false);
            setRepos(resJson)
            },3000)
        })
    },[nomeUsuario]);



    return (
        <div className="container">
        {estaCarregando  ? (
        <h1>Carregando...</h1>
        ) : (
        <ul className={styles.list}>
            {repos.map(repositorio => (
                
                <li className={styles.listItem} key={repositorio.id}>
                    <div className={styles.itemName}>
                    <b>Nome: </b>{repositorio.name}
                    </div>
                    <div className={styles.itemLanguage}>
                    <b>Language: </b>{repositorio.language}
                    </div>
                    <a target="_blank" className={styles.itemLink} href={repositorio.html_url}>Visitar no Github</a> 
                </li>
            ))}
        </ul>)}
</div>    
)

}
export default RepoList;