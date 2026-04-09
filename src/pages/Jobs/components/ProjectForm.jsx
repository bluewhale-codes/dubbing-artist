import { useState } from 'react';
import { Upload, Link as LinkIcon, Check, X } from 'lucide-react';
import { ScriptUploader } from './ScriptUploader';
import { VoiceRequirementSelector } from './VoiceRequirementSelector';
import { VoiceStyleTags } from './VoiceStyleTags';
import { LicenseSelector } from './LicenseSelector';
import { BudgetSelector } from './BudgetSelector';
import { TimelinePicker } from './TimelinePicker';
import { useDispatch } from 'react-redux';

export function ProjectForm({ formData, setFormData }) {
  const [referenceAudioFile, setReferenceAudioFile] = useState(null);
  const dispatch = useDispatch();
  const categories = [
    'Commercial Ad',
    'YouTube Video',
    'Audiobook',
    'E-learning Course',
    'Animation / Cartoon',
    'Video Game',
    'IVR / Phone System',
    'Podcast Intro / Outro',
    'Documentary',
    'Corporate Explainer'
  ];

  const fileFormats = ['WAV', 'MP3', 'Both'];
  const audioQualities = ['44.1 kHz', '48 kHz'];
  const revisionOptions = ['1', '2', '3', '-1'];

  const handleScriptUpload = (e) => {
      if (e.target.files && e.target.files[0]) {
      console.log(e.target.files[0]);
      setFormData({...formData,audioscript:e.target.files[0]})
      
    }

  };

  const handleReferenceAudioUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      console.log(e.target.files[0]);
      setFormData({...formData,referenceAudioFile:e.target.files[0]})
      setReferenceAudioFile(e.target.files[0]);
    }
  };

  const removeReferenceAudio = () => {
    setReferenceAudioFile(null);
  };

  return (
    <div className="space-y-8">
      {/* Section 1: Basic Project Information */}
      <section className="bg-white rounded-xl shadow-md border border-gray-200 p-6 md:p-8">
        <h2 className="mb-6">Basic Project Information</h2>

        <div className="space-y-6">
          <div>
            <label className="block text-sm mb-2">Project Title *</label>
            <input
              type="text"
              value={formData.projectTitle}
              onChange={(e) => setFormData({ ...formData, projectTitle: e.target.value })}
              className="w-full px-4 py-2 bg-input-background rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              placeholder="e.g., Professional Voice Over for Product Launch Video"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Project Category *</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-4 py-2 bg-input-background rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              required
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm mb-2">Project Description *</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-3 bg-input-background rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
              rows="6"
              placeholder="Describe your project in detail. Include information about your brand, target audience, and the tone you're looking for..."
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm mb-2">Industry / Brand Type</label>
              <input
                type="text"
                value={formData.industry}
                onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                className="w-full px-4 py-2 bg-input-background rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                placeholder="e.g., Technology, Healthcare, Fashion"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Reference Video / Audio URL</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <LinkIcon className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="url"
                  value={formData.referenceUrl}
                  onChange={(e) => setFormData({ ...formData, referenceUrl: e.target.value })}
                  className="w-full pl-10 pr-4 py-2 bg-input-background rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  placeholder="https://..."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Script Details */}
      <section className="bg-white rounded-xl shadow-md border border-gray-200 p-6 md:p-8">
        <h2 className="mb-6">Script Details</h2>
         {/* <ScriptUploader
          onScriptUpload={handleScriptUpload}
          wordCount={formData.wordCount}
          setWordCount={(count) => setFormData({ ...formData, wordCount: count })}
        /> */}
        <input
                  type="file"
                  id="script-audio"
                  className=""
                  onChange={handleScriptUpload}
                  accept=".txt,.doc,.docx,.pdf"
                />


      </section>

      {/* Section 3: Voice Requirements */}
      <section className="bg-white rounded-xl shadow-md border border-gray-200 p-6 md:p-8">
        <h2 className="mb-6">Voice Requirements</h2>
        <VoiceRequirementSelector
          language={formData.language}
          setLanguage={(lang) => setFormData({ ...formData, language: lang })}
          accent={formData.accent}
          setAccent={(acc) => setFormData({ ...formData, accent: acc })}
          gender={formData.gender}
          setGender={(gen) => setFormData({ ...formData, gender: gen })}
          ageRange={formData.ageRange}
          setAgeRange={(age) => setFormData({ ...formData, ageRange: age })}
        />
      </section>

      {/* Section 4: Voice Style / Tone */}
      <section className="bg-white rounded-xl shadow-md border border-gray-200 p-6 md:p-8">
        <h2 className="mb-6">Voice Style / Tone</h2>
        <VoiceStyleTags
          selectedStyles={formData.voiceStyles}
          setSelectedStyles={(styles) => setFormData({ ...formData, voiceStyles: styles })}
        />
      </section>

      {/* Section 5: Reference Examples */}
      <section className="bg-white rounded-xl shadow-md border border-gray-200 p-6 md:p-8">
        <h2 className="mb-6">Reference Examples</h2>

        <div className="space-y-6">
          <div>
            <label className="block text-sm mb-2">Reference Audio Upload</label>
            {!referenceAudioFile ? (
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                <input
                  type="file"
                  id="reference-audio"
                  className="hidden"
                  onChange={handleReferenceAudioUpload}
                  accept="audio/*"
                />
                <Upload className="w-10 h-10 mx-auto mb-3 text-gray-400" />
                <label htmlFor="reference-audio" className="text-sm text-primary cursor-pointer hover:underline">
                  Upload reference audio
                </label>
                <p className="text-xs text-gray-500 mt-2">MP3, WAV (max. 10MB)</p>
              </div>
            ) : (
              <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 flex items-center justify-between">
                <span className="text-sm">{referenceAudioFile.name}</span>
                <button
                  onClick={removeReferenceAudio}
                  className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <X className="w-4 h-4 text-gray-500" />
                </button>
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm mb-2">Reference Video URL</label>
            <input
              type="url"
              value={formData.referenceVideoUrl}
              onChange={(e) => setFormData({ ...formData, referenceVideoUrl: e.target.value })}
              className="w-full px-4 py-2 bg-input-background rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              placeholder="https://youtube.com/..."
            />
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-gray-700">
              💡 Provide an example of the voice style you want. This helps voice artists understand your vision better.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: Usage / License Information */}
      <section className="bg-white rounded-xl shadow-md border border-gray-200 p-6 md:p-8">
        <h2 className="mb-6">Usage / License Information</h2>
        <LicenseSelector
          usageTypes={formData.usageTypes}
          setUsageTypes={(types) => setFormData({ ...formData, usageTypes: types })}
          region={formData.region}
          setRegion={(reg) => setFormData({ ...formData, region: reg })}
          duration={formData.duration}
          setDuration={(dur) => setFormData({ ...formData, duration:dur})}
          monthyear={formData.monthyear}
          setMonthyear={(mon)=>setFormData({...formData,monthyear:mon})}
        />
      </section>

      {/* Section 7: Budget & Pricing */}
      <section className="bg-white rounded-xl shadow-md border border-gray-200 p-6 md:p-8">
        <h2 className="mb-6">Budget & Pricing</h2>
        <BudgetSelector
          pricingModel={formData.pricingModel}
          setPricingModel={(model) => setFormData({ ...formData, pricingModel: model })}
          minBudget={formData.minBudget}
          setMinBudget={(min) => setFormData({ ...formData, minBudget: min })}
          maxBudget={formData.maxBudget}
          setMaxBudget={(max) => setFormData({ ...formData, maxBudget: max })}
        />
      </section>

      {/* Section 8: Delivery Timeline */}
      <section className="bg-white rounded-xl shadow-md border border-gray-200 p-6 md:p-8">
        <h2 className="mb-6">Delivery Timeline</h2>
        <TimelinePicker
          deadline={formData.deadline}
          setDeadline={(date) => setFormData({ ...formData, deadline: date })}
          deliverySpeed={formData.deliverySpeed}
          setDeliverySpeed={(speed) => setFormData({ ...formData, deliverySpeed: speed })}
        />
      </section>

      {/* Section 9: Revisions */}
      <section className="bg-white rounded-xl shadow-md border border-gray-200 p-6 md:p-8">
        <h2 className="mb-6">Revisions</h2>

        <div className="space-y-6">
          <div>
            <label className="block text-sm mb-2">Number of Revisions Included *</label>
            <select
              value={formData.revisions}
              onChange={(e) => setFormData({ ...formData, revisions: e.target.value })}
              className="w-full px-4 py-2 bg-input-background rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              required
            >
              <option value="">Select revisions</option>
              {revisionOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div>
              <p className="text-sm">Extra Revisions Allowed</p>
              <p className="text-xs text-gray-500 mt-1">Allow artists to offer extra revisions at additional cost</p>
            </div>
            <button
              type="button"
              onClick={() => setFormData({ ...formData, extraRevisions: !formData.extraRevisions })}
              className={`relative w-12 h-6 rounded-full transition-colors ${
                formData.extraRevisions ? 'bg-primary' : 'bg-gray-300'
              }`}
            >
              <span
                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                  formData.extraRevisions ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>
      </section>

      {/* Section 10: Audio Requirements */}
      <section className="bg-white rounded-xl shadow-md border border-gray-200 p-6 md:p-8">
        <h2 className="mb-6">Audio Requirements</h2>

        <div className="space-y-6">
          <div>
            <label className="block text-sm mb-3">File Format *</label>
            <div className="flex gap-3">
              {fileFormats.map((format) => (
                <button
                  key={format}
                  type="button"
                  onClick={() => setFormData({ ...formData, fileFormat: format })}
                  className={`flex-1 px-4 py-2 rounded-lg border-2 transition-all ${
                    formData.fileFormat === format
                      ? 'border-primary bg-purple-50 text-primary'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {format}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm mb-3">Audio Quality *</label>
            <div className="flex gap-3">
              {audioQualities.map((quality) => (
                <button
                  key={quality}
                  type="button"
                  onClick={() => setFormData({ ...formData, audioQuality: quality })}
                  className={`flex-1 px-4 py-2 rounded-lg border-2 transition-all ${
                    formData.audioQuality === quality
                      ? 'border-primary bg-purple-50 text-primary'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {quality}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="clean-audio"
              checked={formData.cleanAudio}
              onChange={(e) => setFormData({ ...formData, cleanAudio: e.target.checked })}
              className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary"
            />
            <label htmlFor="clean-audio" className="text-sm cursor-pointer">
              Clean audio without background noise
            </label>
          </div>
        </div>
      </section>

      {/* Section 11: Audition Requirement */}
      <section className="bg-white rounded-xl shadow-md border border-gray-200 p-6 md:p-8">
        <h2 className="mb-6">Audition Requirement</h2>

        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-200">
          <div>
            <p className="text-sm">Require Audition Before Hiring</p>
            <p className="text-xs text-gray-600 mt-1">
              Request voice artists to submit a sample audition of your script
            </p>
          </div>
          <button
            type="button"
            onClick={() => setFormData({ ...formData, requireAudition: !formData.requireAudition })}
            className={`relative w-12 h-6 rounded-full transition-colors ${
              formData.requireAudition ? 'bg-primary' : 'bg-gray-300'
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                formData.requireAudition ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>
        </div>
      </section>

      {/* Section 12: Additional Instructions */}
      <section className="bg-white rounded-xl shadow-md border border-gray-200 p-6 md:p-8">
        <h2 className="mb-6">Additional Instructions</h2>

        <div>
          <label className="block text-sm mb-2">Extra Instructions for Voice Artists</label>
          <textarea
            value={formData.additionalInstructions}
            onChange={(e) => setFormData({ ...formData, additionalInstructions: e.target.value })}
            className="w-full px-4 py-3 bg-input-background rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
            rows="5"
            placeholder="Add any extra instructions, special requirements, or important notes for the voice artist..."
          />
        </div>
      </section>
    </div>
  );
}
