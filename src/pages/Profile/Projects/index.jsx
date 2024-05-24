import { Button } from "antd"
import  "../../../assets/Projects.css"
import ProjectsForm from "./ProjectsForm";
import React from "react";

function Projects() {
  const [ showProjectForm, setShowProjectForm] = React.useState(false);
  return (
    <div>
      <div className="flex justify-end">

        <Button type='default' className="custom-button" 
        onClick={() => setShowProjectForm(true)}
        >Ajouter un Projet</Button>
      </div>

      {showProjectForm && <ProjectsForm showProjectForm={showProjectForm} setShowProjectForm={setShowProjectForm}/>}
    </div>
  )
}

export default Projects