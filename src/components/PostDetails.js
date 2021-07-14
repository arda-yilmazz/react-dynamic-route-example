/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useParams } from 'react-router';

export default function PostDetails() {
    const [post, setPost] = useState({})
    const router = useParams()

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${router.id}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])

    return (
        <>
            <h1>{post.title}</h1>
        
            <p>{post.body}</p>
        </>
    )
}