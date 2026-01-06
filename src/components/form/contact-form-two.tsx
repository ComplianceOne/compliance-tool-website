"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMsg from "../error-msg";

interface FormData {
    fullName: string;
    email: string;
    companyName: string;
    jobTitle: string;
    phone?: string;
    contactReason: string[];
    frameworks: string[];
    complianceJourney: string;
    documentationStatus: string;
    biggestChallenge: string;
    companySize?: string;
    source?: string;
}

// Create a validation schema using yup
const schema = yup.object().shape({
    fullName: yup.string().required("Full Name is required"),
    email: yup
        .string()
        .email("Invalid email format")
        .required("Work Email is required"),
    companyName: yup.string().required("Company Name is required"),
    jobTitle: yup.string().required("Job Title is required"),
    phone: yup.string(),
    contactReason: yup
        .array()
        .of(yup.string().required())
        .min(1, "Please select at least one option")
        .required("This field is required"),
    frameworks: yup
        .array()
        .of(yup.string().required())
        .min(1, "Please select at least one framework")
        .required("This field is required"),
    complianceJourney: yup.string().required("This field is required"),
    documentationStatus: yup.string().required("This field is required"),
    biggestChallenge: yup.string().required("This field is required"),
    companySize: yup.string(),
    source: yup.string(),
});

