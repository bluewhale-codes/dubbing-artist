import { Calendar, DollarSign, FileText, Globe, Send, Eye } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../../components/ui/card";
import { Button } from "../../../components/ui/Button";
import { Badge } from "../../../components/ui/badge";
import { useNavigate } from "react-router";
export default function ProjectCard({ project, onSendProposal }) {

  const navigate = useNavigate();
  const viewDetails = ()=> {
       console.log("hello world")
       navigate(`/detail/${project._id}`)
  }

  return (
    <Card  className="hover:shadow-lg  transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between gap-2 mb-2">
          <CardTitle className="text-lg">{project.title}</CardTitle>
          {/* <Badge variant={project.licenseType === "Broadcast" ? "default" : "secondary"} className={project.licenseType === "Broadcast" ? "bg-purple-600" : ""}>
            {project.licenseType}
          </Badge> */}
        </div>
        <p className="text-sm text-gray-600 line-clamp-2">{project.projectDescription}</p>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Globe className="w-4 h-4" />
          <span>{project.language}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <FileText className="w-4 h-4" />
          {/* <span>{project.wordCount} words</span> */}
        <span>45 words</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <DollarSign className="w-4 h-4 text-green-600" />
          <span className="font-semibold text-green-600">Budget: ${project.budget.max}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Calendar className="w-4 h-4" />
          <span>Deadline: {new Date(project.deadlineDate).toLocaleDateString()}</span>
        </div>
        <div className="pt-2 border-t border-gray-200">
          <div className="text-xs text-gray-500 space-y-1">
            {/* <div>Usage: <span className="font-medium text-gray-700">{project.usage}</span></div> */}
            <div>Usage:{project.usage.map((item)=>(
               (<span key={item} className="font-medium text-gray-700">{item},</span>)
            ))}</div>
            <div>Region: <span className="font-medium text-gray-700">{project.region}</span></div>
            <div>Duration: <span className="font-medium text-gray-700">{project.usageDuration.value}</span></div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        <Button onClick={viewDetails} variant="outline" className="cursor-pointer flex-1" size="sm">
          <Eye className="w-4 h-4 mr-2" />
           View Details
        </Button>

        <Button onClick={onSendProposal}  className="flex-1 bg-purple-600 hover:bg-purple-700" size="sm">
          <Send className="w-4 h-4 mr-2" />
          Send Proposal
        </Button>
      </CardFooter>
    </Card>
  );
}
