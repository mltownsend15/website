import { siteConfig } from "@/lib/site-config";
import React from "react";

interface InsuranceListProps {
    title?: string;
    className?: string;
    itemClassName?: string;
    highlightMolinaNote?: boolean; // keeps special wording for Molina
}

/**
 * Reusable insurance list block.
 * Pass a custom `title` to change the heading text.
 */
export function InsuranceList({
    title = "Accepted Insurances",
    className = "bg-white rounded-lg p-8 shadow-sm",
    itemClassName = "p-3 bg-gray-50 rounded-lg",
    highlightMolinaNote = true,
}: InsuranceListProps) {
    return (
        <div className={className}>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                {title}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pb-4 text-center">
                {siteConfig.insurance.map((insurer, index) => {
                    let label = insurer;
                    if (highlightMolinaNote) {
                        if (insurer.toLowerCase().startsWith("molina")) {
                            label = "Molina - Autism Evaluations only";
                        }
                        if (insurer.toLowerCase() === "assuris") {
                            // normalize spelling if needed
                            label = "Asuris"; // Display friendly name
                        }
                    }
                    return (
                        <div key={index} className={itemClassName}>
                            <span className="text-sm font-medium text-gray-800">
                                {label}
                            </span>
                        </div>
                    );
                })}
            </div>
            <div className="flex justify-center">
                <h4 className="font-semibold text-gray-900 m-6 py-2 px-10 text-center bg-emerald-100 rounded-md">
                    Autism and Psychiatric Assessments Only
                </h4>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                {siteConfig.add_insurance.map((insurer, index) => {
                    let label = insurer;
                    return (
                        <div key={index} className={itemClassName}>
                            <span className="text-sm font-medium text-gray-800">
                                {label}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
