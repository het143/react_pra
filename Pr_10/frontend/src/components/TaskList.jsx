function TaskList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) return <p>No tasks yet. Add one above.</p>;

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task._id} className={task.completed ? "completed" : ""}>
          <span onClick={() => onToggle(task)}>{task.title}</span>
          <button onClick={() => onDelete(task._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
