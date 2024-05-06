import React, { useState } from 'react'
import './ListaDeTarefas.css'

const ListaDeTarefas = () => {
  const [tarefas, setTarefas] = useState([])
  const [novaTarefa, setNovaTarefa] = useState('')
  const [tarefaEditada, setTarefaEditada] = useState({ index: null, valor: '' })

  const adicionarTarefa = () => {
    if (novaTarefa.trim() !== ''){
      setTarefas([...tarefas, novaTarefa])
      setNovaTarefa('')
    }
  }

  const removerTarefa = (index) => {
    const novasTarefas = [...tarefas]
    novasTarefas.splice(index, 1)
    setTarefas(novasTarefas)
  }

  const editarTarefa = (index, valor) => {
    setTarefaEditada({ index, valor })
  }

  const salvarTarefaEditada = (index) => {
    const novasTarefas = [...tarefas]
    novasTarefas[index] = tarefaEditada.valor
    setTarefas(novasTarefas)
    setTarefaEditada({ index: null, valor: '' })
  }

  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <input
        id='input-tarefas'
        type="text"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        placeholder="Adicione uma nova tarefa"
      />
      <button id='button-tarefas' onClick={adicionarTarefa}>Adicionar</button>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>
            {index === tarefaEditada.index ? (
              <>
                <input
                  id='input-editar-tarefas'
                  type="text"
                  value={tarefaEditada.valor}
                  onChange={(e) => setTarefaEditada({ index, valor: e.target.value })}
                />
                <button id='button-tarefas' onClick={() => salvarTarefaEditada(index)}>Salvar</button>
              </>
            ) : (
              <>
                {tarefa}{' '}
                <button id='button-tarefas-editar' onClick={() => editarTarefa(index, tarefa)}>Editar</button>{' '}
                <button id='button-tarefas-remover' onClick={() => removerTarefa(index)}>Remover</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListaDeTarefas
