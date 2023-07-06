<template>
   <h1>Listado de posts</h1>
   <ul class="post-list">
    <li v-for="(post, index) in posts" :key="index">
        {{ post.title }}
    </li>
   </ul>
</template>

<script lang="ts" setup>
    import PostService from "../services/PostService"
    import { onMounted } from 'vue'

    const service = new PostService()
    const posts = service.getPosts()

    onMounted(async () => {
        await service.fetchAll()
    })


</script>

<style scoped>
.post-list{
    width: 94vw;
    height: 75px;
    padding: 20px;
    list-style-type: none;
}

.post-list li {
    padding: 10px;
    width: 100%;
    border: 1px solid #ccc;
}
</style>