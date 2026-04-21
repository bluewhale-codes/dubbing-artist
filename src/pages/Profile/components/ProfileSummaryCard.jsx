import { Star, MapPin, Globe, Briefcase, CheckCircle2, MessageCircle, Sparkles, SquarePen } from "lucide-react";
import { useState } from "react";
import { Card } from "../../../components/ui/card";
import { Button } from "../../../components/ui/Button";
import ProfileSummaryForm from "../Forms/ProfileSummaryForm";
import FormDialog from "../Forms/FormDialog";

export function ProfileSummaryCard({
  profileImage,
  name,
  dubbingLanguages,
  location,
  experience,
  languages,
  rating,
  reviewCount,
  projectsCompleted,
}) {

   const [open,setOpen] = useState(false);

   const FormToggle = ()=>{
        setOpen(!open);
   }


  return (
    <Card className="p-6 shadow-lg rounded-2xl border border-gray-100">
      {/* Profile Image */}
      <div className="flex justify-center">
        {/* <Avatar className="w-32 h-32 border-4 border-white shadow-md">
          <AvatarImage src={profileImage} alt={name} />
          <AvatarFallback className="text-2xl">
            {name.split(" ").map((n) => n[0]).join("")}
          </AvatarFallback>
        </Avatar> */}
         <div className="relative">
              <img
                src={profileImage}
                alt="Profile"
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-white shadow-xl object-cover"
              />
              <div onClick={FormToggle} className="absolute -bottom-2 -right-2 cursor-pointer w-8 h-8 rounded-full border-4 border-white"><SquarePen/></div>
              {open && <FormDialog Comp={ProfileSummaryForm} onClose={()=>FormToggle()}/>}
            </div>
      </div>

      {/* Artist Name */}
      <h3 className="text-center text-1xl font-bold">{name}</h3>

      {/* Rating */}
      <div className="flex items-center justify-center gap-2">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(rating)
                  ? "fill-amber-400 text-amber-400"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <span className="font-semibold">{rating.toFixed(1)}</span>
        <span className="text-gray-500 text-sm">
          ({reviewCount} reviews)
        </span>
      </div>

      {/* Info Items */}
      <div className="space-y-4 mb-6">
        {/* Dubbing Languages */}
        <div className="flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
          <div>
            <div className="text-sm text-gray-500 mb-1">Dubbing Languages</div>
            <div className="font-medium">
              {dubbingLanguages && dubbingLanguages.length > 0
                ? dubbingLanguages.join(", ")
                : "Not Provided"}
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
          <div>
            <div className="text-sm text-gray-500 mb-1">Location</div>
            <div className="font-medium">{location 
                ? location
                : "Not Provided"}</div>
          </div>
        </div>

        {/* Experience */}
        <div className="flex items-start gap-3">
          <Briefcase className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
          <div>
            <div className="text-sm text-gray-500 mb-1">Experience</div>
            <div className="font-medium">{experience 
                ? experience + "years"
                : "Not Provided"} </div>
          </div>
        </div>

        {/* Languages Known */}
        <div className="flex items-start gap-3">
          <Globe className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
          <div>
            <div className="text-sm text-gray-500 mb-1">Languages Known</div>
            <div className="font-medium">{languages.join(", ")}</div>
          </div>
        </div>

        {/* Projects Completed */}
        <div className="flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
          <div>
            <div className="text-sm text-gray-500 mb-1">Projects Completed</div>
            <div className="font-medium">
              {projectsCompleted} projects
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <Button  asChild={true} className="cursor-pointer w-full bg-purple-600 hover:bg-purple-700 text-white rounded-lg py-6 shadow-md hover:shadow-lg transition-all">
           <a href="/proposal">My Proposals</a>
        </Button>
        <Button
          variant="outline"
          className="cursor-pointer w-full border-2 border-purple-600 text-purple-600 hover:bg-purple-50 rounded-lg py-6 transition-all"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
            Completed Projects
        </Button>
      </div>
    </Card>
  );
}