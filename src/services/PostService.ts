import { ref, Ref } from 'vue'
import IPoST from '../interfaces/IPost'

class PostService {
    private posts:Ref<Array<IPoST>>

    constructor() {
        this.posts = ref<Array<IPoST>>([]) 
    }

    getPosts ():Ref<Array<IPoST>> {
        return this.posts
    }

    async fetchAll(): Promise<void> {
        try {
            const url = 'https://jsonplaceholder.typicode.com/posts'
            const respose = await fetch(url)
            const json = await respose.json()
            this.posts.value = await json
        } catch (error) {
            console.log(error)
            
        }
    }

}

export default PostService