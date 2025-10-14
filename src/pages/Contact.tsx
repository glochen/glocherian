import { useState } from "react";
import { VerticalNavPageLayout } from "../components/VerticalNavPageLayout";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export function Contact() {
  useDocumentTitle("contact | glocherian");
  
  const [formData, setFormData] = useState({
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with pre-filled content
    const subject = encodeURIComponent(formData.subject || "contact from glocherian website");
    const body = encodeURIComponent(
      `${formData.message}`
    );
    
    const mailtoLink = `mailto:glochen1999@gmail.com?subject=${subject}&body=${body}`;
    window.open(mailtoLink);
  };

  return (
    <VerticalNavPageLayout>
      <div className="flex flex-col items-center justify-center min-h-full px-8 py-12">
        <div className="w-full max-w-2xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-lxgw-wenkai-tc text-ink-black mb-4">
              敲我一下
            </h1>
            <p className="text-xl font-sans text-blue-primary">
              contact me
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-blue-tertiary rounded-lg shadow-lg p-8 mb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-ink-black mb-2">
                  subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-blue-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-blue-primary focus:border-transparent transition-colors duration-200"
                  placeholder="subject"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-ink-black mb-2">
                  message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-blue-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-blue-primary focus:border-transparent transition-colors duration-200 resize-vertical"
                  placeholder="..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-secondary hover:bg-blue-secondary/80 text-ink-black py-3 px-6 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-primary focus:ring-offset-2"
              >
                send
              </button>
            </form>
          </div>

          {/* Instagram Link */}
          <div className="text-center">
            <a
              href="https://instagram.com/glocherian"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:bg-blue-tertiary/80 text-blue-primary py-3 px-6 rounded-md transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </VerticalNavPageLayout>
  );
}
