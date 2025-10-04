'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import './styles/navigation.css';
import { DarkButton } from '../assets/templates/ore-ui/buttons/ore-ui-button';

const Navigation = () => {

    const [selected, setSelected] = useState("home")

    const navigateTo = useRouter()

    useEffect(() => {
        navigateTo.prefetch("/pages/about")
        navigateTo.prefetch("/pages/contact")
    }, [navigateTo])

    const toHome = () => {
        navigateTo.push("/")
        setSelected("home")
    }
    const toAbout = () => {
        navigateTo.push("/pages/about")
        setSelected("about")
    }
    const toTools = () => {
        navigateTo.push("/pages/tools")
        setSelected("tools")
    }
    const toContact = () => {
        navigateTo.push("/pages/contact")
        setSelected("contact")
    }

    return (
        <div>
            <nav>
                <h1>Bruhh&apos;s Project</h1>
                <input
                    type="checkbox"
                    id="show-navbar"
                />
                <div className="label-wrapper">
                    <input
                        type="radio"
                        name="navigation-radio"
                        id="home-radio"
                        onChange={toHome}
                        checked={selected === "home"}
                    />
                    <DarkButton
                        tagName="label"
                        secondClass="nav-button"
                        thirdClass="home-button"
                        buttonTextClass="home-button-text"
                        childElement={<div><p>Home</p><label id="close-menu" htmlFor="show-navbar"><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#ffffff"><path d="m251.33-204.67-46.66-46.66L433.33-480 204.67-708.67l46.66-46.66L480-526.67l228.67-228.66 46.66 46.66L526.67-480l228.66 228.67-46.66 46.66L480-433.33 251.33-204.67Z"/></svg></label></div>}
                        htmlFor="home-radio"
                    />
                    <input
                        type="radio"
                        name="navigation-radio"
                        id="tools-radio"
                        onChange={toTools}
                    />
                    <DarkButton
                        tagName="label"
                        thirdClass="tools-button"
                        secondClass="nav-button"
                        childElement={<p>Tools</p>}
                        htmlFor="tools-radio"
                        buttonTextClass="tools-button-text"
                        />
                    <input
                        type="radio"
                        name="navigation-radio"
                        id="about-radio"
                        onChange={toAbout}
                    />
                    <DarkButton
                        tagName="label"
                        thirdClass="about-button"
                        secondClass="nav-button"
                        childElement={<p>About</p>}
                        htmlFor="about-radio"
                        buttonTextClass="about-button-text"
                        />
                    <input
                        type="radio"
                        name="navigation-radio"
                        id="contact-radio"
                        onChange={toContact}
                    />
                    <DarkButton
                        tagName="label"
                        secondClass="nav-button"
                        thirdClass="contact-button"
                        childElement={<p>Contact</p>}
                        htmlFor="contact-radio"
                        buttonTextClass="contact-button-text"
                        />
                </div>
                <label id="nav-overlay" htmlFor="show-navbar"></label>
                <label className="menu-button" htmlFor="show-navbar"><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#ffffff"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></label>
            </nav>
            <div className="padder"></div>
        </div>
    )
}

export default Navigation