import Post from "~/components/post"
import { posts  } from "~/mock/posts"
import { WindowVirtualizer } from "virtua";
import { useState } from "react"


export default function ForYou() {
    // const [posts, setPosts] = useState(postData)

    return (
        <WindowVirtualizer
            onRangeChange={(start, end) => {
                console.log('star', start)
                console.log('end', end)
            }}>
            <>
                {posts.from(({ length: 1000 }).map((_, post) => <Post post={post} key={post.id + key} />))}
            </>
        </WindowVirtualizer>
    )
}