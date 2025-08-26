import React, { useState } from "react";
import { MapPin } from "lucide-react";
import { API_URL } from "@/config/config";
import { toast } from "react-toastify";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { name, phone, email, message } = formData;

    if (!name.trim()) {
      toast.error("Name is required.");
      return false;
    }

    if (name.trim().length < 3) {
      toast.error("Name must be at least 3 characters.");
      return false;
    }

    if (!phone.trim()) {
      toast.error("Phone number is required.");
      return false;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      toast.error("Phone number must be 10 digits.");
      return false;
    }

    if (email && !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Invalid email address.");
      return false;
    }

    if (!message.trim()) {
      toast.error("Message cannot be empty.");
      return false;
    }

    if (message.trim().length < 3) {
      toast.error("Message must be at least 3 characters.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      const response = await fetch(`${API_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        toast.error(data.error || "Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[var(--color-background)]">
      <div className="container mx-auto px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-0.5 bg-gray-300"></div>
            <span className="text-sm uppercase tracking-wider text-gray-600">Contact Us</span>
          </div>
          <h1 className="text-5xl font-bold leading-tight text-[var(--color-dark)]">
            We&apos;re <span className="bg-[var(--color-accent)] text-white px-2 -mx-2">here</span> for you
          </h1>
          <p className="text-lg text-gray-700">Have a question or feedback? Fill out the form below, and we&apos;ll get back to you.</p>

          <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full name *"
              value={formData.name}
              onChange={handleChange}
              className="w-full ring p-3 rounded-md border border-gray-200 bg-[var(--color-background)] text-[var(--color-dark)] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--color-highlight)]"
              required
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="tel"
                name="phone"
                placeholder="Phone number *"
                value={formData.phone}
                onChange={handleChange}
                className="w-full ring p-3 rounded-md border border-gray-200 bg-[var(--color-background)] text-[var(--color-dark)] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--color-highlight)]"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                className="w-full ring p-3 rounded-md border border-gray-200 bg-[var(--color-background)] text-[var(--color-dark)] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--color-highlight)]"
              />
            </div>
            <textarea
              name="message"
              placeholder="Anything else you would like to know?"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 ring rounded-md border border-gray-200 bg-[var(--color-background)] text-[var(--color-dark)] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--color-highlight)] resize-y"
              required
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className={`px-6 py-3 rounded-md flex font-semibold btn-secondary transition ease-snappy sm:self-end self-center ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {loading ? "Sending..." : "SUBMIT REQUEST"}
            </button>
          </form>
        </div>

        <div className="relative w-full md:h-full h-[400px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3916.30569897033!2d76.97628857504534!3d11.015674989148014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDAwJzU2LjQiTiA3NsKwNTgnNDMuOSJF!5e0!3m2!1sen!2sin!4v1756102808359!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
