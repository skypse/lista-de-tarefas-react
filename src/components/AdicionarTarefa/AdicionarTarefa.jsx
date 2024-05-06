import React from 'react'

const AdicionarTarefa = () => {
  if (NovaTarefa.trim() !== ''){
    setTarefas([...tarefas, novaTarefa])
    setNovaTarefa('')
  }
}

export default AdicionarTarefa
