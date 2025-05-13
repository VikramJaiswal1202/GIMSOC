"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

type FAQItemProps = {
    question: string
    answer: string
    index: number
}

function FAQItem({ question, answer, index }: FAQItemProps) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="border-b border-gray-200 dark:border-gray-800">
            <button
                className="flex justify-between items-center w-full py-4 text-left  rounded-md"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
            >
                {/* Increased width for question text */}
                <span className="text-lg font-medium w-[90%] sm:w-[95%]">{question}</span>
                <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isOpen ? "transform rotate-180" : ""}`}
                />
            </button>
            <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0"}`}
                aria-hidden={!isOpen}
            >
                <p className="text-gray-600 dark:text-gray-400">{answer}</p>
            </div>
        </div>
    )
}

export default function FAQSection() {
    const faqItems = [
        {
            question: "How do I create an account?",
            answer:
                'To create an account, click on the "Sign Up" button in the top right corner of our website. Fill in your details in the registration form and click "Create Account". You\'ll receive a confirmation email to verify your account.',
        },
        {
            question: "What payment methods do you accept?",
            answer:
                "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. For enterprise customers, we also offer invoice-based payments with net-30 terms.",
        },
        {
            question: "Can I cancel my subscription at any time?",
            answer:
                "Yes, you can cancel your subscription at any time from your account settings. There are no cancellation fees. If you cancel, you'll still have access to your subscription until the end of your current billing period.",
        },
        {
            question: "How can I contact customer support?",
            answer:
                "Our customer support team is available 24/7. You can reach us via email at support@example.com, through the live chat on our website, or by phone at +1 (555) 123-4567. We typically respond to all inquiries within 24 hours.",
        },
        {
            question: "Do you offer refunds?",
            answer:
                "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with our service within the first 30 days, you can request a full refund. Please contact our customer support team to process your refund request.",
        },
    ]

    return (
        <div className="w-full max-w-5xl mx-auto p-8">
            <h1 className="text-6xl font-bold text-center mb-8 bg-gradient-to-b from-heading2 to-heading bg-clip-text text-transparent">
                Frequently Asked Questions
            </h1>

            <div className="rounded-xl p-[2px] bg-gradient-to-r from-sky-300/50 to-sky-300/30 shadow-[0_0_15px_rgba(14,165,233,0.5)]">
                <div className="bg-white dark:bg-gray-950 rounded-xl p-6">
                    <div className="w-full">
                        {faqItems.map((item, index) => (
                            <FAQItem key={index} question={item.question} answer={item.answer} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
