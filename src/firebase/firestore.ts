import { getFirestore, collection, getDocs, DocumentData, setDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore'
import { firebaseApp } from './firebaseInit'

const firestore = getFirestore(firebaseApp)

/**
 * Creates a new post.
 */

export const createPost = ( _title:string, _author:string, _content:string, _date:string, _contentID:string) => {
    const newPost = doc(firestore, `Posts/${_contentID}`)
    return setDoc(newPost, {
        title: _title,
        author: _author,
        publish_date: _date,
        content: _content,
        contentID: _contentID
    })
}

/**
 * Updates a post form firestore. Content id is used to specify the post
 */
export const updatePost = (_title:string, _author:string, _content:string, _date:Date, _contentID:string) => {
    const post = doc(firestore, `Post/${_contentID}`)
    updateDoc(post, {
        title: _title,
        author: _author,
        publish_date: _date,
        content: _content,
        contentID: _contentID
    })
}

/**
 * Deletes a post from firestore. Document to delete is specified using its content id.
 */
export const deletePost = async (contentID:string) => {
    await deleteDoc(doc(firestore, "Posts", contentID))
}

/**
 * Returns a promise which can be used to get the post data.
 * @returns Promise<DocumentData[]>
 */
export const getPosts = async () => {
    const posts = await getDocs(collection(firestore, "Posts"))
    const data = [] as DocumentData[]
    posts.forEach((doc) => {
        data.push(doc.data())
    })
    return data
}