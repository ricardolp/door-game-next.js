import PortaModel from '@/model/porta';
import styles from '../styles/Porta.module.css'
import Presente from './Presente';



export default function Porta(props) {
    const porta = props.value

    const selecionada = porta.selecionada && !porta.aberta ? styles.selecionada : '';

    const alternarSelecao = e => props.onChange(porta.alterarSelecao())
    const abrir = e => {
        e.stopPropagation()
        props.onChange(porta.abrir())
    }

    function render() {
        return (
            <div className={styles.porta}>
                <div className={styles.numero}>{porta.numero}</div>
                <div className={styles.macaneta} onClick={abrir}></div>
            </div> 
        )
    }

    return (
        <div className={styles.area} onClick={alternarSelecao}>
            <div className={`${styles.estrutura} ${selecionada}`}>
                {!porta.aberta ? render() : porta.temPresente ? <Presente />: false}
            </div>
            <div className={styles.chao}></div>
        </div>
    )
}