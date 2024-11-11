import { useState, useRef } from 'react';
import Sidebar from './components/Sidebar';
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import CreateNewProject from "./components/CreateNewProject.jsx";
import SelectedProject from "./components/SelectedProject.jsx";
import Modal from "./components/Modal.jsx";

function App() {
  const startProject = {
    id: Date.now(),
    title: 'Projeto Test 1',
    description: 'Descrição Projeto Teste 1',
    due_date: '2020-05-01',
    tasks: ['Task 1', 'Task 2', 'Task 3', 'Task 4'],
  }

  const newTask = useRef('');
  const modalRef = useRef();

  const [projects, setProjects] = useState([startProject]);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [selectedProjectIsVisible, setSelectedProjectIsVisible] = useState(false);
  const [createNewProjectIsVisible, setCreateNewProjectIsVisible] = useState(false);

  function addTask() {
    const currentValue = newTask.current.value;
    setProjects((prevProjects) => {
      return prevProjects.map((project, index) => {
        if (project.id === selectedProjectId) {
          return {
            ...project,
            tasks: [...project.tasks, currentValue],
          };
        }
        return project;
      });
    });

    newTask.current.value = '';
  }

  function clearTask(taskIndex) {
    setProjects((prevProjects) => {
      return prevProjects.map((project, index) => {
        if (project.id === selectedProjectId) {
          return {
            ...project,
            tasks: project.tasks.filter((_, i) => i !== taskIndex),
          };
        }
        return project;
      });
    });
  }

  function deleteProject() {
    setSelectedProjectIsVisible(false);
    setProjects((prevProjects) => prevProjects.filter((project) => project.id !== selectedProjectId));
    setSelectedProjectId(null);
  }

  function cancelCreateProject() {
    setCreateNewProjectIsVisible(false);
  }

  function selectProject(id) {
    setSelectedProjectId(id);
    setSelectedProjectIsVisible(true);
    setCreateNewProjectIsVisible(false);
  }

  function getSelectedProject() {
    return projects.find((project) => project.id === selectedProjectId);
  }

  function showCreateProject() {
    setCreateNewProjectIsVisible(true);
    setSelectedProjectIsVisible(false);
    setSelectedProjectId(null);
  }

  return (
    <>
      <Modal ref={modalRef} buttonCaption='Exit'>
        <h2 className='text-2xl'>
          All fields need to be filled
        </h2>
        <p>
          One or more fields are blank
        </p>
      </Modal>

      {/* Sidebar */}
      <Sidebar projects={projects} showCreateProject={showCreateProject} selectProject={selectProject}
               selectedProjectId={selectedProjectId}/>

      <main className="p-8">
        {!selectedProjectIsVisible && !createNewProjectIsVisible &&
          <NoProjectSelected showCreateProject={showCreateProject}/>
        }

        {createNewProjectIsVisible &&
          <CreateNewProject selectProject={selectProject} setProjects={setProjects}
                            cancelCreateProject={cancelCreateProject} modalRef={modalRef}/>
        }

        {selectedProjectIsVisible &&
          <SelectedProject deleteProject={deleteProject} getSelectedProject={getSelectedProject} newTask={newTask}
                           addTask={addTask} clearTask={clearTask}/>
        }
      </main>
    </>
  );
}

export default App;