export default function Tasks({ tasks, newTask, addTask, clearTask }) {
  return (
    <div className="p-8">
      <h3 className="text-2xl font-semibold mb-4">Tasks</h3>
      <input ref={newTask} type="text" className="p-2 border border-gray-300 rounded mt-1"/>
      <button className="ml-2 mb-8" onClick={addTask}>Add task</button>

      <ul className="space-y-2">
        { !tasks.length && <p className="text-sm text-gray-500">This project does not have tasks yet</p> }
        {tasks.map((task, index) => (
          <li key={task+index} className="flex justify-between items-center bg-gray-100 p-2 rounded-md w-80">
            <span className="truncate">{task}</span>
            <button
              onClick={() => clearTask(index)}
              className="text-red-500 hover:text-red-700 focus:outline-none"
            >
              Clear
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}