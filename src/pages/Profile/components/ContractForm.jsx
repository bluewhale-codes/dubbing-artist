import { useState } from 'react';
import { FileText, Send, X, Minus, Plus, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/Button';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { Textarea } from '../../../components/ui/textarea';
import { Badge } from '../../../components/ui/badge';
import { cn } from '../../../components/ui/utils';

export default function ContractForm(id) {
  const [formData, setFormData] = useState({
    proposalId: id,
    scopeOfWork: '',
    requirements: '',
    submissionUrl: '',
    maxRevisions: 2
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleBlur = (field) => {
    setTouched(prev => ({
      ...prev,
      [field]: true
    }));
    validateField(field);
  };

  const validateField = (field) => {
    const newErrors = { ...errors };

    switch (field) {
      case 'scopeOfWork':
        if (!formData.scopeOfWork.trim()) {
          newErrors.scopeOfWork = 'Scope of work is required';
        } else if (formData.scopeOfWork.trim().length < 20) {
          newErrors.scopeOfWork = 'Please provide more detail (at least 20 characters)';
        } else {
          delete newErrors.scopeOfWork;
        }
        break;

      case 'requirements':
        if (!formData.requirements.trim()) {
          newErrors.requirements = 'Requirements are required';
        } else if (formData.requirements.trim().length < 10) {
          newErrors.requirements = 'Please provide more detail (at least 10 characters)';
        } else {
          delete newErrors.requirements;
        }
        break;

      case 'submissionUrl':
        if (!formData.submissionUrl.trim()) {
          newErrors.submissionUrl = 'Submission URL is required';
        } else if (!isValidUrl(formData.submissionUrl)) {
          newErrors.submissionUrl = 'Please enter a valid URL (e.g., https://example.com)';
        } else {
          delete newErrors.submissionUrl;
        }
        break;

      default:
        break;
    }

    setErrors(newErrors);
  };

  const handleIncrement = () => {
    setFormData(prev => ({
      ...prev,
      maxRevisions: Math.min(prev.maxRevisions + 1, 10)
    }));
  };

  const handleDecrement = () => {
    setFormData(prev => ({
      ...prev,
      maxRevisions: Math.max(prev.maxRevisions - 1, 0)
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.scopeOfWork.trim()) {
      newErrors.scopeOfWork = 'Scope of work is required';
    } else if (formData.scopeOfWork.trim().length < 20) {
      newErrors.scopeOfWork = 'Please provide more detail (at least 20 characters)';
    }

    if (!formData.requirements.trim()) {
      newErrors.requirements = 'Requirements are required';
    } else if (formData.requirements.trim().length < 10) {
      newErrors.requirements = 'Please provide more detail (at least 10 characters)';
    }

    if (!formData.submissionUrl.trim()) {
      newErrors.submissionUrl = 'Submission URL is required';
    } else if (!isValidUrl(formData.submissionUrl)) {
      newErrors.submissionUrl = 'Please enter a valid URL (e.g., https://example.com)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValidUrl = (string) => {
    try {
      const url = new URL(string);
      return url.protocol === 'http:' || url.protocol === 'https:';
    } catch (_) {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTouched({
      scopeOfWork: true,
      requirements: true,
      submissionUrl: true
    });

    if (validateForm()) {

      const mydate = 
      console.log('Form submitted:', formData);
      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };

  const handleCancel = () => {
    setFormData({
      proposalId: 'PROP-2026-1234',
      scopeOfWork: '',
      requirements: '',
      submissionUrl: '',
      maxRevisions: 2
    });
    setErrors({});
    setTouched({});
  };

  return (
    <div className="min-h-screen ">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg mb-4">
            <FileText className="w-10 h-10 text-white" strokeWidth={2} />
          </div>
          
        </div>

        {/* Success Message */}
        {isSubmitted && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
            <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
            <p className="text-green-800 font-medium">Contract created successfully! Your proposal is ready for review.</p>
          </div>
        )}

        {/* Main Form Card */}
        <Card className="shadow-xl border-slate-200/60">
          <CardHeader className="space-y-3 pb-6">
            <div className="flex items-start justify-between">
              <div className="space-y-1.5">
                <CardTitle className="text-2xl">Contract Details</CardTitle>
                <CardDescription className="text-base">
                  Please fill in all required information to create your contract
                </CardDescription>
              </div>
              <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-100 px-3 py-1.5">
                Draft
              </Badge>
            </div>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">

              {/* Proposal ID */}
              <div className="space-y-3">
                <Label htmlFor="proposalId" className="text-base">
                  Proposal ID
                </Label>
                <div className="relative">
                  <Input
                    id="proposalId"
                    name="proposalId"
                    value={formData.proposalId}
                    readOnly
                    className="bg-slate-50 font-mono text-slate-600 cursor-not-allowed border-slate-200"
                  />
                  <Badge
                    variant="outline"
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white text-xs"
                  >
                    Auto-generated
                  </Badge>
                </div>
              </div>

              <div className="h-px bg-slate-200" />

              {/* Scope of Work */}
              <div className="space-y-3">
                <Label htmlFor="scopeOfWork" className="text-base flex items-center gap-2">
                  Scope of Work
                  <span className="text-red-500 text-lg">*</span>
                </Label>
                <Textarea
                  id="scopeOfWork"
                  name="scopeOfWork"
                  rows={6}
                  value={formData.scopeOfWork}
                  onChange={handleChange}
                  onBlur={() => handleBlur('scopeOfWork')}
                  placeholder="Describe in detail what work needs to be completed, including deliverables, milestones, and expected outcomes..."
                  className={cn(
                    "resize-none transition-all",
                    touched.scopeOfWork && errors.scopeOfWork && "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-200"
                  )}
                  aria-invalid={touched.scopeOfWork && errors.scopeOfWork ? "true" : "false"}
                />
                {touched.scopeOfWork && errors.scopeOfWork && (
                  <div className="flex items-start gap-2 text-red-600 text-sm animate-in fade-in slide-in-from-top-1 duration-200">
                    <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                    <span>{errors.scopeOfWork}</span>
                  </div>
                )}
                <p className="text-xs text-slate-500">
                  {formData.scopeOfWork.length}/500 characters
                </p>
              </div>

              {/* Requirements */}
              <div className="space-y-3">
                <Label htmlFor="requirements" className="text-base flex items-center gap-2">
                  Requirements
                  <span className="text-red-500 text-lg">*</span>
                </Label>
                <Textarea
                  id="requirements"
                  name="requirements"
                  rows={5}
                  value={formData.requirements}
                  onChange={handleChange}
                  onBlur={() => handleBlur('requirements')}
                  placeholder="List any technical requirements, tools, platforms, file formats, or specific instructions the freelancer should follow..."
                  className={cn(
                    "resize-none transition-all",
                    touched.requirements && errors.requirements && "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-200"
                  )}
                  aria-invalid={touched.requirements && errors.requirements ? "true" : "false"}
                />
                {touched.requirements && errors.requirements && (
                  <div className="flex items-start gap-2 text-red-600 text-sm animate-in fade-in slide-in-from-top-1 duration-200">
                    <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                    <span>{errors.requirements}</span>
                  </div>
                )}
                <p className="text-xs text-slate-500">
                  {formData.requirements.length}/300 characters
                </p>
              </div>

              <div className="h-px bg-slate-200" />

              {/* Submission URL */}
              <div className="space-y-3">
                <Label htmlFor="submissionUrl" className="text-base flex items-center gap-2">
                  Submission URL
                  <span className="text-red-500 text-lg">*</span>
                </Label>
                <Input
                  id="submissionUrl"
                  name="submissionUrl"
                  type="url"
                  value={formData.submissionUrl}
                  onChange={handleChange}
                  onBlur={() => handleBlur('submissionUrl')}
                  placeholder="https://drive.google.com/... or https://github.com/..."
                  className={cn(
                    "transition-all",
                    touched.submissionUrl && errors.submissionUrl && "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-200"
                  )}
                  aria-invalid={touched.submissionUrl && errors.submissionUrl ? "true" : "false"}
                />
                {touched.submissionUrl && errors.submissionUrl && (
                  <div className="flex items-start gap-2 text-red-600 text-sm animate-in fade-in slide-in-from-top-1 duration-200">
                    <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                    <span>{errors.submissionUrl}</span>
                  </div>
                )}
                <p className="text-xs text-slate-500">
                  Where the freelancer should submit their completed work
                </p>
              </div>

              {/* Max Revisions */}
              <div className="space-y-3">
                <Label htmlFor="maxRevisions" className="text-base">
                  Maximum Revisions
                </Label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={handleDecrement}
                      disabled={formData.maxRevisions === 0}
                      className="h-10 w-10 hover:bg-slate-100 disabled:opacity-40"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>

                    <div className="w-24 text-center">
                      <div className="text-3xl font-bold text-slate-900">
                        {formData.maxRevisions}
                      </div>
                    </div>

                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={handleIncrement}
                      disabled={formData.maxRevisions === 10}
                      className="h-10 w-10 hover:bg-slate-100 disabled:opacity-40"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex-1">
                    <p className="text-sm text-slate-600">
                      {formData.maxRevisions === 0 && "No revisions allowed"}
                      {formData.maxRevisions === 1 && "One revision included"}
                      {formData.maxRevisions > 1 && `${formData.maxRevisions} revisions included`}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      Additional revisions may incur extra charges
                    </p>
                  </div>
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-6 border-t border-slate-200">
                <p className="text-sm text-slate-600 order-2 sm:order-1">
                  Fields marked with <span className="text-red-500 font-medium">*</span> are required
                </p>

                <div className="flex flex-col sm:flex-row gap-3 order-1 sm:order-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleCancel}
                    className="w-full sm:w-auto order-2 sm:order-1"
                  >
                    <X className="w-4 h-4" />
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="w-full sm:w-auto shadow-md hover:shadow-lg order-1 sm:order-2"
                  >
                    <Send className="w-4 h-4" />
                    Create Contract
                  </Button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Help Text */}
        <div className="mt-6 text-center">
          <p className="text-sm text-slate-500">
            Need help? Contact support or view our{' '}
            <button className="text-blue-600 hover:text-blue-700 font-medium underline underline-offset-2">
              contract guidelines
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
