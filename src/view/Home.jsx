import { useState, useEffect } from 'react'
import { tagService, postService } from '../api/index'
import Tags from '../components/Tags'
import Posts from '../components/Posts'
import AddPostModal from '../components/AddPostModal'
import { IconButton, Tooltip, Fab, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { ACCESS_TOKEN } from '../constants'
import { useNavigate } from 'react-router-dom';


const App = ({ authenticated, currentUser }) => {
    const navigate = useNavigate()
    const [tags, setTags] = useState([])
    const [posts, setPosts] = useState([])
    const [isDeleteTag, setIsDeleteTag] = useState(false)
    const [isTagAdded, setIsTagAdded] = useState(false)
    const [isAddPostModalOpen, setIsAddPostModalOpen] = useState(false)
    const [isPostAdded, setIsPostAdded] = useState(false)
    const [isPostDeleted, setIsPostDeleted] = useState(false)

    const getAllTags = async () => {
        const tagList = await tagService.getAllTags()
        setTags(tagList)
    }

    const getAllPosts = async () => {
        const postList = await postService.getAllPosts()
        setPosts(postList)
    }

    const deletePost = async (postId) => {
        try {
            const res = await postService.deletePostById(postId)
            if (res.status >= 200) {
                setIsPostDeleted(true)
            }
        } catch(e) {
            console.log(e)
        }
    }
    const handleClosePostModal = () => setIsAddPostModalOpen(false)

    const handleOpenPostModal = () => setIsAddPostModalOpen(true)

    useEffect(() => {
        getAllTags()
        getAllPosts()
    }, [isDeleteTag, isTagAdded, isPostAdded, isPostDeleted])

    useEffect(() => {
        if (!localStorage.getItem(ACCESS_TOKEN)) {
            navigate('/login')
        }
    }, [])

    return (
        <div>
            <Tags tags={tags} setIsDeleteTag={setIsDeleteTag} setIsTagAdded={setIsTagAdded} setPosts={setPosts}/>
            <Tooltip title='Add a new post'>
            <Fab aria-label="delete" color="secondary" onClick={handleOpenPostModal}>
                <AddIcon />
            </Fab>
            </Tooltip>
            <Posts posts={posts} tags={tags} deletePost={deletePost}/>
            <AddPostModal isAddPostModalOpen={isAddPostModalOpen} handleClosePostModal={handleClosePostModal} setIsPostAdded={setIsPostAdded}/>
        </div>
    )
    
}

export default App
