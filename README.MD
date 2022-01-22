# CMS backend

A simple api to manage your posts.

### Stack:

* Node
* Typescript
* Express
* Firebase

### Endpoints:

| Endpoint      | Description       |
| ------------- | ----------------- |
| `/`           | `GET` Returns all posts in an array.|
| `/post/:content_id`| `GET` Returns a post with the matching content id.|
| `/create`      | `POST` Creates a new post. |
| `/edit/:content_id`| `POST` Updates the post with the corresponding content id.|
| `/delete/:content_id`| `POST` Deletes the post with the corresponding content id. |

### Post Data:

The shape of the post data is:

```javascript
{
    content_id: "3JKtsxFfRgmYWCnMmXVX",
    publish_date: "22 January 2022",
    title: "Example title",
    author: "John Doe",
    content: "The quick brown fox jumped over the lazy cow"
}
```

### Glossary:

* `content_id` - A string value used to identify each post. 