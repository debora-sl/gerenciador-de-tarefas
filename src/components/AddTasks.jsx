import { useState } from "react";

function AddTasks({onAddTaskSubmit}) {
  // Criando os States de titulo e descrição da tarefa
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">

      <input type="text" placeholder="Digite o título da tarefa" className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md" value={title} onChange={(event) => setTitle(event.target.value)}/>

      <input type="text" placeholder="Digite a descrição da tarefa" className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md" value={description} onChange={(event) => setDescription(event.target.value)}/>      
      
      <button onClick={() => {
        // Checa se a tarefa está preenchida, trim tira o espeço em branco
        if(!title.trim() || !description.trim()){
          return alert("Preencha o título e a descrição da tarefa.");
        }

        onAddTaskSubmit(title, description);
        setTitle("");
        setDescription("");
        console.log("Tarefa: " + title, description);
        
      }

      } className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium">Adicionar</button>

    </div>

  )
}

export default AddTasks;
