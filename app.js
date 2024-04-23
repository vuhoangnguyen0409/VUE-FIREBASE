const app = Vue.createApp({
    data() {
        return {
            title: 'The title from vue',
            author: ' Nguyen Vu',
            age: 34
        }
    },
    methods: {
        changeTitle() {
            console.log('you clicked me')
            this.title = "update new title"
        }
    }
})

app.mount('#app')