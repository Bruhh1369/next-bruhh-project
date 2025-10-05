'use client'

import { PropsWithChildren } from 'react'
import { Post } from '../../../../types/Post'
import { GreenButton } from '../buttons/ore-ui-button'
import Img from '../../../custom-components/Image'
import './ore-ui-card.css'

interface SectionProps {
    className?: string
    variant?: 'card' | 'header' | 'main' | 'footer'
}

interface PostCardProps {
    postlist: Post[]
}

const CardSection = ({ children, className = '', variant = 'card' }: PropsWithChildren<SectionProps>) => (
    <div className={`card${variant !== 'card' ? `-${variant}` : ''} ${className}`.trim()}>
        {children}
    </div>
)

export const Card = (p: PropsWithChildren<SectionProps>) => <CardSection {...p} variant="card" />
export const CardHeader = (p: PropsWithChildren<SectionProps>) => <CardSection {...p} variant="header" />
export const CardMain = (p: PropsWithChildren<SectionProps>) => <CardSection {...p} variant="main" />
export const CardFooter = (p: PropsWithChildren<SectionProps>) => <CardSection {...p} variant="footer" />

export const PostCard: React.FC<PostCardProps> = ({ postlist }) => {
    if (!postlist?.length) return <p style={{ color: 'white' }}>No posts available.</p>

    return postlist.map((e, i) => (
        <Card key={i}>
            <CardHeader>
                <p>{e.title}</p>
            </CardHeader>
            <CardMain>
                <Img src={e.image} alt={e.title} fullSize />
            </CardMain>
            <CardFooter>
                <GreenButton
                    hyperLink={`https://mcpedl.com/${e.slug}`}
                    secondClass="card-button"
                    childElement={<p>Learn more...</p>}
                />
            </CardFooter>
        </Card>
    ))
}
