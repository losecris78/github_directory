import styles from './Perfil.module.css';
import RepoList from '../RepoList';

const Linkedin = ({nomeUsuario})=>{

return (
    <header className={styles.header}>
        <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} alt="" />
        <h1 className={styles.name}>{nomeUsuario}</h1>
    </header>
)
}
export default Linkedin;