import { getFirestore, collection, getDocs, DocumentData, setDoc, doc, updateDoc } from 'firebase/firestore'
import { firebaseApp } from './firebaseInit'

const firestore = getFirestore(firebaseApp)

export const createPost = ( _title:string, _author:string, _content:string, _date:Date, _contentID:string) => {
    const newPost = doc(firestore, `Posts/${_contentID}`)
    setDoc(newPost, {
        title: _title,
        author: _author,
        publish_date: _date,
        content: _content,
        contentID: _contentID
    })
}

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

export const getPosts = async () => {
    const posts = await getDocs(collection(firestore, "Posts"))
    const data = [] as DocumentData[]
    posts.forEach((doc) => {
        data.push(doc.data())
    })
    return data
}