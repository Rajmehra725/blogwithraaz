'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const ResumeBuilder = () => {
  const resumeRef = useRef<HTMLDivElement>(null);
  const [selectedTemplate, setSelectedTemplate] = useState<'simple' | 'modern'>('simple');
  const [photo, setPhoto] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    linkedlink: '',
    Github: '',
    education: '',
    experience: '',
    skills: '',
    projects: '',
    certifications: '',
    languages: '',
    hobbies: '',
  });

  useEffect(() => {
    // Preload module (optional)
    import('html2pdf.js');
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPhoto(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleDownloadPDF = async () => {
    if (!resumeRef.current) return;

    const html2pdf = (await import('html2pdf.js')).default;

    html2pdf()
      .set({
        margin: 0.5,
        filename: 'My_Resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
      })
      .from(resumeRef.current)
      .save();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleDownloadPDF();
  };

  const fields = [
    { label: 'Full Name', name: 'name', type: 'text' },
    { label: 'Email', name: 'email', type: 'email' },
    { label: 'Linkedlink ', name: 'linkedlink', type: 'text' },
    { label: 'Github Link', name: 'Github', type: 'text' },
    { label: 'Phone', name: 'phone', type: 'text' },
    { label: 'Education', name: 'education', textarea: true },
    { label: 'Experience', name: 'experience', textarea: true },
    { label: 'Skills', name: 'skills', textarea: true },
    { label: 'Projects', name: 'projects', textarea: true },
    { label: 'Certifications', name: 'certifications', textarea: true },
    { label: 'Languages', name: 'languages', textarea: true },
    { label: 'Hobbies', name: 'hobbies', textarea: true },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
      <h1 className="text-3xl font-bold text-center mb-4 text-orange-600">
        Advanced Resume Builder
      </h1>

      {/* Template Selector */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setSelectedTemplate('simple')}
          className={`px-4 py-2 rounded ${
            selectedTemplate === 'simple'
              ? 'bg-orange-500 text-white'
              : 'bg-white border'
          }`}
        >
          Simple Template
        </button>
        <button
          onClick={() => setSelectedTemplate('modern')}
          className={`px-4 py-2 rounded ${
            selectedTemplate === 'modern'
              ? 'bg-orange-500 text-white'
              : 'bg-white border'
          }`}
        >
          Modern Template
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
          {fields.map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-medium text-gray-700">
                {field.label}
              </label>
              {field.textarea ? (
                <textarea
                  name={field.name}
                  rows={2}
                  value={formData[field.name as keyof typeof formData]}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded"
                />
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name as keyof typeof formData]}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded"
                />
              )}
            </div>
          ))}

          {/* Photo Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Upload Photo</label>
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
              className="mt-1"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
          >
            Generate & Download PDF
          </button>
        </form>

        {/* Live Preview */}
        <div ref={resumeRef} className="bg-white p-6 rounded-lg shadow-md text-sm">
          {selectedTemplate === 'simple' ? (
            <div>
              {photo && <img src={photo} alt="Profile" className="w-24 h-24 object-cover rounded-full mb-2" />}
              <h2 className="text-xl font-bold">{formData.name}</h2>
              <p className="text-sm">{formData.email} | {formData.phone}| {formData.linkedlink}| {formData.Github}</p>
              <hr className="my-2" />
              <p className="mb-1"><strong>Education:</strong> {formData.education}</p>
               <hr className="my-2" />
              <p className="mb-1"><strong>Experience:</strong> {formData.experience}</p>
               <hr className="my-2" />
              <p className="mb-1"><strong>Skills:</strong> {formData.skills}</p>
               <hr className="my-2" />
              <p className="mb-1"><strong>Projects:</strong> {formData.projects}</p>
               <hr className="my-2" />
              <p className="mb-1"><strong>Certifications:</strong> {formData.certifications}</p>
               <hr className="my-2" />
              <p className="mb-1"><strong>Languages:</strong> {formData.languages}</p>
               <hr className="my-2" />
              <p className="mb-1"><strong>Hobbies:</strong> {formData.hobbies}</p>
               <hr className="my-2" />
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-4">
                {photo && <img src={photo} alt="Profile" className="w-20 h-20 rounded-full" />}
                <div>
                  <h2 className="text-xl font-bold text-orange-600">{formData.name}</h2>
                  <p>{formData.email} | {formData.phone} | {formData.linkedlink} | {formData.Github}</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2">
               
                <div>
                  <h3 className="font-semibold text-gray-700">Education</h3>
                  <p>{formData.education}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">Experience</h3>
                  <p>{formData.experience}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">Skills</h3>
                  <p>{formData.skills}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">Projects</h3>
                  <p>{formData.projects}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">Certifications</h3>
                  <p>{formData.certifications}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">Languages</h3>
                  <p>{formData.languages}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">Hobbies</h3>
                  <p>{formData.hobbies}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
