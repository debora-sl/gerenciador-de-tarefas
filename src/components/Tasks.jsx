import { ChevronRightIcon, Trash2 } from "lucide-react";

function Tasks({tasks, onTaskClick, onDeleteTaskClick}) {
  
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-m shadow">

      {/* Para cada elemento da lista tarefas, renderiza o li */}
      {tasks.map((task) =>(
        <li key={task.id} className="flex gap-2">
          <button 
            onClick={() => onTaskClick(task.id)} 
            className={`bg-slate-400 text-left w-full text-white p-2 rounded-md ${task.isCompleted && "line-through"}`}>
            {task.title}
          </button>

          {/* Ver Detalhes */}
          <button className="bg-slate-400 p-2 rounded-md text-white">
            <ChevronRightIcon />
          </button>

          {/* Deletar */}
          <button onClick={() => onDeleteTaskClick(task.id)} className="bg-slate-400 p-2 rounded-md text-white">
            <Trash2 />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
