import { Upload, FileText, X } from 'lucide-react';
import { useState } from 'react';

export function ScriptUploader({ onScriptUpload, wordCount, setWordCount }) {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file) => {
    
    setUploadedFile(file);
    onScriptUpload(file);
    
    // Mock word count based on file size
    const estimatedWords = Math.floor(file.size / 5);
    setWordCount(estimatedWords);
  };

  const removeFile = () => {
    setUploadedFile(null);
    onScriptUpload(null);
    setWordCount(0);
  };

  const estimatedDuration = Math.floor(wordCount / 2.5); // ~150 words per minute average

  return (
    <div className="space-y-4">
      {!uploadedFile ? (
        <div
          className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
            dragActive
              ? 'border-primary bg-purple-50'
              : 'border-gray-300 hover:border-gray-400'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            type="file"
            id="script-upload"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            onChange={handleChange}
            accept=".txt,.doc,.docx,.pdf"
          />
          <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
          <p className="text-sm text-gray-600 mb-1">
            <label htmlFor="script-upload" className="text-primary cursor-pointer hover:underline">
              Click to upload
            </label>{' '}
            or drag and drop
          </p>
          <p className="text-xs text-gray-500">TXT, DOC, DOCX, PDF (max. 10MB)</p>
        </div>
      ) : (
        <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm">{uploadedFile.name}</p>
                <p className="text-xs text-gray-500">
                  {(uploadedFile.size / 1024).toFixed(2)} KB
                </p>
              </div>
            </div>
            <button
              onClick={removeFile}
              className="p-1 hover:bg-gray-200 rounded-full transition-colors"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>
      )}

      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block text-sm mb-2">Word Count</label>
          <input
            type="number"
            value={wordCount}
            onChange={(e) => setWordCount(parseInt(e.target.value) || 0)}
            className="w-full px-4 py-2 bg-input-background rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            placeholder="Enter word count"
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm mb-2">Estimated Duration</label>
          <div className="px-4 py-2 bg-gray-100 rounded-lg border border-gray-200 text-gray-600">
            {estimatedDuration} seconds
          </div>
        </div>
      </div>

      {wordCount > 0 && (
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <FileText className="w-5 h-5 text-primary mt-0.5" />
            <div>
              <p className="text-sm">
                <span className="font-medium">Script Length:</span> {wordCount} words
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Estimated Duration:</span> {estimatedDuration} seconds
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
