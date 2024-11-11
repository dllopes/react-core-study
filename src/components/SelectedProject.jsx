import React from "react";
import Tasks from "./Tasks.jsx";

export default function SelectedProject({deleteProject, getSelectedProject, newTask, addTask, clearTask}) {
  const project = getSelectedProject();
  const formattedDate = new Date(project.due_date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <section className="ml-72 mt-8">
      <div className="p-8 bg-gray-100 rounded shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-semibold">Selected Project</h3>
          <button
            onClick={deleteProject}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
        <div className="space-y-2">
          <p>{project.title}</p>
          <p className="bg-gray-200 p-2 rounded text-sm whitespace-pre-wrap">
            {project.description}
          </p>
          <p>
            <span className="font-medium">Due Date:</span> {formattedDate}
          </p>
        </div>
      </div>

      <Tasks tasks={project.tasks} newTask={newTask} addTask={addTask} clearTask={clearTask}/>
    </section>
  )
}