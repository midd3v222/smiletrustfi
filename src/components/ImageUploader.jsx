import { UploadCloud, Camera, Shield, Lock, X, AlertCircle } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function ImageUploader({ onImageUpload }) {
  const [showConsentModal, setShowConsentModal] = useState(false);
  const [hasConsented, setHasConsented] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const fileInputRef = useRef(null);
  const pendingFileRef = useRef(null);

  // Check for cached consent on component mount
  useEffect(() => {
    const cachedConsent = localStorage.getItem('smiletrust-privacy-consent');
    if (cachedConsent === 'true') {
      setHasConsented(true);
    }
  }, []);

  // Optional: Utility function to revoke consent (useful for testing or if user wants to reset)
  const revokeConsent = () => {
    localStorage.removeItem('smiletrust-privacy-consent');
    setHasConsented(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleFileInputClick = (e) => {
    if (!hasConsented) {
      e.preventDefault();
      setShowConsentModal(true);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      if (hasConsented) {
        onImageUpload(e.target.files[0]);
      } else {
        pendingFileRef.current = e.target.files[0];
        setShowConsentModal(true);
      }
    }
  };

  const handleAgree = () => {
    if (isChecked) {
      setHasConsented(true);
      // Cache the consent to localStorage for future sessions
      localStorage.setItem('smiletrust-privacy-consent', 'true');
      setShowConsentModal(false);
      if (pendingFileRef.current) {
        onImageUpload(pendingFileRef.current);
        pendingFileRef.current = null;
      } else if (fileInputRef.current) {
        fileInputRef.current.click();
      }
    }
  };

  const handleCloseModal = () => {
    setShowConsentModal(false);
    setIsChecked(false);
    pendingFileRef.current = null;
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <>
      {/* Privacy Consent Modal */}
      {showConsentModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Shield className="h-5 w-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Privacy & Consent</h2>
              </div>
              <button
                onClick={handleCloseModal}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex gap-3">
                <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-1">Your Privacy Matters</h3>
                  <p className="text-sm text-blue-800">
                    Please read and understand our privacy policy before uploading your photo.
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">How We Handle Your Photos</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <Lock className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Temporary Processing Only:</strong> Your photos are processed immediately and deleted from our servers within seconds.</span>
                    </li>
                    <li className="flex gap-2">
                      <Shield className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>No Storage:</strong> We do not store, save, or keep any copies of your uploaded photos.</span>
                    </li>
                    <li className="flex gap-2">
                      <Camera className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>HIPAA Compliant:</strong> All processing follows strict HIPAA guidelines for healthcare data.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">What We Do With Your Photo</h3>
                  <p className="text-sm mb-2">
                    When you upload a photo, we use AI technology to analyze your smile and provide cosmetic dentistry recommendations. The analysis happens in real-time, and:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                    <li>Your photo is never shared with third parties</li>
                    <li>No personally identifiable information is collected</li>
                    <li>Results are shown only to you in your browser</li>
                    <li>You can close the page at any time to clear results</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Your Rights</h3>
                  <p className="text-sm text-gray-700">
                    By uploading a photo, you confirm that you have the right to use this image and consent to our temporary processing for the purpose of providing smile analysis. You may stop using our service at any time.
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    className="mt-1 h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                  />
                  <span className="text-sm text-gray-700 select-none">
                    I have read and understood the privacy policy. I consent to the temporary processing of my photo for smile analysis purposes and confirm that I have the right to use this image.
                  </span>
                </label>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleCloseModal}
                  className="flex-1 px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAgree}
                  disabled={!isChecked}
                  className={`flex-1 px-6 py-3 rounded-lg font-medium transition-all ${
                    isChecked
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  I Agree & Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="w-full max-w-3xl mx-auto">
        <label
          htmlFor="file-upload"
          onClick={handleFileInputClick}
          className="relative cursor-pointer glass-elevated rounded-2xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center min-h-80 h-auto md:h-96 p-6 md:p-8 hover:border-blue-400 hover:bg-blue-50/30 transition-all duration-200 group"
        >
        <div className="text-center">
          <div className="relative mb-6">
            <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
              <UploadCloud className="h-10 w-10 text-blue-600" />
            </div>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
            Secure Photo Upload
          </h3>
          <p className="text-base md:text-lg text-gray-700 mb-2">
            <span className="font-semibold text-blue-600">Upload</span> your smile photo
          </p>
          <p className="text-xs md:text-sm text-gray-600 mb-6">
            PNG, JPG, WEBP (max 10MB)
          </p>
          
          <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
            <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-gray-600">
              <Camera size={14} className="text-blue-600 md:size-4" />
              <span>Clear, front-facing photos work best</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-gray-600">
              <Shield size={14} className="text-green-600 md:size-4" />
              <span>HIPAA compliant processing</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-gray-600 px-4">
              <Lock size={14} className="text-gray-500 md:size-4 flex-shrink-0" />
              <span className="text-center">Photos processed temporarily and deleted immediately</span>
            </div>
          </div>
        </div>
        <input
          ref={fileInputRef}
          id="file-upload"
          name="file-upload"
          type="file"
          className="sr-only"
          onChange={handleFileChange}
          accept="image/png, image/jpeg, image/webp"
        />
      </label>
      </div>
    </>
  );
}
