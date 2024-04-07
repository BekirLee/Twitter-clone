import { useParams } from "react-router-dom"

function Profile() {

    const { slug } = useParams()
    console.log(slug)

    return (
        <>
            <span>Profile component </span>
            <br />
            <span>User: {slug} </span>
        </>
    )
}

export default Profile