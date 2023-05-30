import PortaModel from "@/model/porta"

export function criarPortas(qtd, selecionada) {
    return Array.from({ length: qtd}, (_, i) => {
        const numero = i + 1
        const temPresente = numero === selecionada
        return new PortaModel(numero, temPresente)
    })
}

export function atualizaPortas(portas, portaModificada) {
    return portas.map(portaAtual => {
        const modif = portaAtual.numero === portaModificada.numero
        if (modif) {
            return portaModificada
        }

        return portaModificada.aberta ? portaAtual : portaAtual.desmarcar()
    })
}