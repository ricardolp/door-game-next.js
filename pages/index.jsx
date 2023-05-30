import Porta from '@/components/Porta'
import Presente from '@/components/Presente'
import { atualizaPortas, criarPortas } from '@/functions/portas';
import PortaModel from '@/model/porta';
import { Inter } from 'next/font/google'
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [p1, setP1] = useState(new PortaModel(1));
  const [portas, setPortas] = useState(criarPortas(3,2))
  
  function render() {
    return portas.map(porta => {
      return <Porta key={porta.numero} value={porta} onChange={novaPorta => setPortas(atualizaPortas(portas, novaPorta))} />
    })
  }


  return (
    <div style={{display: "flex"}}>
      {render()}
    </div>
  )
}
