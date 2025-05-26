import { useState } from "react";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";

function App() {
  // Criando o State de Tarefas
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programação",
      description: "Ver vídeos no YouTube, ler artigos",
      isCompleted: false
    },
    {
      id: 2,
      title: "Fazer curso FullStack",
      description: "Assistir a aula, fazer os exercicios e postar no GitHub",
      isCompleted: false
    },
    {
      id: 3,
      title: "Ler o livro - Habitos Atomicos",
      description: "Comprar o livro na Amazon ou alguma livraria, ler e fazer um Resumo.",
      isCompleted: false
    },

  ])

  // Função para alterar a tarefa, se foi ou não concluída
  function onTaskClick(taskId){
    const newTasks = tasks.map((task) =>{
      if(task.id == taskId){
        return {...task, isCompleted: !task.isCompleted};
      }

      return task;
    });

    setTasks(newTasks);
  }

  // Função para deletar a tarefa
  function onDeleteTaskClick(taskId){
    const newTasks = tasks.filter((task) => task.id != taskId);
    setTasks(newTasks);
  }

  // Função para adicionar tarefas
  function onAddTaskSubmit({title, description}){
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      isCompleted: false
    };
    setTasks([...tasks, newTask])
  } 

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
      <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de Tarefas</h1>

      {/* Passando a função que adiciona task para o componente.*/}
      <AddTasks onAddTaskSubmit={onAddTaskSubmit}/>

      {/* Passando o state e função de task para o componente.*/}
      <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick}/>

      </div>
    </div>
  );
}

export default App;
