import {useRef} from "react";
import Input from "./Input.jsx";
import Button from "./Button.jsx";

export default function CreateNewProject({selectProject, setProjects, cancelCreateProject, modalRef}) {
  const title = useRef('');
  const description = useRef('');
  const due_date = useRef('');

  function saveProject() {
    setProjects((prevProjects) => {
      const projectId = Date.now();
      const titleValue = title.current.value;
      const descriptionValue = description.current.value;
      const due_dateValue = due_date.current.value;

      if(titleValue.trim() === '' || descriptionValue.trim() === '' || due_dateValue.trim() === '' || due_dateValue.trim() === '') {
        modalRef.current.open();
        return prevProjects;
      }

      selectProject(projectId);

      return [
        ...prevProjects,
        {id: projectId, title: titleValue, description: descriptionValue, due_date: due_dateValue, index: prevProjects.length, tasks: []}
      ];
    });
  }

  return (
    <section className="ml-72 p-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-3xl font-bold mb-4">Create New Project</h3>
        <div className="flex space-x-8">
          <button onClick={cancelCreateProject}>
            Cancel
          </button>
          <Button onClick={saveProject}>
            Save Project
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <Input
          label="Title"
          type="text"
          ref={title}
          placeholder="Enter project title" />
        <Input
          label="Description"
          ref={description}
          placeholder="Enter project description"
          textarea/>
        <Input
          label="Due Date"
          ref={due_date}
          placeholder="Enter project due date"
          type="date"/>
      </div>
    </section>
  )
}