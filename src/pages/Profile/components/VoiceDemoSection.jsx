import { Play, Pause, Volume2, Clock,SquarePen,Plus, Form } from "lucide-react";
import { useState } from "react";
import { Button } from "../../../components/ui/Button";
import FormDialog from "../Forms/FormDialog";
import VoiceEditForm from "../Forms/VoiceEditForm";

const voiceDemos = [
  { id: 1, title: "Commercial Advertisement - Electronics", category: "Commercial", duration: "0:45" },
  { id: 2, title: "Animated Character - Princess Role", category: "Cartoon", duration: "1:20" },
  { id: 3, title: "Documentary Narration - Wildlife", category: "Narration", duration: "2:15" },
  { id: 4, title: "Bollywood Movie Scene - Drama", category: "Movie Dubbing", duration: "1:30" },
  { id: 5, title: "YouTube Tutorial Voiceover", category: "YouTube Voiceover", duration: "3:00" },
  { id: 6, title: "Corporate Training Video", category: "Corporate", duration: "1:45" },
];

export function VoiceDemoSection() {
  const [playingId, setPlayingId] = useState(null);
    const [open,setOpen] = useState(false);

   const FormToggle = ()=>{
        setOpen(!open);
   }


  const togglePlay = (id) => {
    setPlayingId(playingId === id ? null : id);
  };

  const getCategoryColor = (category) => {
    const colors = {
      Commercial: "bg-blue-100 text-blue-700",
      Cartoon: "bg-pink-100 text-pink-700",
      Narration: "bg-green-100 text-green-700",
      "Movie Dubbing": "bg-purple-100 text-purple-700",
      "YouTube Voiceover": "bg-red-100 text-red-700",
      Corporate: "bg-indigo-100 text-indigo-700",
    };
    return colors[category] || "bg-gray-100 text-gray-700";
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <Volume2 className="w-6 h-6 text-purple-600" />
          <h2 className="text-2xl font-bold text-gray-900">Voice Demos</h2>
          <Button
           onClick={()=>FormToggle()}
           variant="outline"
           className="cursor-pointer border-2 border-purple-600 text-purple-600 hover:bg-purple-50 rounded-lg py-3 transition-all"
          >
            <Plus/>
            Add
        </Button>
        {open && <FormDialog Comp={VoiceEditForm} onClose={FormToggle} />}
        </div>

        <p className="text-gray-600 mb-8">
          Listen to voice samples across different categories and styles
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {voiceDemos.map((demo) => (
            <div
              key={demo.id}
              className="group border-2 border-gray-200 rounded-xl p-5 hover:border-purple-600 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h5 className="font-semibold text-gray-900 mb-2">
                    {demo.title}
                  </h5>
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                        demo.category
                      )}`}
                    >
                      {demo.category}
                    </span>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      {demo.duration}
                    </div>
                    <div>
                       <Button
                          variant="outline"
                          className="cursor-pointer border-1 border-purple-600 text-purple-600 hover:bg-purple-50 rounded-lg transition-all"
                          >
                          <SquarePen/>
                            Edit
                        </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Audio Player UI */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => togglePlay(demo.id)}
                  className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  {playingId === demo.id ? (
                    <Pause className="w-5 h-5" />
                  ) : (
                    <Play className="w-5 h-5 ml-0.5" />
                  )}
                </button>

                {/* Waveform Visualization */}
                <div className="flex-1 flex items-center gap-1 h-8">
                  {[...Array(30)].map((_, i) => (
                    <div
                      key={i}
                      className={`flex-1 rounded-full transition-all duration-300 ${
                        playingId === demo.id
                          ? "bg-gradient-to-t from-purple-600 to-blue-600"
                          : "bg-gray-300"
                      }`}
                      style={{
                        height: `${Math.random() * 70 + 30}%`,
                        animation:
                          playingId === demo.id
                            ? `pulse ${Math.random() * 0.5 + 0.5}s ease-in-out infinite`
                            : "none",
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}