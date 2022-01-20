import { getFirestore, collection, addDoc } from 'firebase/firestore'

const firestore = getFirestore()

export const createRecord = ( _title:string, _author:string, _content:string, _date:Date, _contentID:string) => (
    addDoc(collection(firestore, "Posts"), {
        title: _title,
        author: _author,
        date: _date,
        content: _content,
        contentID: _contentID

})

)