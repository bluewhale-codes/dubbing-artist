import { useState } from "react";
import { User, MapPin, Clock, Languages, Upload, CheckCircle, X } from "lucide-react";

export default function ProfileSummaryForm() {
  const [formData, setFormData] = useState({
    profileImage: null,
    artistName: "",
    dubbingLanguages: [],
    location: "",
    experience: "",
    languagesKnown: [],
  });

  const [dubbingLanguageInput, setDubbingLanguageInput] = useState("");
  const [languagesKnownInput, setLanguagesKnownInput] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 📸 Image Upload
  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData({ ...formData, profileImage: imageUrl });
    }
  };

  // 🎤 Add Dubbing Language
  const handleDubbingLanguageKeyDown = (e) => {
    if (e.key === "Enter" && dubbingLanguageInput.trim()) {
      e.preventDefault();
      const trimmed = dubbingLanguageInput.trim();

      if (!formData.dubbingLanguages.includes(trimmed)) {
        setFormData({
          ...formData,
          dubbingLanguages: [...formData.dubbingLanguages, trimmed],
        });
        setDubbingLanguageInput("");
        setErrors({ ...errors, dubbingLanguages: undefined });
      }
    }
  };

  // ❌ Remove Dubbing Language
  const removeDubbingLanguage = (language) => {
    setFormData({
      ...formData,
      dubbingLanguages: formData.dubbingLanguages.filter(
        (lang) => lang !== language
      ),
    });
  };

  // 🌐 Add Known Language
  const handleLanguagesKnownKeyDown = (e) => {
    if (e.key === "Enter" && languagesKnownInput.trim()) {
      e.preventDefault();
      const trimmed = languagesKnownInput.trim();

      if (!formData.languagesKnown.includes(trimmed)) {
        setFormData({
          ...formData,
          languagesKnown: [...formData.languagesKnown, trimmed],
        });
        setLanguagesKnownInput("");
        setErrors({ ...errors, languagesKnown: undefined });
      }
    }
  };

  // ❌ Remove Known Language
  const removeLanguageKnown = (language) => {
    setFormData({
      ...formData,
      languagesKnown: formData.languagesKnown.filter(
        (lang) => lang !== language
      ),
    });
  };

  // ✅ Validate
  const validateForm = () => {
    const newErrors = {};

    if (!formData.artistName.trim()) {
      newErrors.artistName = "Artist name is required";
    }

    if (formData.dubbingLanguages.length === 0) {
      newErrors.dubbingLanguages = "Please add at least one dubbing language";
    }

    if (formData.languagesKnown.length === 0) {
      newErrors.languagesKnown = "Please add at least one language known";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 🚀 Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted successfully:", formData);
      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };

  // 🔄 Reset
  const handleReset = () => {
    setFormData({
      profileImage: null,
      artistName: "",
      dubbingLanguages: [],
      location: "",
      experience: "",
      languagesKnown: [],
    });
    setDubbingLanguageInput("");
    setLanguagesKnownInput("");
    setErrors({});
    setIsSubmitted(false);
  };

  return (
   <div className="">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Dubbing Artist Profile
          </h1>
          <p className="text-gray-600">
            Create your professional voice acting profile
          </p>
        </div>

        {/* Success Message */}
        {isSubmitted && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 animate-fade-in">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <p className="text-green-700 font-medium">
              Profile saved successfully! ✨
            </p>
          </div>
        )}

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Profile Image Upload */}
            <div className="flex flex-col items-center">
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Profile Image
              </label>
              <div className="relative group">
                <div className="w-32 h-32 rounded-full border-4 border-gray-200 overflow-hidden bg-gray-100 hover:border-purple-400 transition-all duration-300">
                  {formData.profileImage ? (
                    <img
                      src={formData.profileImage}
                      alt="Profile Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <User className="w-16 h-16 text-gray-400" />
                    </div>
                  )}
                </div>
                <label
                  htmlFor="profile-upload"
                  className="absolute bottom-0 right-0 bg-purple-600 hover:bg-purple-700 text-white rounded-full p-3 cursor-pointer shadow-lg transition-all duration-300 hover:scale-110"
                >
                  <Upload className="w-5 h-5" />
                </label>
                <input
                  id="profile-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>
            </div>

            {/* Artist Name */}
            <div>
              <label
                htmlFor="artistName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Artist Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="artistName"
                  type="text"
                  value={formData.artistName}
                  onChange={(e) =>
                    setFormData({ ...formData, artistName: e.target.value })
                  }
                  className={`block w-full pl-10 pr-3 py-3 border ${
                    errors.artistName ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200`}
                  placeholder="Enter your artist name"
                />
              </div>
              {errors.artistName && (
                <p className="mt-1 text-sm text-red-600">{errors.artistName}</p>
              )}
            </div>

            {/* Dubbing Languages */}
            <div>
              <label
                htmlFor="dubbingLanguages"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Dubbing Languages <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Languages className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="dubbingLanguages"
                  type="text"
                  value={dubbingLanguageInput}
                  onChange={(e) => setDubbingLanguageInput(e.target.value)}
                  onKeyDown={handleDubbingLanguageKeyDown}
                  className={`block w-full pl-10 pr-3 py-3 border ${
                    errors.dubbingLanguages ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200`}
                  placeholder="Type a language and press Enter"
                />
              </div>
              <p className="mt-1 text-xs text-gray-500">
                Press Enter to add languages
              </p>
              {errors.dubbingLanguages && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.dubbingLanguages}
                </p>
              )}

              {/* Dubbing Language Tags */}
              {formData.dubbingLanguages.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {formData.dubbingLanguages.map((language) => (
                    <span
                      key={language}
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors duration-200"
                    >
                      {language}
                      <button
                        type="button"
                        onClick={() => removeDubbingLanguage(language)}
                        className="ml-1 hover:text-purple-900 transition-colors duration-200"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Location */}
            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Location
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="location"
                  type="text"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
                  placeholder="Enter your location"
                />
              </div>
            </div>

            {/* Experience */}
            <div>
              <label
                htmlFor="experience"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Experience
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Clock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="experience"
                  type="text"
                  value={formData.experience}
                  onChange={(e) =>
                    setFormData({ ...formData, experience: e.target.value })
                  }
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
                  placeholder="e.g., 2 years, 5+ years"
                />
              </div>
            </div>

            {/* Languages Known */}
            <div>
              <label
                htmlFor="languagesKnown"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Languages Known <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Languages className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="languagesKnown"
                  type="text"
                  value={languagesKnownInput}
                  onChange={(e) => setLanguagesKnownInput(e.target.value)}
                  onKeyDown={handleLanguagesKnownKeyDown}
                  className={`block w-full pl-10 pr-3 py-3 border ${
                    errors.languagesKnown ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200`}
                  placeholder="Type a language and press Enter"
                />
              </div>
              <p className="mt-1 text-xs text-gray-500">
                Press Enter to add languages
              </p>
              {errors.languagesKnown && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.languagesKnown}
                </p>
              )}

              {/* Languages Known Tags */}
              {formData.languagesKnown.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {formData.languagesKnown.map((language) => (
                    <span
                      key={language}
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200"
                    >
                      {language}
                      <button
                        type="button"
                        onClick={() => removeLanguageKnown(language)}
                        className="ml-1 hover:text-blue-900 transition-colors duration-200"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Submit Profile
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-200"
              >
                Reset Form
              </button>
            </div>
          </form>
        </div>

        {/* Info Footer */}
        <div className="mt-6 text-center text-sm text-gray-600">
          <p>Fields marked with <span className="text-red-500">*</span> are required</p>
        </div>
      </div>
    </div>
  );
}