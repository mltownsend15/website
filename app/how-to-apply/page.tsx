import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/lib/site-config";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { XCircle, Users, CreditCard, FileText, Pill } from "lucide-react";

export default function HowToApplyPage() {
    return (
        <div className="min-h-screen">
            <Navigation />

            {/* Hero Section */}
            <div className="bg-gradient-to-r from-emerald-300 to-emerald-400 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold text-white mb-6">
                        How to Get Started
                    </h1>
                    <p className="text-xl text-white mb-8 opacity-90">
                        If you are {siteConfig.eligibility.ageRange}, have a
                        mental health or developmental concern, and are
                        interested in joining Townsend Medical Services, please
                        fill out the &apos;prospective patient&apos; form.
                    </p>
                    <Button
                        size="lg"
                        className="bg-emerald-300 hover:bg-emerald-400 text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-200 min-w-[160px]"
                        asChild
                    >
                        <a
                            href="https://www.valant.io/prospectivepatient/TownsendMedicalServicesPLLC"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Apply Here
                        </a>
                    </Button>
                </div>
            </div>

            <div className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Process Steps */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                            Application Process
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <Card>
                                <CardHeader>
                                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                                        <Users className="w-6 h-6 text-emerald-300" />
                                    </div>
                                    <CardTitle className="text-xl">
                                        Step 1: New Clients
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 mb-4">
                                        Complete the prospective patient
                                        application form. We&apos;ll review your
                                        information and contact you about next
                                        steps.
                                    </p>
                                    <ul className="text-sm text-gray-500 space-y-1">
                                        <li>• Fill out intake forms</li>
                                        <li>• Provide insurance information</li>
                                        <li>• Schedule initial consultation</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                                        <FileText className="w-6 h-6 text-emerald-300" />
                                    </div>
                                    <CardTitle className="text-xl">
                                        Step 2: Insured Clients
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 mb-4">
                                        After hearing back from you, we&apos;ll
                                        fill out insurance information on
                                        Headway. Look for directions on how to
                                        enroll in our user-friendly MYO App.
                                    </p>
                                    <Button
                                        className="w-full bg-emerald-300 hover:bg-emerald-400 text-white mt-4"
                                        asChild
                                    >
                                        <a
                                            href="https://care.headway.co/providers/miranda-townsend?utm_source=pem&utm_medium=direct_link&utm_campaign=101187"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Book with Headway
                                        </a>
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                                        <CreditCard className="w-6 h-6 text-emerald-300" />
                                    </div>
                                    <CardTitle className="text-xl">
                                        Step 3: Cash Pay Clients
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 mb-4">
                                        After hearing back from you, we will
                                        receive directions on how to use the
                                        user-friendly MYO App for scheduling and
                                        payments.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* What is Medication Management */}
                    <Card className="mb-12">
                        <CardContent className="p-8">
                            <div className="md:flex items-center">
                                <div className="md:w-1/3 mb-6 md:mb-0">
                                    <div className="w-32 h-32 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                                        <Pill className="w-16 h-16 text-emerald-300" />
                                    </div>
                                </div>
                                <div className="md:w-2/3 md:pl-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                        What is Medication Management?
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Psychiatric medication management is the
                                        process of evaluating and treating
                                        mental health conditions with the use of
                                        medication. The act of prescribing
                                        medications is thought of as a practice
                                        or an art. During our appointments we
                                        will explore symptoms through talking or
                                        filling out rating scales. We identify
                                        clusters of symptoms and categorize them
                                        into diagnoses. Then we target those
                                        diagnoses with interventions like
                                        medication(s) and counseling. The first
                                        meeting is an hour long but follow up
                                        appointments are 30 minutes- an hour.
                                        People can use this service briefly, for
                                        a few months or long term, for a few
                                        years. We may meet as frequently as
                                        weekly or as infrequently as the minimum
                                        requirement of meeting every three
                                        months. Meeting every three months
                                        ensures that your care is as up to date
                                        as possible.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Services Not Offered */}
                    <Card className="bg-red-50 border-red-200">
                        <CardHeader>
                            <CardTitle className="text-xl text-red-800 flex items-center">
                                <XCircle className="w-6 h-6 mr-2" />
                                Services Not Offered
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="text-red-700 space-y-2">
                                <li>
                                    1. It is beyond the scope of my practice to
                                    consult, provide expert witness, or to
                                    participate in placement decisions of a
                                    youth in legal proceedings such as in the
                                    case of divorce.
                                </li>
                                <li>
                                    2. Therapy without medication management.
                                </li>
                                <li>3. I do not prescribe benzodiazepines.</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <Footer />
        </div>
    );
}