const ContactFormTwo = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schema),
        defaultValues: {
            contactReason: [],
            frameworks: [],
        },
    });

    const onSubmit = handleSubmit(async (data: FormData) => {
        setIsSubmitting(true);
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Failed to send message");
            }

            // alert(result.message);
            reset();
        } catch (error) {
            const errorMessage =
                error instanceof Error
                    ? error.message
                    : "An unexpected error occurred.";
            // alert(errorMessage);
            console.error("Error submitting form:", errorMessage);
        } finally {
            setIsSubmitting(false);
        }
    });

    return (
        <form onSubmit={onSubmit} noValidate>
            <div className="it-contact-input-wrap">
                <div className="row gx-20">
                    {/* Contact Details */}
                    <div className="col-md-6 col-sm-6">
                        <div className="it-contact-input-box mb-15">
                            <label>Full Name*</label>
                            <input
                                type="text"
                                placeholder="Full Name"
                                {...register("fullName")}
                            />
                            <ErrorMsg msg={errors.fullName?.message || ""} />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <div className="it-contact-input-box mb-15">
                            <label>Work Email*</label>
                            <input
                                type="email"
                                placeholder="Work Email"
                                {...register("email")}
                                style={{ textTransform: "none" }}
                            />
                            <ErrorMsg msg={errors.email?.message || ""} />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <div className="it-contact-input-box mb-15">
                            <label>Company Name*</label>
                            <input
                                type="text"
                                placeholder="Company Name"
                                {...register("companyName")}
                            />
                            <ErrorMsg msg={errors.companyName?.message || ""} />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <div className="it-contact-input-box mb-15">
                            <label>Job Title / Role*</label>
                            <input
                                type="text"
                                placeholder="Job Title"
                                {...register("jobTitle")}
                            />
                            <ErrorMsg msg={errors.jobTitle?.message || ""} />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <div className="it-contact-input-box mb-15">
                            <label>Phone Number (Optional)</label>
                            <input
                                type="text"
                                placeholder="Phone Number"
                                {...register("phone")}
                            />
                            <ErrorMsg msg={errors.phone?.message || ""} />
                        </div>
                    </div>

                    {/* Contact Reason - Multi-select */}
                    <div className="col-12">
                        <div className="mb-15">
                            <label
                                className="mb-10 d-block"
                                style={{
                                    fontWeight: 400,
                                    fontSize: "16px",
                                    color: "var(--it-common-black)",
                                }}
                            >
                                What are you contacting us about?*
                            </label>
                            <div className="mb-2">
                                {[
                                    "I’m interested in a ComplianceOne demo",
                                    "I want pricing information",
                                    "I need help with CMMC",
                                    "I need help with FedRAMP",
                                    "I need help with another framework",
                                    "Partnership / reseller opportunities",
                                    "General question",
                                ].map((option) => (
                                    <div
                                        key={option}
                                        className="form-check mb-2 d-flex align-items-center"
                                    >
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value={option}
                                            id={`reason-${option}`}
                                            {...register("contactReason")}
                                            style={{
                                                width: "18px",
                                                height: "18px",
                                                minWidth: "18px",
                                                padding: "0",
                                                marginTop: "0",
                                                marginRight: "10px",
                                                flexShrink: 0,
                                                cursor: "pointer",
                                            }}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor={`reason-${option}`}
                                            style={{
                                                fontSize: "16px",
                                                fontWeight: 400,
                                                cursor: "pointer",
                                                color: "var(--it-common-black)",
                                            }}
                                        >
                                            {option}
                                        </label>
                                    </div>
                                ))}
                            </div>
                            <ErrorMsg
                                msg={errors.contactReason?.message || ""}
                            />
                        </div>
                    </div>

                    {/* Frameworks - Multi-select */}
                    <div className="col-12">
                        <div className="mb-15">
                            <label
                                className="mb-10 d-block"
                                style={{
                                    fontWeight: 400,
                                    fontSize: "16px",
                                    color: "var(--it-common-black)",
                                }}
                            >
                                Which compliance frameworks are you working
                                toward?*
                            </label>
                            <div className="mb-2">
                                {[
                                    "CMMC 2.0",
                                    "FedRAMP (Low / Moderate / High)",
                                    "Other / Not sure",
                                ].map((option) => (
                                    <div
                                        key={option}
                                        className="form-check mb-2 d-flex align-items-center"
                                    >
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value={option}
                                            id={`framework-${option}`}
                                            {...register("frameworks")}
                                            style={{
                                                width: "18px",
                                                height: "18px",
                                                minWidth: "18px",
                                                padding: "0",
                                                marginTop: "0",
                                                marginRight: "10px",
                                                flexShrink: 0,
                                                cursor: "pointer",
                                            }}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor={`framework-${option}`}
                                            style={{
                                                fontSize: "16px",
                                                fontWeight: 400,
                                                cursor: "pointer",
                                                color: "var(--it-common-black)",
                                            }}
                                        >
                                            {option}
                                        </label>
                                    </div>
                                ))}
                            </div>
                            <ErrorMsg msg={errors.frameworks?.message || ""} />
                        </div>
                    </div>

                    {/* Compliance Journey - Single Choice */}
                    <div className="col-12">
                        <div className="it-contact-input-box mb-15">
                            <label>
                                Where are you in your compliance journey?*
                            </label>
                            <select
                                className="form-select mt-2"
                                style={{
                                    height: "50px",
                                    paddingLeft: "20px",
                                    borderRadius: "30px",
                                    borderColor: "var(--it-common-black)",
                                }}
                                {...register("complianceJourney")}
                            >
                                <option value="">Select option</option>
                                {[
                                    "Just getting started",
                                    "Gathering documentation",
                                    "Need a gap assessment",
                                    "Preparing for an audit",
                                    "Already compliant and want automation",
                                    "Just exploring options",
                                ].map((opt) => (
                                    <option key={opt} value={opt}>
                                        {opt}
                                    </option>
                                ))}
                            </select>
                            <ErrorMsg
                                msg={errors.complianceJourney?.message || ""}
                            />
                        </div>
                    </div>

                    {/* Documentation Status - Single Choice */}
                    <div className="col-12">
                        <div className="it-contact-input-box mb-15">
                            <label>
                                Do you already have documentation (SSP,
                                policies, procedures)?*
                            </label>
                            <select
                                className="form-select mt-2"
                                style={{
                                    height: "50px",
                                    paddingLeft: "20px",
                                    borderRadius: "30px",
                                    borderColor: "var(--it-common-black)",
                                }}
                                {...register("documentationStatus")}
                            >
                                <option value="">Select option</option>
                                {[
                                    "Yes, mostly in place",
                                    "Partially, only some documents exist",
                                    "No, starting from scratch",
                                    "Uncertain",
                                ].map((opt) => (
                                    <option key={opt} value={opt}>
                                        {opt}
                                    </option>
                                ))}
                            </select>
                            <ErrorMsg
                                msg={errors.documentationStatus?.message || ""}
                            />
                        </div>
                    </div>

                    {/* Biggest Challenge - Text Area */}
                    <div className="col-12">
                        <div className="it-contact-textarea-box mb-15">
                            <label>
                                What is your biggest compliance challenge right
                                now?*
                            </label>
                            <textarea
                                placeholder="Describe your current situation, key challenges, and what you’d like ComplianceOne to help you with."
                                {...register("biggestChallenge")}
                            ></textarea>
                            <ErrorMsg
                                msg={errors.biggestChallenge?.message || ""}
                            />
                        </div>
                    </div>

                    {/* Company Size - Optional */}
                    <div className="col-md-6 col-sm-6">
                        <div className="it-contact-input-box mb-15">
                            <label>Company Size (Optional)</label>
                            <select
                                className="form-select mt-2"
                                style={{
                                    height: "50px",
                                    paddingLeft: "20px",
                                    borderRadius: "30px",
                                    borderColor: "var(--it-common-black)",
                                }}
                                {...register("companySize")}
                            >
                                <option value="">Select option</option>
                                {[
                                    "1–10 employees",
                                    "11–50",
                                    "51–200",
                                    "201–500",
                                    "500+",
                                ].map((opt) => (
                                    <option key={opt} value={opt}>
                                        {opt}
                                    </option>
                                ))}
                            </select>
                            <ErrorMsg msg={errors.companySize?.message || ""} />
                        </div>
                    </div>

                    {/* Source - Optional */}
                    <div className="col-md-6 col-sm-6">
                        <div className="it-contact-input-box mb-15">
                            <label>
                                How did you hear about ComplianceOne? (Optional)
                            </label>
                            <select
                                className="form-select mt-2"
                                style={{
                                    height: "50px",
                                    paddingLeft: "20px",
                                    borderRadius: "30px",
                                    borderColor: "var(--it-common-black)",
                                }}
                                {...register("source")}
                            >
                                <option value="">Select option</option>
                                {[
                                    "Referral",
                                    "LinkedIn",
                                    "Web search",
                                    "Event / webinar",
                                    "Other",
                                ].map((opt) => (
                                    <option key={opt} value={opt}>
                                        {opt}
                                    </option>
                                ))}
                            </select>
                            <ErrorMsg msg={errors.source?.message || ""} />
                        </div>
                    </div>
                </div>
                <div className="it-contact-btn mt-25">
                    <button
                        type="submit"
                        className="it-btn"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Sending..." : "Send a Message"}
                    </button>
                </div>
            </div>
        </form>
    );
};
export default ContactFormTwo;
