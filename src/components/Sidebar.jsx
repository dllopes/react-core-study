import Button from './Button';

export default function Sidebar({projects, showCreateProject, selectProject, selectedProjectId}) {
  return <aside className="w-64 h-screen bg-blue-500 p-6 text-white fixed shadow-lg">
    <h2 className="text-2xl font-semibold mb-6">Your Projects</h2>
    <Button onClick={showCreateProject}>
      + Add Project
    </Button>
    <ul className="space-y-1 py-5">
      {projects.map((project) => (
        <li key={project.id}>
          <button onClick={() => selectProject(project.id)} className={`relative ${project.id === selectedProjectId ? 'bg-blue-400' : ''} pl-6 hover:bg-blue-300 px-4 rounded w-full text-left`}>
            {project.title}
            <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5 bg-blue-800 rounded-full"></span>
          </button>
        </li>
      ))}
    </ul>
  </aside>
}