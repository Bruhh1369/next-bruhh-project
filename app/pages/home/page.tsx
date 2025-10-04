'use client'

import { Post } from '../../types/Post';
import { useEffect, useState } from 'react'
import './home.css'
import { PostCard } from '../../assets/templates/ore-ui/cards/ore-ui-card'
import { GreenButton } from '../../assets/templates/ore-ui/buttons/ore-ui-button';

const LoadingScreen = () => {

    const [loadingPostMessage, setLoadingPostMessage] = useState("Loading posts")

    useEffect(() => {
        const interval = setInterval(() => {
            setLoadingPostMessage(prev => {
                if (prev === "Loading posts...") return "Loading posts"
                return prev + "."
            })
        }, 800)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="loading-screen">
            <p>{loadingPostMessage}</p>
        </div>
    )
}

const Homepage = () => {

    interface PostData {
        data: Post[];
    }

    const [postData, setPostData] = useState<PostData | null>(null);
    const [searchValue, setSearchValue] = useState("")
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        async function fetchPost() {
            try {
                const res = await fetch(`https://api.mcpedl.com/api/submissions?user_nickname=bruhh69&include_skins=1&per_page=10&page=${currentPage}`)
                const data = await res.json()
                setPostData(data)
            } catch (e) {
                if (e instanceof Error) {
                    console.log(e.message)
                } else {
                    console.log(e)
                }
            }
        }
        fetchPost()
    }, [currentPage])

    const postCount = postData?.data?.length ?? 0
    return (
        <>
            <div className="home-heading">
                <div className="post-input-wrapper">
                    {
                        currentPage <= 1 ? <div className="ore-button empty"></div> :
                            <GreenButton
                                childElement={<p>prev</p>}
                                onClick={() => {
                                    setCurrentPage(prev => prev - 1)
                                    setPostData(null)
                                    setSearchValue("")
                                }}
                            />
                    }
                    <input
                        type="text"
                        id="searchPost"
                        value={searchValue}
                        onChange={e => setSearchValue(e.target.value)}
                        placeholder="Search posts..."
                    />
                    {
                        postCount < 10 ? <div className="ore-button empty"></div> :
                            <GreenButton
                                childElement={<p>next</p>}
                                onClick={() => {
                                    setCurrentPage(prev => prev + 1)
                                    setPostData(null)
                                    setSearchValue("")
                                }}
                            />
                    }
                </div>
            </div>
            <div className="posts-wrapper">
                {
                    !postData
                        ? <LoadingScreen />
                        : <PostCard
                            postlist={
                                postData.data.filter(post =>
                                    post.title.toLowerCase().includes(searchValue.toLowerCase())
                                )
                            }
                        />
                }
            </div>
        </>
    )
}

export default Homepage
