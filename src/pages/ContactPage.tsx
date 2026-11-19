import React, { useEffect, useState } from 'react';
import { CheckCircle2, MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { OFFICE_DIRECTORY, STUDIO_CONTACT } from '../data/architectureData';
import { BlueprintGeometry } from '../components/BlueprintGeometry';

interface ContactPageProps {
  prefilledSubject?: string;
}

interface InquiryFormState {
  fullName: string;
  email: string;
  phone: string;
  plotLocation: string;
  projectType: string;
  plotArea: string;
  budgetRange: string;
  consultationMode: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  plotLocation?: string;
  message?: string;
}

const INITIAL_FORM: InquiryFormState = {
  fullName: '',
  email: '',
  phone: '',
  plotLocation: 'Bhubaneswar — Khandagiri',
  projectType: 'Ground-Up Private Residence / Villa',
  plotArea: '4,000 – 7,500 sq.ft.',
  budgetRange: '₹2.5 Cr – ₹5.0 Cr',
  consultationMode: 'In-Person at Khandagiri Studio',
  message: '',
};

export const ContactPage: React.FC<ContactPageProps> = ({ prefilledSubject }) => {
  const [form, setForm] = useState<InquiryFormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [submittedSnapshot, setSubmittedSnapshot] = useState<InquiryFormState | null>(null);

  useEffect(() => {
    if (prefilledSubject) {
      setForm((prev) => ({
        ...prev,
        message: `Regarding architectural reference: ${prefilledSubject}. I would like to schedule a consultation at the Khandagiri studio to discuss our upcoming residential project.`,
      }));
      setSubmittedRef(null);
    }
  }, [prefilledSubject]);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!form.fullName.trim() || form.fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter your full name.';
    }
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = 'Please provide a valid email address.';
    }
    if (!form.phone.trim() || form.phone.replace(/\D/g, '').length < 8) {
      nextErrors.phone = 'Please enter a valid contact telephone number.';
    }
    if (!form.plotLocation.trim()) {
      nextErrors.plotLocation = 'Please indicate your plot or residence location.';
    }
    if (!form.message.trim() || form.message.trim().length < 15) {
      nextErrors.message = 'Please share a brief overview of your site and residential requirements (at least 15 characters).';
    }
    return nextErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    setSubmittedRef(`ABC-BBSR-${new Date().getFullYear()}-${randomCode}`);
    setSubmittedSnapshot({ ...form });
  };

  const handleReset = () => {
    setForm(INITIAL_FORM);
    setErrors({});
    setSubmittedRef(null);
    setSubmittedSnapshot(null);
  };

  return (
    <div className="bg-white pt-16 text-[#080808]">
      {/* Dark Architectural Header */}
      <section className="relative overflow-hidden border-b border-[#E5E5E5] bg-[#080808] text-white">
        <BlueprintGeometry variant="hero" theme="dark" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 bg-[#C5A059]" aria-hidden="true" />
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#C5A059]">
              07. Contact & Studio Inquiries
            </span>
          </div>
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <h1 className="lg:col-span-7 text-4xl sm:text-5xl md:text-6xl font-light uppercase tracking-[0.04em] leading-[1.06] text-balance">
              Khandagiri, Bhubaneswar Studio Headquarters.
            </h1>
            <p className="lg:col-span-5 text-sm leading-relaxed text-white/65">
              Schedule a private consultation at our Khandagiri studio, request a plot feasibility review in Bhubaneswar, or submit your residential brief directly below.
            </p>
          </div>
        </div>
      </section>

      {/* Main Split: Left Khandagiri Studio Details & Schematic Map | Right Responsive Inquiry Form */}
      <section className="border-b border-[#E5E5E5]">
        <div className="mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column: Khandagiri, Bhubaneswar HQ Details & Blueprint Precinct Schematic */}
          <div className="lg:col-span-5 lg:border-r border-[#E5E5E5] bg-[#F7F7F5] flex flex-col justify-between">
            <div className="p-6 py-10 md:p-10 space-y-8">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#9B7B3A]">
                  Principal Studio Address
                </span>
                <h2 className="mt-3 text-xl font-medium uppercase tracking-[0.12em] text-[#080808]">
                  ABC Architecture — Bhubaneswar
                </h2>
                <div className="mt-5 space-y-4 border-t border-[#E5E5E5] pt-5 text-sm">
                  <div className="flex items-start gap-3.5">
                    <MapPin className="mt-0.5 h-4 w-4 text-[#C5A059] shrink-0" strokeWidth={1.5} />
                    <div className="text-[#080808] leading-relaxed">
                      <p className="font-medium">{STUDIO_CONTACT.addressLine1}</p>
                      <p>{STUDIO_CONTACT.addressLine2}</p>
                      <p className="text-[#696969]">{STUDIO_CONTACT.statePin}</p>
                      <p className="mt-1 font-mono text-[11px] text-[#696969] tabular-nums">
                        {STUDIO_CONTACT.coordinates}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Phone className="mt-0.5 h-4 w-4 text-[#C5A059] shrink-0" strokeWidth={1.5} />
                    <div className="font-mono text-xs space-y-1 tabular-nums text-[#080808]">
                      <p>{STUDIO_CONTACT.phone} (Studio Reception)</p>
                      <p className="text-[#696969]">{STUDIO_CONTACT.mobile} (Principal Desk)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Mail className="mt-0.5 h-4 w-4 text-[#C5A059] shrink-0" strokeWidth={1.5} />
                    <div className="text-xs space-y-1 text-[#080808]">
                      <p>{STUDIO_CONTACT.email}</p>
                      <p className="text-[#696969]">{STUDIO_CONTACT.pressEmail}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Clock className="mt-0.5 h-4 w-4 text-[#C5A059] shrink-0" strokeWidth={1.5} />
                    <p className="text-xs text-[#696969]">{STUDIO_CONTACT.hours}</p>
                  </div>
                </div>
              </div>

              {/* Minimalist Khandagiri Bhubaneswar Precinct Blueprint Map */}
              <div className="border border-[#E5E5E5] bg-[#080808] p-5 text-white">
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-white/55 mb-3">
                  <span>PRECINCT PLAN — KHANDAGIRI, BBSR</span>
                  <span className="text-[#C5A059]">SCALE 1:5000</span>
                </div>
                <svg
                  viewBox="0 0 420 240"
                  className="w-full h-auto border border-white/15 bg-[#0D0D0D]"
                  role="img"
                  aria-label="Schematic architectural street blueprint of ABC Architecture in Khandagiri Vihar, Bhubaneswar"
                >
                  {/* Grid lines */}
                  {[70, 140, 210, 280, 350].map((x) => (
                    <line key={x} x1={x} y1="0" x2={x} y2="240" stroke="rgba(255,255,255,0.06)" strokeWidth="0.75" />
                  ))}
                  {[60, 120, 180].map((y) => (
                    <line key={y} x1="0" y1={y} x2="420" y2={y} stroke="rgba(255,255,255,0.06)" strokeWidth="0.75" />
                  ))}
                  {/* NH-16 Highway Diagonal Axis */}
                  <line x1="20" y1="220" x2="400" y2="55" stroke="rgba(255,255,255,0.28)" strokeWidth="2.2" />
                  <text x="260" y="102" fill="rgba(255,255,255,0.45)" fontSize="9" fontFamily="IBM Plex Mono, monospace">
                    NH-16 / KHANDAGIRI SQ
                  </text>
                  {/* Khandagiri Hills Contours */}
                  <ellipse cx="105" cy="92" rx="64" ry="38" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="0.8" />
                  <ellipse cx="105" cy="92" rx="42" ry="24" fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="0.7" />
                  <text x="58" y="96" fill="rgba(255,255,255,0.5)" fontSize="8.5" fontFamily="IBM Plex Mono, monospace">
                    KHANDAGIRI HILLS
                  </text>
                  {/* Khandagiri Vihar Approach Road */}
                  <line x1="210" y1="138" x2="210" y2="225" stroke="rgba(197,160,89,0.5)" strokeWidth="1.2" strokeDasharray="3 3" />
                  {/* Studio HQ Pin */}
                  <circle cx="210" cy="172" r="24" fill="none" stroke="rgba(197,160,89,0.35)" strokeWidth="0.8" />
                  <circle cx="210" cy="172" r="10" fill="none" stroke="#C5A059" strokeWidth="1" />
                  <circle cx="210" cy="172" r="4" fill="#C5A059" />
                  <text x="228" y="170" fill="#C5A059" fontSize="10" fontFamily="IBM Plex Mono, monospace" fontWeight="500">
                    ABC ARCHITECTURE HQ
                  </text>
                  <text x="228" y="183" fill="rgba(255,255,255,0.65)" fontSize="8.5" fontFamily="IBM Plex Mono, monospace">
                    PLOT 42, KHANDAGIRI VIHAR
                  </text>
                </svg>
                <p className="mt-3 text-[11px] text-white/60">
                  15 minutes from Biju Patnaik International Airport (BBI), directly accessible from Khandagiri Square off NH-16.
                </p>
              </div>
            </div>

            {/* Regional Offices Compact List */}
            <div className="border-t border-[#E5E5E5] bg-white p-6 md:p-10">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#696969]">
                Regional Project Desks
              </span>
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs uppercase tracking-[0.12em] text-[#080808]">
                {OFFICE_DIRECTORY.filter((o) => !o.isHQ).map((o) => (
                  <span key={o.id}>{o.city}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Responsive Commission Inquiry Form */}
          <div className="lg:col-span-7 p-6 py-10 md:p-12 lg:p-16 bg-white">
            {submittedRef && submittedSnapshot ? (
              <div className="border border-[#080808] bg-[#F7F7F5] p-8 md:p-12">
                <div className="flex items-center gap-3 text-[#080808]">
                  <CheckCircle2 className="h-6 w-6 text-[#C5A059]" strokeWidth={1.5} />
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#9B7B3A]">
                    Inquiry Registered
                  </span>
                </div>

                <h2 className="mt-5 text-2xl sm:text-3xl font-light uppercase tracking-[0.06em] text-[#080808]">
                  Your Residential Brief Has Been Received.
                </h2>

                <p className="mt-4 text-sm leading-relaxed text-[#696969]">
                  Thank you, <strong className="font-medium text-[#080808]">{submittedSnapshot.fullName}</strong>. A senior architect at our Khandagiri, Bhubaneswar studio will review your project parameters and respond within one business day.
                </p>

                <div className="mt-8 border-t border-b border-[#E5E5E5] bg-white divide-y divide-[#E5E5E5] text-xs">
                  <div className="grid grid-cols-12 px-4 py-3 gap-2">
                    <span className="col-span-4 font-mono uppercase tracking-[0.14em] text-[#696969]">
                      DOSSIER REF
                    </span>
                    <span className="col-span-8 font-mono font-medium tabular-nums text-[#9B7B3A]">
                      {submittedRef}
                    </span>
                  </div>
                  <div className="grid grid-cols-12 px-4 py-3 gap-2">
                    <span className="col-span-4 font-mono uppercase tracking-[0.14em] text-[#696969]">
                      PROJECT TYPE
                    </span>
                    <span className="col-span-8 text-[#080808]">{submittedSnapshot.projectType}</span>
                  </div>
                  <div className="grid grid-cols-12 px-4 py-3 gap-2">
                    <span className="col-span-4 font-mono uppercase tracking-[0.14em] text-[#696969]">
                      LOCATION
                    </span>
                    <span className="col-span-8 text-[#080808]">{submittedSnapshot.plotLocation}</span>
                  </div>
                  <div className="grid grid-cols-12 px-4 py-3 gap-2">
                    <span className="col-span-4 font-mono uppercase tracking-[0.14em] text-[#696969]">
                      EST. BUDGET
                    </span>
                    <span className="col-span-8 font-mono tabular-nums text-[#080808]">
                      {submittedSnapshot.budgetRange}
                    </span>
                  </div>
                  <div className="grid grid-cols-12 px-4 py-3 gap-2">
                    <span className="col-span-4 font-mono uppercase tracking-[0.14em] text-[#696969]">
                      MEETING MODE
                    </span>
                    <span className="col-span-8 text-[#080808]">{submittedSnapshot.consultationMode}</span>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="border border-[#080808] bg-[#080808] px-6 py-3 text-xs font-medium uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#C5A059] hover:border-[#C5A059] hover:text-[#080808] cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                  <span className="font-mono text-[11px] text-[#696969]">
                    Direct Hotline: {STUDIO_CONTACT.phone}
                  </span>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between gap-4 border-b border-[#E5E5E5] pb-5">
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#9B7B3A]">
                      Commission Dossier Form
                    </span>
                    <h2 className="mt-2 text-2xl font-light uppercase tracking-[0.06em] text-[#080808]">
                      Request a Residential Consultation
                    </h2>
                  </div>
                  <span className="hidden sm:inline font-mono text-[11px] text-[#696969]">
                    RESPONSE &lt; 24 HRS
                  </span>
                </div>

                <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block font-mono text-[11px] uppercase tracking-[0.16em] text-[#080808]"
                      >
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        value={form.fullName}
                        onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                        placeholder="e.g. Debashis Mohanty"
                        className={`mt-2 w-full border px-4 py-3 text-sm text-[#080808] bg-white placeholder:text-[#696969]/60 focus:outline-none ${
                          errors.fullName ? 'border-red-700' : 'border-[#E5E5E5] focus:border-[#C5A059]'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1.5 text-xs text-red-700" role="alert">
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block font-mono text-[11px] uppercase tracking-[0.16em] text-[#080808]"
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="name@domain.com"
                        className={`mt-2 w-full border px-4 py-3 text-sm text-[#080808] bg-white placeholder:text-[#696969]/60 focus:outline-none ${
                          errors.email ? 'border-red-700' : 'border-[#E5E5E5] focus:border-[#C5A059]'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-red-700" role="alert">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block font-mono text-[11px] uppercase tracking-[0.16em] text-[#080808]"
                      >
                        Phone / WhatsApp *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 98610 XXXXX"
                        className={`mt-2 w-full border px-4 py-3 font-mono text-sm text-[#080808] bg-white placeholder:text-[#696969]/60 focus:outline-none ${
                          errors.phone ? 'border-red-700' : 'border-[#E5E5E5] focus:border-[#C5A059]'
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1.5 text-xs text-red-700" role="alert">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="plotLocation"
                        className="block font-mono text-[11px] uppercase tracking-[0.16em] text-[#080808]"
                      >
                        Plot / Site Location *
                      </label>
                      <input
                        id="plotLocation"
                        name="plotLocation"
                        type="text"
                        required
                        value={form.plotLocation}
                        onChange={(e) => setForm({ ...form, plotLocation: e.target.value })}
                        placeholder="Khandagiri / Patia / Chandaka / Other"
                        className={`mt-2 w-full border px-4 py-3 text-sm text-[#080808] bg-white placeholder:text-[#696969]/60 focus:outline-none ${
                          errors.plotLocation ? 'border-red-700' : 'border-[#E5E5E5] focus:border-[#C5A059]'
                        }`}
                      />
                      {errors.plotLocation && (
                        <p className="mt-1.5 text-xs text-red-700" role="alert">
                          {errors.plotLocation}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="projectType"
                        className="block font-mono text-[11px] uppercase tracking-[0.16em] text-[#080808]"
                      >
                        Commission Typology
                      </label>
                      <select
                        id="projectType"
                        value={form.projectType}
                        onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                        className="mt-2 w-full border border-[#E5E5E5] bg-white px-4 py-3 text-sm text-[#080808] focus:border-[#C5A059] focus:outline-none"
                      >
                        <option>Ground-Up Private Residence / Villa</option>
                        <option>Courtyard / Multigenerational Home</option>
                        <option>Hillside or Weekend Pavilion</option>
                        <option>Luxury Penthouse / Interior Architecture</option>
                        <option>Pre-Purchase Plot Feasibility Study</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="plotArea"
                        className="block font-mono text-[11px] uppercase tracking-[0.16em] text-[#080808]"
                      >
                        Approximate Built Area
                      </label>
                      <select
                        id="plotArea"
                        value={form.plotArea}
                        onChange={(e) => setForm({ ...form, plotArea: e.target.value })}
                        className="mt-2 w-full border border-[#E5E5E5] bg-white px-4 py-3 text-sm text-[#080808] focus:border-[#C5A059] focus:outline-none"
                      >
                        <option>Under 4,000 sq.ft.</option>
                        <option>4,000 – 7,500 sq.ft.</option>
                        <option>7,500 – 12,000 sq.ft.</option>
                        <option>12,000+ sq.ft. Estate</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="budgetRange"
                        className="block font-mono text-[11px] uppercase tracking-[0.16em] text-[#080808]"
                      >
                        Target Construction Budget
                      </label>
                      <select
                        id="budgetRange"
                        value={form.budgetRange}
                        onChange={(e) => setForm({ ...form, budgetRange: e.target.value })}
                        className="mt-2 w-full border border-[#E5E5E5] bg-white px-4 py-3 text-sm text-[#080808] focus:border-[#C5A059] focus:outline-none"
                      >
                        <option>₹1.5 Cr – ₹2.5 Cr</option>
                        <option>₹2.5 Cr – ₹5.0 Cr</option>
                        <option>₹5.0 Cr – ₹10.0 Cr</option>
                        <option>₹10.0 Cr+ Custom Estate</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="consultationMode"
                        className="block font-mono text-[11px] uppercase tracking-[0.16em] text-[#080808]"
                      >
                        Preferred Consultation
                      </label>
                      <select
                        id="consultationMode"
                        value={form.consultationMode}
                        onChange={(e) => setForm({ ...form, consultationMode: e.target.value })}
                        className="mt-2 w-full border border-[#E5E5E5] bg-white px-4 py-3 text-sm text-[#080808] focus:border-[#C5A059] focus:outline-none"
                      >
                        <option>In-Person at Khandagiri Studio</option>
                        <option>On-Site Plot Inspection (Bhubaneswar)</option>
                        <option>Video Architecture Review (NRI / Outstation)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block font-mono text-[11px] uppercase tracking-[0.16em] text-[#080808]"
                    >
                      Project Brief & Timeline *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Share plot orientation, number of bedrooms/levels, courtyard or Vastu priorities, and target start quarter..."
                      className={`mt-2 w-full border px-4 py-3 text-sm text-[#080808] bg-white placeholder:text-[#696969]/60 focus:outline-none ${
                        errors.message ? 'border-red-700' : 'border-[#E5E5E5] focus:border-[#C5A059]'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-red-700" role="alert">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#E5E5E5] pt-6">
                    <p className="text-xs text-[#696969]">
                      Confidential architectural review. No third-party data sharing.
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-3 border border-[#080808] bg-[#080808] px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#C5A059] hover:bg-[#C5A059] hover:text-[#080808] cursor-pointer whitespace-nowrap"
                    >
                      <span>Submit Studio Inquiry</span>
                      <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
