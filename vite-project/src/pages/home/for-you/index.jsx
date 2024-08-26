import Post from "~/components/post";
import { posts as postData } from "~/mock/posts";
import { WindowVirtualizer } from "virtua";
import { useState } from "react";

export default function ForYou() {
    const [posts, setPosts] = useState(postData.concat(postData, postData));

    return (
        <WindowVirtualizer
            onRangeChange={(start, end) => {
                console.log("start", start);
                console.log("end", end);
                if (end + 1 == posts.length) {
                    setPosts(prev => [...prev, ...postData])
                }
            }}>
            {posts.map((post, key) => (
                <Post key={post.id + key} post={post} />
            ))}
        </WindowVirtualizer>
    );
}
{/* <WindowVirtualizer
    onRangeChange={(start, end) => {
        console.log('star', start)
        console.log('end', end)
    }}>
    <>
        {posts.from(({ length: 1000 }).map((_, post) => <Post post={post} key={post.id + key} />))}
    </>
</WindowVirtualizer> */}