'use client';

import { useState, FormEvent } from 'react';
import { validateFormField, ValidationResult } from '@/utils/validation';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

interface FormState {
  isSubmitting: boolean;
  isSuccess: boolean;
  isError: boolean;
  errorMessage?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [formState, setFormState] = useState<FormState>({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
  });

  const validateField = (name: keyof FormData, value: string): ValidationResult => {
    switch (name) {
      case 'name':
        return validateFormField(value, { required: true, minLength: 2, maxLength: 50 });
      case 'email':
        return validateFormField(value, { required: true, email: true });
      case 'phone':
        return validateFormField(value, { phone: true });
      case 'subject':
        return validateFormField(value, { required: true, minLength: 5, maxLength: 100 });
      case 'message':
        return validateFormField(value, { required: true, minLength: 10, maxLength: 1000 });
      default:
        return { isValid: true };
    }
  };

  const handleInputChange = (name: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear success/error states when user starts typing
    if (formState.isSuccess || formState.isError) {
      setFormState(prev => ({ ...prev, isSuccess: false, isError: false, errorMessage: undefined }));
    }

    // Validate field if it has been touched
    if (touched[name]) {
      const validation = validateField(name, value);
      setErrors(prev => ({
        ...prev,
        [name]: validation.isValid ? undefined : validation.error,
      }));
    }
  };

  const handleBlur = (name: keyof FormData) => {
    setTouched(prev => ({ ...prev, [name]: true }));
    const validation = validateField(name, formData[name]);
    setErrors(prev => ({
      ...prev,
      [name]: validation.isValid ? undefined : validation.error,
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    (Object.keys(formData) as Array<keyof FormData>).forEach(field => {
      const validation = validateField(field, formData[field]);
      if (!validation.isValid) {
        newErrors[field] = validation.error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      phone: true,
      subject: true,
      message: true,
    });

    return isValid;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setFormState({ isSubmitting: true, isSuccess: false, isError: false });

    try {
      // This will be implemented in subtask 3.2
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      
      setFormState({ isSubmitting: false, isSuccess: true, isError: false });
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTouched({});
      setErrors({});
    } catch (error) {
      setFormState({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        errorMessage: 'Failed to send message. Please try again.',
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-foreground">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            onBlur={() => handleBlur('name')}
            className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary ${
              errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400'
            }`}
            placeholder="Enter your full name"
            disabled={formState.isSubmitting}
          />
          {errors.name && (
            <p className="text-sm text-red-600 animate-in slide-in-from-top-1 duration-200">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-foreground">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            onBlur={() => handleBlur('email')}
            className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary ${
              errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400'
            }`}
            placeholder="Enter your email address"
            disabled={formState.isSubmitting}
          />
          {errors.email && (
            <p className="text-sm text-red-600 animate-in slide-in-from-top-1 duration-200">
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone Field */}
        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm font-medium text-foreground">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            onBlur={() => handleBlur('phone')}
            className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary ${
              errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400'
            }`}
            placeholder="Enter your phone number (optional)"
            disabled={formState.isSubmitting}
          />
          {errors.phone && (
            <p className="text-sm text-red-600 animate-in slide-in-from-top-1 duration-200">
              {errors.phone}
            </p>
          )}
        </div>

        {/* Subject Field */}
        <div className="space-y-2">
          <label htmlFor="subject" className="block text-sm font-medium text-foreground">
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            value={formData.subject}
            onChange={(e) => handleInputChange('subject', e.target.value)}
            onBlur={() => handleBlur('subject')}
            className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary ${
              errors.subject ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400'
            }`}
            placeholder="What is this regarding?"
            disabled={formState.isSubmitting}
          />
          {errors.subject && (
            <p className="text-sm text-red-600 animate-in slide-in-from-top-1 duration-200">
              {errors.subject}
            </p>
          )}
        </div>

        {/* Message Field */}
        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium text-foreground">
            Message *
          </label>
          <textarea
            id="message"
            rows={6}
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            onBlur={() => handleBlur('message')}
            className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-vertical ${
              errors.message ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400'
            }`}
            placeholder="Tell us how we can help you..."
            disabled={formState.isSubmitting}
          />
          {errors.message && (
            <p className="text-sm text-red-600 animate-in slide-in-from-top-1 duration-200">
              {errors.message}
            </p>
          )}
        </div>

        {/* Success Message */}
        {formState.isSuccess && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg animate-in slide-in-from-top-2 duration-300">
            <p className="text-green-800 font-medium">✓ Message sent successfully!</p>
            <p className="text-green-600 text-sm mt-1">We'll get back to you within 24 hours.</p>
          </div>
        )}

        {/* Error Message */}
        {formState.isError && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg animate-in slide-in-from-top-2 duration-300">
            <p className="text-red-800 font-medium">✗ {formState.errorMessage}</p>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={formState.isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-primary/20"
        >
          {formState.isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending Message...
            </span>
          ) : (
            'Send Message'
          )}
        </button>
      </form>
    </div>
  );
}