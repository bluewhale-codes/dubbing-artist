import { Heart, Play, Award , Pause, Volume2, VolumeX } from "lucide-react";
import { useState,useRef } from "react";
import { RatingStars } from "./RatingStars.jsx";
import cardVedio from "../../../components/vedio/intro.mp4"
export function ServiceCard({ service }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const videoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Play on hover
  const handleMouseEnter = () => {
    console.log("mouse Enter");
    videoRef.current.play();
    setIsPlaying(true);
  };

  // Pause when leaving
  const handleMouseLeave = () => {
    console.log("Mouse leave");
    videoRef.current.pause();
    setIsPlaying(false);
  };

  // Toggle play/pause
  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Toggle mute
  const toggleMute = () => {
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <div  className="group bg-white rounded-xl border border-gray-200 overflow-hidden cursor-pointer">
      
      {/* Thumbnail */}
      <div onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} className="h-[160px] rounded-xl border border-gray-200 relative aspect-video overflow-hidden bg-gray-100">
        {/* <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        /> */}
        <div className="relative cursor-pointer" >
        <video
          ref={videoRef}
          className="w-full h-[160px] object-contain"
          muted
          loop
        >
          <source src={cardVedio} type="video/mp4" />
        </video>

        {/* Controls */}
        <div className="absolute bottom-3 left-3 flex gap-3">
          
          {/* Play Pause */}
          <button
            onClick={togglePlay}
            className="bg-white/80 backdrop-blur p-2 rounded-full"
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
          </button>

          {/* Sound */}
          <button
            onClick={toggleMute}
            className="bg-white/80 backdrop-blur p-2 rounded-full"
          >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>

        </div>
      </div>

       {/* Play Icon Overlay */}
        {/* <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
            <Play className="w-7 h-7 text-purple-600 ml-1" />
          </div>
        </div> */}

        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorite(!isFavorite);
          }}
          className="absolute top-3 right-3 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all shadow-md"
        >
          <Heart
            className={`w-5 h-5 transition-colors ${
              isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"
            }`}
          />
        </button>
      </div>

      {/* Card Content */}
      <div className="p-4">

        {/* Seller Info */}
        <div className="flex items-center gap-2 mb-3">
          <img
            src={service.seller.avatar}
            alt={service.seller.name}
            className="w-8 h-8 rounded-full object-cover border-2 border-gray-200"
          />

          <div className="flex items-center gap-2 flex-1 min-w-0">
            <span className="text-sm font-semibold text-gray-900 truncate">
              {service.seller.name}
            </span>

            {service.seller.isPro && (
              <div className="flex-shrink-0 flex items-center gap-1 px-2 py-0.5 bg-purple-100 text-purple-700 rounded text-xs font-semibold">
                <Award className="w-3 h-3" />
                PRO
              </div>
            )}
          </div>
        </div>

        {/* Seller Level */}
        <div className="mb-3">
          <span className="text-xs text-gray-600 font-medium">
            {service.seller.level}
          </span>
        </div>

        {/* Service Title */}
        <h3 className="text-sm font-medium text-gray-900 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors">
          {service.title}
        </h3>

        {/* Rating */}
        <div className="mb-4">
          <RatingStars
            rating={service.rating}
            reviewCount={service.reviewCount}
          />
        </div>

        {/* Price */}
        <div className="pt-4 border-t border-gray-100">
          <div className="flex items-baseline gap-2">
            <span className="text-xs text-gray-600">From</span>

            <span className="text-lg font-bold text-gray-900">
              {service.currency}
              {service.startingPrice.toLocaleString()}
            </span>

            <span className="text-xs text-gray-500">/ 150 words</span>
          </div>
        </div>
      </div>
    </div>
  );
}