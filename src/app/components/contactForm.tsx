"use client";
import { useState, useEffect } from "react";
import contactFormAction from "@/app/actions/contactFormAction";
import { Errors, Parameters } from "@/app/assets/types";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContactForm() {
  const [parameters, setParameters] = useState({
    name: "",
    email: "",
    prefix: "",
    phone: "",
    contactedBy: "",
    coName: "",
    message: "",
  });

  const [error, setError] = useState<Errors>({
    name: false,
    email: false,
    prefix: false,
    phone: false,
    contactedBy: false,
    coName: false,
    message: false,
    count: 0,
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const inputClass =
    "mt-2 w-full rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-blue-400/60 focus:outline-none";

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const property = event.target.name;
    const value = event.target.value;
    setParameters({ ...parameters, [property]: value });
  };

  const resetErrors = () => {
    setError({
      name: false,
      email: false,
      prefix: false,
      phone: false,
      contactedBy: false,
      coName: false,
      message: false,
      count: 0,
    });
  };

  const resetAll = () => {
    setParameters({
      name: "",
      email: "",
      prefix: "",
      phone: "",
      contactedBy: "",
      coName: "",
      message: "",
    });

    resetErrors();
  };

  const validateForm = async () => {
    resetErrors();
    const requiredFields: (keyof Parameters)[] = [
      "name",
      "email",
      "prefix",
      "phone",
      "contactedBy",
      "coName",
      "message",
    ];
    let fieldsCompleted = true;

    const newErrors: Errors = {
      name: false,
      email: false,
      prefix: false,
      phone: false,
      contactedBy: false,
      coName: false,
      message: false,
      count: 0,
    };
    for (const key of requiredFields) {
      if (parameters[key] === "") {
        if (key === "coName" && parameters.contactedBy === "person") {
          continue;
        }
        newErrors[key] = true;
        fieldsCompleted = false;
        newErrors.count++;
      }
    }
    setError(newErrors);
    return fieldsCompleted;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = await validateForm();

    if (!isValid) {
      window.alert("Please complete all required fields before submitting.");
      return;
    }
    try {
      const { name, contactedBy, coName, message } = parameters;
      const phone = Number(parameters.phone);
      const prefix = Number(parameters.prefix);

      const res = await contactFormAction(
        name,
        prefix,
        phone,
        contactedBy,
        coName,
        message
      );

      if (res && typeof res === "object" && "success" in res && res.success) {
        window.alert(res.message);
      }
    } catch (err) {
      window.alert(String(err));
    }
  };

  return (
    <div className="flex flex-col gap-6" data-aos="zoom-out">
      <div className="flex flex-col gap-2">
        <span className="section-kicker">Contact</span>
        <h2 className="font-display text-3xl">Let's build something great</h2>
        <p className="text-sm text-slate-300">
          Tell me about your project, idea, or opportunity. I'll reply within 24-48 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <p className="text-sm text-slate-400">All fields are required</p>
          <button
            className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300 transition hover:border-white/30"
            type="button"
            onClick={resetAll}
          >
            Clear all
          </button>
        </div>

        <div>
          <label className="text-sm font-medium text-slate-200">Name</label>
          <input
            className={inputClass}
            id="name"
            type="text"
            name="name"
            placeholder="Your name"
            value={parameters.name}
            onChange={handleChange}
          />
          <span
            className={
              error.name ? "text-xs font-semibold text-red-400" : "hidden"
            }
          >
            This field is required
          </span>
        </div>

        <div>
          <label className="text-sm font-medium text-slate-200">Email</label>
          <input
            className={inputClass}
            id="email"
            type="email"
            name="email"
            placeholder="you@email.com"
            value={parameters.email}
            onChange={handleChange}
          />
          <span
            className={
              error.email ? "text-xs font-semibold text-red-400" : "hidden"
            }
          >
            This field is required
          </span>
        </div>

        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex-1">
            <label className="text-sm font-medium text-slate-200">Prefix</label>
            <input
              className={inputClass}
              id="prefix"
              type="number"
              name="prefix"
              placeholder="+57"
              value={parameters.prefix}
              onChange={handleChange}
            />
            <span
              className={
                error.prefix ? "text-xs font-semibold text-red-400" : "hidden"
              }
            >
              This field is required
            </span>
          </div>

          <div className="flex-[2]">
            <label className="text-sm font-medium text-slate-200">Phone</label>
            <input
              className={inputClass}
              id="phone"
              type="number"
              name="phone"
              placeholder="Phone number"
              value={parameters.phone}
              onChange={handleChange}
            />
            <span
              className={
                error.phone ? "text-xs font-semibold text-red-400" : "hidden"
              }
            >
              This field is required
            </span>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-slate-200">Contact as</label>
          <div className="mt-2 flex flex-col gap-2">
            <label className="flex items-center gap-2 text-sm text-slate-200">
              <input
                type="radio"
                className="accent-blue-400"
                name="contactedBy"
                value="person"
                checked={parameters.contactedBy === "person"}
                onChange={handleChange}
                id="person"
              />
              Person
            </label>

            <label className="flex items-center gap-2 text-sm text-slate-200">
              <input
                type="radio"
                className="accent-blue-400"
                name="contactedBy"
                value="organization"
                checked={parameters.contactedBy === "organization"}
                onChange={handleChange}
                id="organization"
              />
              Organization
            </label>
          </div>
          <span
            className={
              error.contactedBy
                ? "text-xs font-semibold text-red-400"
                : "hidden"
            }
          >
            This field is required
          </span>
        </div>

        <div className={parameters.contactedBy === "organization" ? "" : "hidden"}>
          <label className="text-sm font-medium text-slate-200">Company name</label>
          <input
            className={inputClass}
            id="coName"
            type="text"
            name="coName"
            placeholder="Company or organization"
            value={parameters.coName}
            onChange={handleChange}
          />
          <span
            className={
              error.coName ? "text-xs font-semibold text-red-400" : "hidden"
            }
          >
            This field is required
          </span>
        </div>

        <div>
          <label className="text-sm font-medium text-slate-200">Message</label>
          <textarea
            className={`${inputClass} min-h-[140px]`}
            id="message"
            name="message"
            placeholder="Share the details of what you need"
            value={parameters.message}
            onChange={handleChange}
          />
          <span
            className={
              error.message ? "text-xs font-semibold text-red-400" : "hidden"
            }
          >
            This field is required
          </span>
        </div>

        <button
          type="submit"
          className="rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:opacity-90"
        >
          Send message
        </button>
      </form>
    </div>
  );
}
