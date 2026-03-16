import { useState } from 'react';
import { Save, Send, ArrowLeft } from 'lucide-react';
import { ProjectForm } from './components/ProjectForm';
import { ProjectSummaryCard } from './components/ProjectSummaryCard';
import { toast } from 'sonner';
import { Toaster } from 'sonner';

export default function CreateJob() {
  const [formData, setFormData] = useState({
    // Section 1: Basic Information
    projectTitle: '',
    category: '',
    description: '',
    industry: '',
    referenceUrl: '',
    
    // Section 2: Script Details
    scriptFile: null,
    wordCount: 0,
    
    // Section 3: Voice Requirements
    language: '',
    accent: '',
    gender: '',
    ageRange: '',
    
    // Section 4: Voice Style
    voiceStyles: [],
    
    // Section 5: Reference Examples
    referenceAudioFile: null,
    referenceVideoUrl: '',
    
    // Section 6: License
    usageTypes: [],
    region: '',
    duration: '',
    
    // Section 7: Budget
    pricingModel: '',
    minBudget: '',
    maxBudget: '',
    
    // Section 8: Timeline
    deadline: '',
    deliverySpeed: '',
    
    // Section 9: Revisions
    revisions: '',
    extraRevisions: false,
    
    // Section 10: Audio Requirements
    fileFormat: '',
    audioQuality: '',
    cleanAudio: false,
    
    // Section 11: Audition
    requireAudition: false,
    
    // Section 12: Additional
    additionalInstructions: ''
  });

  const validateForm = () => {
    const errors = [];

    if (!formData.projectTitle) errors.push('Project Title is required');
    if (!formData.category) errors.push('Project Category is required');
    if (!formData.description) errors.push('Project Description is required');
    if (formData.wordCount === 0) errors.push('Word Count is required');
    if (!formData.language) errors.push('Language is required');
    if (!formData.gender) errors.push('Gender is required');
    if (formData.usageTypes.length === 0) errors.push('At least one Usage Type is required');
    if (!formData.region) errors.push('Region is required');
    if (!formData.duration) errors.push('Usage Duration is required');
    if (!formData.pricingModel) errors.push('Pricing Model is required');
    if (!formData.deadline) errors.push('Deadline is required');
    if (!formData.deliverySpeed) errors.push('Delivery Speed is required');
    if (!formData.revisions) errors.push('Number of Revisions is required');
    if (!formData.fileFormat) errors.push('File Format is required');
    if (!formData.audioQuality) errors.push('Audio Quality is required');

    return errors;
  };

  const handleSaveDraft = () => {
    // Mock save draft functionality
    localStorage.setItem('voiceOverProjectDraft', JSON.stringify(formData));
    toast.success('Draft saved successfully!', {
      description: 'Your project has been saved as a draft.',
      duration: 3000,
    });
  };

  const handlePublishProject = (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    
    if (errors.length > 0) {
      toast.error('Please complete all required fields', {
        description: errors[0],
        duration: 4000,
      });
      return;
    }

    // Mock publish functionality
    toast.success('Project published successfully!', {
      description: 'Voice artists can now submit proposals for your project.',
      duration: 4000,
    });

    console.log('Published Project Data:', formData);
    
    // Reset form after successful publish (optional)
    // setFormData({ ... initial state ... });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" richColors />
      
      {/* Header
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg" />
                  <span className="text-lg font-semibold">VoiceMarket</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleSaveDraft}
                className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                Save Draft
              </button>
            </div>
          </div>
        </div>
      </header> */}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="mb-2 text-3xl">Post a Voice Over Project</h1>
          <p className="text-gray-600">
            Describe your project and receive proposals from professional voice artists.
          </p>
        </div>

        {/* Two Column Layout */}
        <form onSubmit={handlePublishProject}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Form */}
            <div className="lg:col-span-2">
              <ProjectForm formData={formData} setFormData={setFormData} />
            </div>

            {/* Right Column - Summary Card */}
            <div className="lg:col-span-1">
              <ProjectSummaryCard formData={formData} />
            </div>
          </div>

          {/* Bottom Action Buttons */}
          <div className="mt-8 lg:col-span-2 lg:max-w-[calc(66.666667%-2rem)]">
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
              <p className="text-sm text-gray-600">
                Ready to find the perfect voice for your project?
              </p>
              <div className="flex gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleSaveDraft}
                  className="flex-1 sm:flex-none px-6 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  Save Draft
                </button>
                <button
                  type="submit"
                  className="flex-1 sm:flex-none px-6 py-3 bg-primary text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-purple-500/30"
                >
                  <Send className="w-4 h-4" />
                  Publish Project
                </button>
              </div>
            </div>
          </div>
        </form>
      </main>

      
    </div>
  );
}
