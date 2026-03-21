import { useState } from 'react';
import { FileAudio, Type, Layers, Upload, CheckCircle, X, Play , Mic } from 'lucide-react';
import { Input } from '../../../components/ui/input';
import {Select,SelectTrigger,SelectItem,SelectContent, SelectLabel, SelectGroup,SelectValue} from "../../../components/ui/select"

export default function VoiceEditForm() {
  const [formData, setFormData] = useState({
    title: '',
    audioType: '',
    audioFile: null,
  });

  const [audioFileName, setAudioFileName] = useState('');
  const [audioPreviewUrl, setAudioPreviewUrl] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const audioTypes = [
    'Narration',
    'Cartoon',
    'Movie Dubbing',
    'Podcast',
    'Advertisement',
  ];

  // Handle text input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  // Handle audio file upload
  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      const validAudioTypes = ['audio/mpeg', 'audio/wav', 'audio/mp3', 'audio/ogg'];
      if (!validAudioTypes.includes(file.type)) {
        setErrors({
          ...errors,
          audioFile: 'Please upload a valid audio file (MP3, WAV, OGG)',
        });
        return;
      }

      setFormData({
        ...formData,
        audioFile: file,
      });
      setAudioFileName(file.name);
      
      // Create preview URL for audio player
      const url = URL.createObjectURL(file);
      setAudioPreviewUrl(url);
      
      // Clear error
      setErrors({
        ...errors,
        audioFile: undefined,
      });
    }
  };

  // Remove uploaded file
  const handleRemoveFile = () => {
    setFormData({
      ...formData,
      audioFile: null,
    });
    setAudioFileName('');
    setAudioPreviewUrl(null);
    
    // Clear the file input
    const fileInput = document.getElementById('audioFile');
    if (fileInput) {
      fileInput.value = '';
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }

    if (!formData.audioType) {
      newErrors.audioType = 'Please select an audio type';
    }

    if (!formData.audioFile) {
      newErrors.audioFile = 'Please upload an audio file';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Check if form is valid for submit button
  const isFormValid = () => {
    return formData.title.trim() && formData.audioType && formData.audioFile;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form submitted successfully:', {
        title: formData.title,
        audioType: formData.audioType,
        audioFile: formData.audioFile,
        fileName: audioFileName,
      });
      
      setIsSubmitted(true);
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };

  // Handle form reset
  const handleReset = () => {
    setFormData({
      title: '',
      audioType: '',
      audioFile: null,
    });
    setAudioFileName('');
    setAudioPreviewUrl(null);
    setErrors({});
    setIsSubmitted(false);
    
    // Clear the file input
    const fileInput = document.getElementById('audioFile');
    if (fileInput) {
      fileInput.value = '';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 rounded-full shadow-lg">
              <FileAudio className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Upload Audio Project
          </h1>
          <p className="text-gray-600">
            Share your audio content with the world
          </p>
        </div>

        {/* Success Message */}
        {isSubmitted && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3 shadow-sm">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
            <p className="text-green-700 font-medium">
              Audio project uploaded successfully! 🎉
            </p>
          </div>
        )}

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title Field */}
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Project Title <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Type className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  id="title"
                  name="title"
                  type="text"
                  value={formData.title}
                  onChange={handleInputChange}
                  className={` ${
                    errors.title ? 'border-red-500' : 'border-gray-300'
                  } `}
                  placeholder="Enter project title"
                />
              </div>
              {errors.title && (
                <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                  <X className="w-4 h-4" />
                  {errors.title}
                </p>
              )}
            </div>

            {/* Type of Audio Field */}
            <div>
              <label
                htmlFor="audioType"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Type of Audio <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Layers className="h-5 w-5 text-gray-400" />
                </div>
                {/* <select
                  id="audioType"
                  name="audioType"
                  value={formData.audioType}
                  onChange={handleInputChange}
                  className={`block w-full pl-10 pr-10 py-3 border ${
                    errors.audioType ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 bg-white appearance-none cursor-pointer`}
                >
                  <option value="">Select audio type</option>
                  {audioTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select> */}
                {/* Custom select */}
                <div>
                  <Select id="audioType"
                  name="audioType"
                  onChange={handleInputChange}
                  className={`${
                    errors.audioType ? 'border-red-500' : 'border-gray-300'
                  }`}
                    >
                           <SelectTrigger>
                                 <div className='flex'>
                                    
                                  <Mic className="h-5 w-5 text-gray-400" />
                  
                                  <SelectValue placeholder="Select Audio type" />
                                 </div>
                           </SelectTrigger>
                           <SelectContent>
                                  <SelectGroup>
                                     <SelectLabel>--Choose--</SelectLabel>
                                    {audioTypes.map((type) => (
                                      <SelectItem key={type} value={type}>
                                        {type}
                                      </SelectItem>
                                    ))} 
                                  </SelectGroup>
                                
                           </SelectContent>
                       </Select>
                </div>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              {errors.audioType && (
                <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                  <X className="w-4 h-4" />
                  {errors.audioType}
                </p>
              )}
            </div>

            {/* Audio File Upload */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Audio File <span className="text-red-500">*</span>
              </label>
              
              {/* Upload Area */}
              <div
                className={`border-2 border-dashed ${
                  errors.audioFile ? 'border-red-500' : 'border-gray-300'
                } rounded-lg p-6 text-center hover:border-indigo-400 transition-all duration-200 ${
                  !audioFileName ? 'bg-gray-50' : 'bg-indigo-50'
                }`}
              >
                <input
                  id="audioFile"
                  type="file"
                  accept="audio/*,.mp3,.wav,.ogg"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                
                {!audioFileName ? (
                  <label
                    htmlFor="audioFile"
                    className="cursor-pointer flex flex-col items-center"
                  >
                    <div className="bg-indigo-100 p-4 rounded-full mb-3">
                      <Upload className="w-8 h-8 text-indigo-600" />
                    </div>
                    <p className="text-sm font-medium text-gray-700 mb-1">
                      Click to upload audio file
                    </p>
                    <p className="text-xs text-gray-500">
                      MP3, WAV, OGG (Max 50MB)
                    </p>
                  </label>
                ) : (
                  <div className="space-y-3">
                    <div className="flex items-center justify-center gap-2">
                      <Play className="w-5 h-5 text-indigo-600" />
                      <p className="text-sm font-medium text-gray-900">
                        {audioFileName}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={handleRemoveFile}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-red-100 text-red-700 rounded-lg text-sm font-medium hover:bg-red-200 transition-colors duration-200"
                    >
                      <X className="w-4 h-4" />
                      Remove File
                    </button>
                  </div>
                )}
              </div>
              
              {errors.audioFile && (
                <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                  <X className="w-4 h-4" />
                  {errors.audioFile}
                </p>
              )}

              {/* Audio Preview Player */}
              {audioPreviewUrl && (
                <div className="mt-4 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border border-indigo-200">
                  <p className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <Play className="w-4 h-4 text-indigo-600" />
                    Audio Preview
                  </p>
                  <audio
                    controls
                    src={audioPreviewUrl}
                    className="w-full"
                    style={{ height: '40px' }}
                  >
                    Your browser does not support the audio element.
                  </audio>
                </div>
              )}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                type="submit"
                disabled={!isFormValid()}
                className={`flex-1 py-3 px-6 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform transition-all duration-200 shadow-lg ${
                  isFormValid()
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 hover:scale-[1.02] hover:shadow-xl'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Submit Project
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-200"
              >
                Reset Form
              </button>
            </div>
          </form>
        </div>

        {/* Info Footer */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Fields marked with <span className="text-red-500">*</span> are required
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Supported formats: MP3, WAV, OGG
          </p>
        </div>
      </div>
    </div>
  );
}
