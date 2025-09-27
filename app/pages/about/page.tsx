'use client'

import { useState } from 'react'
import './about.css'
import Img from '@/app/assets/custom-components/Image'

// ----- ProfileCard -----
interface ProfileCardProps {
    description: string
}

const ProfileCard = ({ description }: ProfileCardProps) => {
    return (
        <div className="profile-card">
            <div className="profile-card-main">
                <Img
                    src="https://r2.mcpedl.com/users/967795/d44e5a9bb55b9934557d4c27328efb44.png"
                    alt="pfp"
                />
            </div>
            <div className="profile-card-footer">
                <p>{description}</p>
            </div>
        </div>
    )
}

// ----- TsValues -----
interface TsValuesProps {
    rank: "Beginner" | "Pre-Intermediate" | "Intermediate" | "Advanced" | "Professional"
}

const TsValues = ({ rank }: TsValuesProps) => {
    const ranks = {
        "Beginner": 1,
        "Pre-Intermediate": 2,
        "Intermediate": 3,
        "Advanced": 4,
        "Professional": 5
    } as const

    const valueCount = ranks[rank] || 1

    return (
        <>
            {[...Array(5)].map((_, i) => (
                <div key={i} className={i < valueCount ? "value-1" : "value-0"}></div>
            ))}
        </>
    )
}

// ----- TsWrapper -----
interface TsWrapperProps {
    name?: string
    rank?: TsValuesProps["rank"]
}

const TsWrapper = ({ name = "Unknown", rank = "Beginner" }: TsWrapperProps) => {
    return (
        <div className="ts-wrapper">
            <p>{name} - {rank}</p>
            <div className="ts-renderer">
                <Img
                    src={`/svgs/${name}.svg`}
                    alt={name}
                />
                <TsValues rank={rank} />
            </div>
        </div>
    )
}

// ----- FAQCard -----
interface FAQCardProps {
    description: string
    question: string
}

const FAQCard = ({ description, question }: FAQCardProps) => {
    const [open, setOpen] = useState(false)

    return (
        <div className="faq-card-item">
            <label htmlFor={question} className="faq-button">
                <p>{question}</p>
                <span className="faq-button-icon">
                    <p>{open ? "-" : "+"}</p>
                </span>
            </label>
            <input
                className="faq-checkbox"
                type="checkbox"
                name="faq-radio"
                id={question}
                onChange={() => setOpen(prev => !prev)}
            />
            <div className="faq-description">
                {open && <p>{description}</p>}
            </div>
        </div>
    )
}

// ----- About Page -----
const About = () => {
    const faqData = [
        {
            question: "What is this project?",
            answer: "This project is a demonstration of a React application with a profile page."
        },
        {
            question: "How can I contribute?",
            answer: "You can contribute by submitting pull requests or reporting issues on the GitHub repository."
        },
        {
            question: "Who is the author?",
            answer: "The author of this project is a passionate developer who loves coding."
        }
    ]

    return (
        <div className="profile-page">
            <ProfileCard
                description={`Hello!
        I'm a Minecraft mod creator and also a web developer, I love to create cool and useful projects.
        This website was made using React.`}
            />

            <div className="ts-card">
                <div className="ts-card-header">
                    <p>Tech Stack</p>
                </div>
                <div className="ts-card-main">
                    <TsWrapper name="JSON UI" rank="Advanced" />
                    <TsWrapper name="CSS" rank="Advanced" />
                    <TsWrapper name="JavaScript" rank="Intermediate" />
                    <TsWrapper name="React" rank="Intermediate" />
                    <TsWrapper name="C++" rank="Beginner" />
                </div>
            </div>

            <div className="faq-card">
                <div className="faq-card-header">
                    <p>FAQ&apos;s</p>
                </div>
                <div className="faq-card-main">
                    {faqData.map(faq => (
                        <FAQCard
                            key={faq.question}
                            question={faq.question}
                            description={faq.answer}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About
