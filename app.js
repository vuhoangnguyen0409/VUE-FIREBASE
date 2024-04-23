const app = Vue.createApp({
    data() {
        return {
            title: 'The title from vue',
            author: ' Nguyen Vu',
            age: 34
        }
    }
})

app.mount('#app')