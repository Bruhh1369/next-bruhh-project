import React from 'react'
import clsx from 'clsx'
import './ore-ui-button.scss'
/*
<a class="ore-button-neutral">
    <div class="button-text">
        <p>button</p>
    </div>
</a>*/

type ButtonProps = {
    tagName?: React.ElementType,
    secondClass?: string,
    buttonTextClass?: string,
    thirdClass?: string,
    childElement?: React.ReactNode,
    hyperLink?: string,
    buttonType?: "button" | "submit" | "reset",
    onClick?: () => void,
    [x: string]: unknown
}


export const DarkButton = ({ tagName: Tag = "a", secondClass, buttonTextClass = "button-text", thirdClass, childElement, hyperLink, buttonType, onClick, ...rest }: ButtonProps) => {

    return (
        <Tag className={clsx("ore-button-dark", secondClass, thirdClass)} href={hyperLink} onClick={onClick} type={buttonType} {...rest}>
            <div className={buttonTextClass}>
                {childElement || <p>button-text</p>}
            </div>
        </Tag>
    )
}

export const GreenButton = ({ tagName: Tag = "a", secondClass, buttonTextClass = "button-text", thirdClass, childElement, hyperLink, buttonType, onClick, ...rest }: ButtonProps) => {

    return (
        <Tag className={clsx("ore-button", secondClass, thirdClass)} href={hyperLink} type={buttonType} onClick={onClick} {...rest}>
            <div className={buttonTextClass}>
                {childElement || <p>button-text</p>}
            </div>
        </Tag>
    )
}