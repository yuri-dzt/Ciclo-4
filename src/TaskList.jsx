import { AiFillExclamationCircle, AiOutlineFileText } from "react-icons/ai";
import './TaskList.css';

// eslint-disable-next-line react/prop-types
function TaskList({ tasks }) {
  
  const priorityLabels = {
    low: 'Baixa',
    medium: 'Média',
    high: 'Alta'
  };

  return (
    <table className="task-table">
      <thead>
        <tr>
          <th>
            <AiOutlineFileText className="header-icon" /> Tarefa
          </th>
          <th>
            <AiFillExclamationCircle className="header-icon" /> Prioridade
          </th>
        </tr>
      </thead>
      <tbody>
        {
          // eslint-disable-next-line react/prop-types
          tasks.map((task, index) => (
            <tr key={index}>
            <td className={`task-cell`}>{task.task}</td>
            <td>
              <span className={`priority-dot priority-${task.priority}`}>
                {priorityLabels[task.priority]}
              </span>
            </td>
          </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default TaskList