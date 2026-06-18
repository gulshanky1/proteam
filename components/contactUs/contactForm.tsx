"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Clock,
  ArrowRight,
} from "lucide-react";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
  "success" | "error" | null
>(null);
const [statusMessage, setStatusMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (errors[e.target.name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [e.target.name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    };

    let valid = true;

    if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
      valid = false;
    }

    if (formData.phone.trim().length < 10) {
      newErrors.phone = "Please enter a valid phone number";
      valid = false;
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
      valid = false;
    }

    if (formData.message.trim().length < 20) {
      newErrors.message = "Message must be at least 20 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setLoading(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert("Inquiry Sent Successfully! 🎉");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
        setErrors({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        console.log(data.message || "Failed to send inquiry");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-slate-50 py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded bg-blue-50 text-blue-700 text-sm font-semibold tracking-wider mb-4">
            CONTACT PROTEAM
          </div>

          <h2 className="text-2xl font-bold text-slate-900 leading-tight">
            Get in touch for specialized{" "}
            <span className="text-blue-600">workforce solutions</span>
          </h2>

          <p className="mt-5 text-md text-slate-600 max-w-xl mx-auto">
            Whether you're scaling a startup or optimizing an enterprise, our
            dedicated team is ready to architect your talent strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 xl:gap-8">
          {/* Form Section */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded shadow-xl border border-slate-100 p-8 md:p-10">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-slate-900">
                  Send us a message
                </h3>
                <p className="text-slate-500 mt-2">
                  Our team typically responds within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-1.5 block">
                      Full Name<span className="text-red-500"> *</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full h-14 px-5 rounded border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-slate-900"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1.5">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-1.5 block">
                      Work Email <span className="text-red-500"> * </span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full h-14 px-5 rounded border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-slate-900"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1.5">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-1.5 block">
                      Phone Number<span className="text-red-500"> * </span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 70112 19291"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full h-14 px-5 rounded border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-slate-900"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1.5">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-1.5 block">
                      Industry / Service<span className="text-red-500"> * </span>
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full h-14 px-5 rounded border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-slate-900 bg-white"
                    >
                      <option value="">Select Service</option>
                      <option value="Strategic Staffing">Strategic Staffing</option>
                      <option value="Contractual Manpower">Contractual Manpower</option>
                      <option value="Payroll Management">Payroll Management</option>
                      <option value="Security Services">Security Services</option>
                      <option value="Housekeeping Services">Housekeeping Services</option>
                      <option value="Training(B.Voc & D.Voc)">Training(B.Voc & D.Voc)</option>
                    </select>
                    {errors.service && (
                      <p className="text-red-500 text-sm mt-1.5">{errors.service}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700 mb-1.5 block">
                    Message<span className="text-red-500">* </span>
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="How can we help your business grow?"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-5 rounded border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none resize-none text-slate-900"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1.5">{errors.message}</p>
                  )}
                </div>

                <button
    type="submit"
    disabled={loading}
    className="
      w-full
      h-14
      bg-blue-600
      hover:bg-blue-700
      active:bg-blue-800
      text-white
      font-semibold
      text-lg
      rounded
      flex
      items-center
      justify-center
      gap-3
      transition-all
      duration-200
      disabled:opacity-70
      disabled:cursor-not-allowed
      shadow-lg
      shadow-blue-200
      hover:shadow-xl
    "
  >
    {loading ? (
      <>
        <Loader2
          size={20}
          className="animate-spin"
        />
        Sending Inquiry...
      </>
    ) : (
      <>
        Send Inquiry
        <ArrowRight size={20} />
      </>
    )}
  </button>

  {/* Success Message */}
  {submitStatus === "success" && (
    <div
      className="
        flex
        items-center
        gap-3
        rounded
        border
        border-green-200
        bg-green-50
        px-4
        py-3
        text-green-700
      "
    >
      <CheckCircle2 size={18} />
      <span className="text-sm">
        {statusMessage}
      </span>
    </div>
  )}

  {/* Error Message */}
  {submitStatus === "error" && (
    <div
      className="
        flex
        items-center
        justify-between
        gap-4
        rounded
        border
        border-red-200
        bg-red-50
        px-4
        py-3
        text-red-700
      "
    >
      <div className="flex items-center gap-2">
        <AlertCircle size={18} />
        <span className="text-sm">
          {statusMessage}
        </span>
      </div>

      <button
        type="button"
        onClick={() => {
          setSubmitStatus(null);
          setStatusMessage("");
        }}
        className="
          text-sm
          font-medium
          underline
          whitespace-nowrap
        "
      >
        Try Again
      </button>
    </div>
  )}
              </form>
            </div>
          </div>

          {/* Sidebar - Direct Channels + Visual */}
          <div className="lg:col-span-5 space-y-3">
            {/* Direct Channels */}
            <div className="bg-white rounded shadow-xl border border-slate-100 p-8 md:p-10">
              <h3 className="text-2xl font-semibold text-slate-900 mb-8">
                Direct Channels
              </h3>

              <div className="space-y-3">
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <p className="uppercase text-xs tracking-widest text-slate-400 font-medium">Email</p>
                    <a
                      href="mailto:business@proteamorg.com"
                      className="text-lg font-medium text-slate-800 hover:text-blue-600 transition-colors break-all"
                    >
                      business@proteamorg.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <p className="uppercase text-xs tracking-widest text-slate-400 font-medium">Call for experts</p>
                    <a
                      href="tel:+917011219291"
                      className="text-lg font-medium text-slate-800 hover:text-blue-600 transition-colors"
                    >
                      +91 7011219291
                    </a>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Clock className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <p className="uppercase text-xs tracking-widest text-slate-400 font-medium">Support Hours</p>
                    <p className="text-slate-800 font-medium">
                      Monday — Friday <br />
                      9:00 AM - 6:00 PM IST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual / Office Image Placeholder */}
            <div className="relative h-[330px] rounded overflow-hidden shadow-2xl border border-slate-100 hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-900/40 to-transparent z-10" />

              <img
                src="/images/office.jpg"
                alt="Proteam Office"
                className="object-cover w-full h-full"
                onError={(e) => {
                  e.currentTarget.src = "https://picsum.photos/id/1015/800/600";
                }}
              />

              <div className="absolute bottom-8 left-8 z-20 text-white">
                <div className="inline-block bg-blue-600/90 px-5 py-2 rounded text-sm mb-4">
                  Registered Office
                </div>

                <h3 className="text-2xl font-bold">
                  PROTEAM Management Services Pvt. Ltd.
                </h3>

                <p className="mt-3 text-white/90 leading-7 max-w-sm">
                  46, Jharsa road, near Radha Krishna Mandir, Kirti Nagar, Gurugram
                </p>
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
}