import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import ProjectCard from "./components/ProjectCard";
import ProposalModal from "./components/ProposalModal";

import { Filter } from "lucide-react";
import { getAllProjects } from "../../store/actions";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";

export default function JobLists() {


  const dispatch = useDispatch();

  const {projects,loading} = useSelector((state)=>state.profileSlice);
  
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all");
  const navigate = useNavigate();

  // const filteredProjects = projects.filter(p => {
  //   if (filter === "all") return p.status === "open";
  //   if (filter === "broadcast") return p.status === "open" && p.licenseType === "Broadcast";
  //   if (filter === "non-broadcast") return p.status === "open" && p.licenseType === "Non-Broadcast";
  //   return true;
  // });

  useEffect(()=>{
     dispatch(getAllProjects());
  },[dispatch])
  
  if(loading) return <div className="h-[100vh] overflow-hidden"><Loader/></div>
   return (<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Available Projects</h1>
        <p className="text-gray-600 mt-2">Browse voice over opportunities and send proposals</p>
      </div>

      {/* Filters */}
      <div className="mb-6 flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-gray-500" />
          <span className="text-sm font-medium text-gray-700">Filter:</span>
        </div>
        {/* <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Projects</SelectItem>
            <SelectItem value="broadcast">Broadcast Only</SelectItem>
            <SelectItem value="non-broadcast">Non-Broadcast Only</SelectItem>
          </SelectContent>
        </Select> */}
        {/* <div className="ml-auto text-sm text-gray-600">
          {filteredProjects.length} projects found
        </div> */}
      </div>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSendProposal={() => setSelectedProject(project)}
          />
        ))} */}
        {projects?.projects?.map((project) => (
          <ProjectCard
            key={project._id}
            project={project}
            onSendProposal={() => setSelectedProject(project)}
          />
        ))}

      </div>

      {/* {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No projects match your filter criteria</p>
        </div>
      )} */}

      {/* Proposal Modal */}
      {selectedProject && (
        <ProposalModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>)
  
}
