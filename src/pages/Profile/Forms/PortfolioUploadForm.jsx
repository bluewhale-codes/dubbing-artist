import { useState } from 'react';
import {
  FileAudio,
  Type,
  Mic,
  Languages,
  Volume2,
  User,
  Star,
  Calendar,
  Image as ImageIcon,
  Upload,
  X,
  CheckCircle,
  Eye,
  EyeOff,
  Play,
  MessageSquare,
} from 'lucide-react';
import { Input } from '../../../components/ui/input';
import { Textarea } from '../../../components/ui/textarea';

export default function PortfolioUploadForm() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    audioFile: null,
    duration: '',
    voiceCategory: '',
    languages: [],
    voiceStyles: [],
    clientName: '',
    isPublic: true,
    rating: '',
    clientFeedback: '',
    completionDate: '',
    thumbnail: null,
  });

  const [languageInput, setLanguageInput] = useState('');
  const [voiceStyleInput, setVoiceStyleInput] = useState('');
  const [audioFileName, setAudioFileName] = useState('');
  const [audioPreviewUrl, setAudioPreviewUrl] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const voiceCategories = [
    'Narration',
    'Cartoon Voice',
    'Movie Dubbing',
    'Audiobook',
    'Podcast',
    'Advertisement',
  ];

  const voiceStyleOptions = [
    'Deep',
    'Soft',
    'Energetic',
    'Emotional',
    'Dramatic',
    'Funny',
    'Kids Voice',
  ];

  const maxDescriptionLength = 500;

  // Handle text input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error for this field
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  // Handle public/private toggle
  const handleTogglePublic = () => {
    setFormData({
      ...formData,
      isPublic: !formData.isPublic,
    });
  };

  // Handle audio file upload
  const handleAudioUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      const validAudioTypes = ['audio/mpeg', 'audio/wav', 'audio/mp3'];
      if (!validAudioTypes.includes(file.type)) {
        setErrors({
          ...errors,
          audioFile: 'Please upload a valid audio file (MP3 or WAV)',
        });
        return;
      }

      setFormData({
        ...formData,
        audioFile: file,
      });
      setAudioFileName(file.name);

      // Create preview URL
      const url = URL.createObjectURL(file);
      setAudioPreviewUrl(url);

      // Get audio duration
      const audio = new Audio(url);
      audio.addEventListener('loadedmetadata', () => {
        const minutes = Math.floor(audio.duration / 60);
        const seconds = Math.floor(audio.duration % 60);
        setFormData((prev) => ({
          ...prev,
          duration: `${minutes}:${seconds.toString().padStart(2, '0')}`,
        }));
      });

      // Clear error
      setErrors({
        ...errors,
        audioFile: undefined,
      });
    }
  };

  // Handle thumbnail upload
  const handleThumbnailUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        setErrors({
          ...errors,
          thumbnail: 'Please upload a valid image file',
        });
        return;
      }

      setFormData({
        ...formData,
        thumbnail: file,
      });

      // Create preview URL
      const url = URL.createObjectURL(file);
      setThumbnailPreview(url);
    }
  };

  // Drag and drop handlers for audio
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const file = e.dataTransfer.files?.[0];
    if (file) {
      // Simulate file input change
      const fakeEvent = {
        target: {
          files: [file],
        },
      };
      handleAudioUpload(fakeEvent);
    }
  };

  // Handle removing audio file
  const handleRemoveAudio = () => {
    setFormData({
      ...formData,
      audioFile: null,
      duration: '',
    });
    setAudioFileName('');
    setAudioPreviewUrl(null);

    const fileInput = document.getElementById('audioFile');
    if (fileInput) {
      fileInput.value = '';
    }
  };

  // Handle removing thumbnail
  const handleRemoveThumbnail = () => {
    setFormData({
      ...formData,
      thumbnail: null,
    });
    setThumbnailPreview(null);

    const fileInput = document.getElementById('thumbnail');
    if (fileInput) {
      fileInput.value = '';
    }
  };

  // Handle adding language tag
  const handleLanguageKeyDown = (e) => {
    if (e.key === 'Enter' && languageInput.trim()) {
      e.preventDefault();
      const trimmedInput = languageInput.trim();

      if (!formData.languages.includes(trimmedInput)) {
        setFormData({
          ...formData,
          languages: [...formData.languages, trimmedInput],
        });
        setLanguageInput('');
        setErrors({
          ...errors,
          languages: undefined,
        });
      }
    }
  };

  // Handle removing language tag
  const removeLanguage = (language) => {
    setFormData({
      ...formData,
      languages: formData.languages.filter((lang) => lang !== language),
    });
  };

  // Handle adding voice style tag
  const handleVoiceStyleClick = (style) => {
    if (!formData.voiceStyles.includes(style)) {
      setFormData({
        ...formData,
        voiceStyles: [...formData.voiceStyles, style],
      });
    } else {
      // Remove if already selected
      setFormData({
        ...formData,
        voiceStyles: formData.voiceStyles.filter((s) => s !== style),
      });
    }
  };

  // Handle custom voice style input
  const handleVoiceStyleKeyDown = (e) => {
    if (e.key === 'Enter' && voiceStyleInput.trim()) {
      e.preventDefault();
      const trimmedInput = voiceStyleInput.trim();

      if (!formData.voiceStyles.includes(trimmedInput)) {
        setFormData({
          ...formData,
          voiceStyles: [...formData.voiceStyles, trimmedInput],
        });
        setVoiceStyleInput('');
      }
    }
  };

  // Handle removing voice style tag
  const removeVoiceStyle = (style) => {
    setFormData({
      ...formData,
      voiceStyles: formData.voiceStyles.filter((s) => s !== style),
    });
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }

    if (!formData.audioFile) {
      newErrors.audioFile = 'Audio file is required';
    }

    if (!formData.voiceCategory) {
      newErrors.voiceCategory = 'Please select a voice category';
    }

    if (formData.languages.length === 0) {
      newErrors.languages = 'Please add at least one language';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Check if form is valid
  const isFormValid = () => {
    return (
      formData.title.trim() &&
      formData.description.trim() &&
      formData.audioFile &&
      formData.voiceCategory &&
      formData.languages.length > 0
    );
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Portfolio submitted successfully:', formData);
      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };

  // Handle form reset
  const handleReset = () => {
    setFormData({
      title: '',
      description: '',
      audioFile: null,
      duration: '',
      voiceCategory: '',
      languages: [],
      voiceStyles: [],
      clientName: '',
      isPublic: true,
      rating: '',
      clientFeedback: '',
      completionDate: '',
      thumbnail: null,
    });
    setLanguageInput('');
    setVoiceStyleInput('');
    setAudioFileName('');
    setAudioPreviewUrl(null);
    setThumbnailPreview(null);
    setErrors({});
    setIsSubmitted(false);

    // Clear file inputs
    ['audioFile', 'thumbnail'].forEach((id) => {
      const input = document.getElementById(id);
      if (input) input.value = '';
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 p-4 rounded-2xl shadow-xl">
              <Mic className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-3">
            Portfolio Upload
          </h1>
          <p className="text-lg text-gray-600">
            Showcase your dubbing artistry and attract clients
          </p>
        </div>

        {/* Success Message */}
        {isSubmitted && (
          <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-xl flex items-center gap-3 shadow-md animate-fade-in">
            <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
            <p className="text-green-700 font-semibold">
              Portfolio uploaded successfully! Your work is now live. 🎉
            </p>
          </div>
        )}

        {/* Form Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Section 1: Basic Project Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-3 border-b-2 border-violet-100">
                <div className="bg-violet-100 p-2 rounded-lg">
                  <Type className="w-5 h-5 text-violet-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">
                  Basic Project Information
                </h2>
              </div>

              {/* Title */}
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
                  <input
                    id="title"
                    name="title"
                    type="text"
                    value={formData.title}
                    onChange={handleInputChange}
                    className={`block w-full pl-10 pr-3 py-3 border ${
                      errors.title ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all duration-200`}
                    placeholder="e.g. Hindi Ad Voiceover for FMCG Brand"
                  />
                  <Input
                    id="title"
                    type="text"
                    className={`block w-full pl-10 pr-3 py-3 border ${
                      errors.title ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all duration-200`}
                    placeholder="e.g. Hindi Ad Voiceover for FMCG Brand"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                {errors.title && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                    <X className="w-4 h-4" />
                    {errors.title}
                  </p>
                )}
              </div>

              {/* Description */}
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows="4"
                  maxLength={maxDescriptionLength}
                  className={`block w-full px-3 py-3 border ${
                    errors.description ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all duration-200 resize-none`}
                  placeholder="Describe your voice type (deep, energetic, emotional, etc.) and project details..."
                />
                 <Textarea
                    id="description"
                    rows={5}
                    type=""
                    name="description"
                    className={`block w-full px-3 py-3 border ${
                    errors.description ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all duration-200 resize-none`}
                    placeholder="Describe your voice type (deep, energetic, emotional, etc.) and project details..."
                    value={formData.description}
                    onChange={handleInputChange}
                    
                  />
                <div className="flex justify-between mt-1">
                  <div>
                    {errors.description && (
                      <p className="text-sm text-red-600 flex items-center gap-1">
                        <X className="w-4 h-4" />
                        {errors.description}
                      </p>
                    )}
                  </div>
                  <p className="text-xs text-gray-500">
                    {formData.description.length}/{maxDescriptionLength}
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: Audio Sample */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-3 border-b-2 border-violet-100">
                <div className="bg-violet-100 p-2 rounded-lg">
                  <FileAudio className="w-5 h-5 text-violet-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">
                  Audio Sample
                </h2>
              </div>

              {/* Audio File Upload with Drag & Drop */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Audio File <span className="text-red-500">*</span>
                </label>

                <div
                  onDragEnter={handleDragEnter}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`border-2 border-dashed ${
                    isDragging
                      ? 'border-violet-500 bg-violet-50'
                      : errors.audioFile
                      ? 'border-red-500'
                      : 'border-gray-300'
                  } rounded-lg p-6 text-center hover:border-violet-400 transition-all duration-200 ${
                    !audioFileName ? 'bg-gray-50' : 'bg-violet-50'
                  }`}
                >
                  <input
                    id="audioFile"
                    type="file"
                    accept="audio/*,.mp3,.wav"
                    onChange={handleAudioUpload}
                    className="hidden"
                  />

                  {!audioFileName ? (
                    <label
                      htmlFor="audioFile"
                      className="cursor-pointer flex flex-col items-center"
                    >
                      <div className="bg-violet-100 p-4 rounded-full mb-3 hover:bg-violet-200 transition-colors">
                        <Upload className="w-10 h-10 text-violet-600" />
                      </div>
                      <p className="text-sm font-semibold text-gray-700 mb-1">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">
                        MP3 or WAV (Max 50MB)
                      </p>
                    </label>
                  ) : (
                    <div className="space-y-3">
                      <div className="flex items-center justify-center gap-2">
                        <Play className="w-5 h-5 text-violet-600" />
                        <p className="text-sm font-semibold text-gray-900">
                          {audioFileName}
                        </p>
                        {formData.duration && (
                          <span className="text-xs text-gray-500 bg-violet-100 px-2 py-1 rounded">
                            {formData.duration}
                          </span>
                        )}
                      </div>
                      <button
                        type="button"
                        onClick={handleRemoveAudio}
                        className="inline-flex items-center gap-1 px-4 py-2 bg-red-100 text-red-700 rounded-lg text-sm font-medium hover:bg-red-200 transition-colors duration-200"
                      >
                        <X className="w-4 h-4" />
                        Remove Audio
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

                {/* Audio Preview */}
                {audioPreviewUrl && (
                  <div className="mt-4 p-4 bg-gradient-to-r from-violet-50 to-fuchsia-50 rounded-xl border-2 border-violet-200">
                    <p className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <Play className="w-4 h-4 text-violet-600" />
                      Audio Preview
                    </p>
                    <audio
                      controls
                      src={audioPreviewUrl}
                      className="w-full"
                      style={{ height: '45px' }}
                    >
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                )}
              </div>
            </div>

            {/* Section 3: Voice Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-3 border-b-2 border-violet-100">
                <div className="bg-violet-100 p-2 rounded-lg">
                  <Volume2 className="w-5 h-5 text-violet-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">
                  Voice Details
                </h2>
              </div>

              {/* Voice Category */}
              <div>
                <label
                  htmlFor="voiceCategory"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Voice Category <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mic className="h-5 w-5 text-gray-400" />
                  </div>
                  <select
                    id="voiceCategory"
                    name="voiceCategory"
                    value={formData.voiceCategory}
                    onChange={handleInputChange}
                    className={`block w-full pl-10 pr-10 py-3 border ${
                      errors.voiceCategory ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all duration-200 bg-white appearance-none cursor-pointer`}
                  >
                    <option value="">Select voice category</option>
                    {voiceCategories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
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
                {errors.voiceCategory && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                    <X className="w-4 h-4" />
                    {errors.voiceCategory}
                  </p>
                )}
              </div>

              {/* Languages */}
              <div>
                <label
                  htmlFor="languages"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Language Used <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Languages className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="languages"
                    type="text"
                    value={languageInput}
                    onChange={(e) => setLanguageInput(e.target.value)}
                    onKeyDown={handleLanguageKeyDown}
                    className={`block w-full pl-10 pr-3 py-3 border ${
                      errors.languages ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all duration-200`}
                    placeholder="Type a language and press Enter"
                  />
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Press Enter to add languages
                </p>
                {errors.languages && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                    <X className="w-4 h-4" />
                    {errors.languages}
                  </p>
                )}

                {/* Language Tags */}
                {formData.languages.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {formData.languages.map((language) => (
                      <span
                        key={language}
                        className="inline-flex items-center gap-1 px-3 py-2 bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 rounded-full text-sm font-semibold hover:from-violet-200 hover:to-purple-200 transition-all duration-200 shadow-sm"
                      >
                        {language}
                        <button
                          type="button"
                          onClick={() => removeLanguage(language)}
                          className="ml-1 hover:text-violet-900 transition-colors duration-200"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Voice Style / Tone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Voice Style / Tone
                </label>

                {/* Predefined Options */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {voiceStyleOptions.map((style) => (
                    <button
                      key={style}
                      type="button"
                      onClick={() => handleVoiceStyleClick(style)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                        formData.voiceStyles.includes(style)
                          ? 'bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {style}
                      {formData.voiceStyles.includes(style) && (
                        <CheckCircle className="inline-block w-4 h-4 ml-1" />
                      )}
                    </button>
                  ))}
                </div>

                {/* Custom Input */}
                <div className="relative">
                  <input
                    type="text"
                    value={voiceStyleInput}
                    onChange={(e) => setVoiceStyleInput(e.target.value)}
                    onKeyDown={handleVoiceStyleKeyDown}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all duration-200 text-sm"
                    placeholder="Or type custom style and press Enter"
                  />
                </div>

                {/* Selected Voice Styles */}
                {formData.voiceStyles.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {formData.voiceStyles.map((style) => (
                      <span
                        key={style}
                        className="inline-flex items-center gap-1 px-3 py-2 bg-gradient-to-r from-fuchsia-100 to-pink-100 text-fuchsia-700 rounded-full text-sm font-semibold hover:from-fuchsia-200 hover:to-pink-200 transition-all duration-200 shadow-sm"
                      >
                        {style}
                        <button
                          type="button"
                          onClick={() => removeVoiceStyle(style)}
                          className="ml-1 hover:text-fuchsia-900 transition-colors duration-200"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Section 4: Client Information */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-3 border-b-2 border-violet-100">
                <div className="bg-violet-100 p-2 rounded-lg">
                  <User className="w-5 h-5 text-violet-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">
                  Client Information
                </h2>
              </div>

              {/* Client Name with Public/Private Toggle */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label
                    htmlFor="clientName"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Client / Brand Name (Optional)
                  </label>
                  <button
                    type="button"
                    onClick={handleTogglePublic}
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                      formData.isPublic
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {formData.isPublic ? (
                      <>
                        <Eye className="w-3 h-3" />
                        Public
                      </>
                    ) : (
                      <>
                        <EyeOff className="w-3 h-3" />
                        Private
                      </>
                    )}
                  </button>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="clientName"
                    name="clientName"
                    type="text"
                    value={formData.clientName}
                    onChange={handleInputChange}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all duration-200"
                    placeholder="e.g. Coca-Cola, Netflix"
                  />
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  {formData.isPublic
                    ? 'Visible on your profile'
                    : 'Hidden from public view'}
                </p>
              </div>
            </div>

            {/* Section 5: Project Highlights */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-3 border-b-2 border-violet-100">
                <div className="bg-violet-100 p-2 rounded-lg">
                  <Star className="w-5 h-5 text-violet-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">
                  Project Highlights
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Rating */}
                <div>
                  <label
                    htmlFor="rating"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Rating (1-5)
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    </div>
                    <input
                      id="rating"
                      name="rating"
                      type="number"
                      min="1"
                      max="5"
                      step="0.1"
                      value={formData.rating}
                      onChange={handleInputChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all duration-200"
                      placeholder="e.g. 4.5"
                    />
                  </div>
                </div>

                {/* Completion Date */}
                <div>
                  <label
                    htmlFor="completionDate"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Completion Date
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="completionDate"
                      name="completionDate"
                      type="date"
                      value={formData.completionDate}
                      onChange={handleInputChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all duration-200"
                    />
                  </div>
                </div>
              </div>

              {/* Client Feedback */}
              <div>
                <label
                  htmlFor="clientFeedback"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Client Feedback (Optional)
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <MessageSquare className="h-5 w-5 text-gray-400" />
                  </div>
                  <textarea
                    id="clientFeedback"
                    name="clientFeedback"
                    value={formData.clientFeedback}
                    onChange={handleInputChange}
                    rows="3"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all duration-200 resize-none"
                    placeholder="Share what the client said about your work..."
                  />
                </div>
              </div>
            </div>

            {/* Section 6: Thumbnail */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-3 border-b-2 border-violet-100">
                <div className="bg-violet-100 p-2 rounded-lg">
                  <ImageIcon className="w-5 h-5 text-violet-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">
                  Cover Image (Optional)
                </h2>
              </div>

              {/* Thumbnail Upload */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Upload Thumbnail
                </label>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Upload Area */}
                  <div
                    className={`border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-violet-400 transition-all duration-200 ${
                      !thumbnailPreview ? 'bg-gray-50' : 'bg-violet-50'
                    }`}
                  >
                    <input
                      id="thumbnail"
                      type="file"
                      accept="image/*"
                      onChange={handleThumbnailUpload}
                      className="hidden"
                    />

                    {!thumbnailPreview ? (
                      <label
                        htmlFor="thumbnail"
                        className="cursor-pointer flex flex-col items-center"
                      >
                        <div className="bg-violet-100 p-3 rounded-full mb-2">
                          <ImageIcon className="w-6 h-6 text-violet-600" />
                        </div>
                        <p className="text-xs font-medium text-gray-700 mb-1">
                          Click to upload
                        </p>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF</p>
                      </label>
                    ) : (
                      <div className="space-y-2">
                        <p className="text-xs font-medium text-gray-700">
                          Image uploaded
                        </p>
                        <button
                          type="button"
                          onClick={handleRemoveThumbnail}
                          className="inline-flex items-center gap-1 px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-medium hover:bg-red-200 transition-colors duration-200"
                        >
                          <X className="w-3 h-3" />
                          Remove
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Preview */}
                  {thumbnailPreview && (
                    <div className="rounded-lg overflow-hidden shadow-lg border-2 border-violet-200">
                      <img
                        src={thumbnailPreview}
                        alt="Thumbnail preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t-2 border-gray-100">
              <button
                type="submit"
                disabled={!isFormValid()}
                className={`flex-1 py-4 px-8 rounded-xl font-bold text-lg focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-violet-500 transform transition-all duration-200 shadow-xl ${
                  isFormValid()
                    ? 'bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white hover:from-violet-700 hover:via-purple-700 hover:to-fuchsia-700 hover:scale-[1.02] hover:shadow-2xl'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {isFormValid() ? '✨ Publish Portfolio' : '🔒 Complete Required Fields'}
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="flex-1 bg-gray-100 text-gray-700 py-4 px-8 rounded-xl font-bold text-lg hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-200"
              >
                Reset Form
              </button>
            </div>
          </form>
        </div>

        {/* Info Footer */}
        <div className="mt-8 text-center space-y-2">
          <p className="text-sm text-gray-600">
            Fields marked with <span className="text-red-500 font-bold">*</span>{' '}
            are required
          </p>
          <p className="text-xs text-gray-500">
            Your portfolio helps clients understand your voice range and expertise
          </p>
        </div>
      </div>
    </div>
  );
}
