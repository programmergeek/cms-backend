import { getFirestore, collection, addDoc, getDocs, DocumentData } from 'firebase/firestore'
import { firebaseApp } from './firebaseInit'

const firestore = getFirestore(firebaseApp)

export const createRecord = ( _title:string, _author:string, _content:string, _date:Date, _contentID:string) => {
    addDoc(collection(firestore, "Posts"), {
        title: _title,
        author: _author,
        date: _date,
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