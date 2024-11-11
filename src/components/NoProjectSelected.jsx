import noProjectsImage from "../assets/no-projects.png";

export default function NoProjectSelected({showCreateProject}) {
  return (
    <section
      className="flex flex-col items-center justify-center h-full text-center space-y-4 bg-gray-50 rounded-lg shadow-md p-8">
      <img src={noProjectsImage} alt="No Projects Available" className="w-32 h-32 mb-4"/>
      <h1 className="text-2xl font-semibold text-gray-700">No Project Selected</h1>
      <p className="text-gray-500">Select a project or get started with a new one</p>
      <button onClick={showCreateProject}
              className="bg-gray-900 text-gray-400 px-4 py-2 rounded shadow hover:bg-gray-800">
        Create New Project
      </button>
    </section>
  )
}