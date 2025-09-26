'use client';

import { Post } from '../../../../types/Post';
import { GreenButton } from "../buttons/ore-ui-button";
import React from "react";
import "./ore-ui-card.css";

interface PostCardProps {
    postlist: Post[];
}

export const PostCard: React.FC<PostCardProps> = ({ postlist }) => {

    if (!postlist || postlist.length === 0) return <p style={{ color: "white" }}>No posts available.</p>;


    return postlist.map((e, i) => (
        <div key={i} className="card">
            <div className="card-header">
                <p>{e.title}</p>
            </div>
            <div className="card-main">
                <img
                    src={e.image}
                    alt={e.title}

                />
            </div>
            <div className="card-footer">
                <GreenButton
                    hyperLink={`https://mcpedl.com/${e.slug}`}
                    secondClass="card-button"
                    childElement={<p>Learn more...</p>}
                />
            </div>
        </div>
    ))
};