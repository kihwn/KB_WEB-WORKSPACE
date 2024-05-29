<template>
    <div>
        <button type="button" v-on:click="loadData">사진 불러오기</button>
        <br/>
        <ul>
            <li v-for="photo in photoList" :key="photo.id" v-on:click="selectItem(photo.id)">
                <img :src="photo.thumbnailUrl" :alt="photo.title" />
                {{ photo.title }}
            </li>
        </ul>
        <div v-if="photo.id">
            <h3>Selected Photo:</h3>
            <img :src="photo.url" :alt="photo.title" />
            <p>Title: {{ photo.title }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            photoList: [],
            photo: {}
        };
    },
    methods: {
        selectItem(id) {
            this.photo = this.photoList.find(photo => photo.id === id) || {};
        },
        loadData() {
            fetch('https://jsonplaceholder.typicode.com/photos')
                .then(response => response.json())
                .then(data => {
                    this.photoList = data.slice(0, 10); // 처음 10개의 사진만 로드
                });
        }
    }
};
</script>

<style scoped>
ul {
    list-style-type: none;
    padding: 0;
}

li {
    margin-bottom: 10px;
    cursor: pointer;
}

img {
    max-width: 150px;
    margin-right: 10px;
    vertical-align: middle;
}
</style>
