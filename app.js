const app = Vue.createApp({
    data() {
        return {
            title: 'The title from vue',
            author: ' Nguyen Vu',
            age: 34,
            showBooks: true
        }
    },
    methods: {
        changeTitle() {
            console.log('you clicked me')
            this.title = "update new title"
        },

        toggleShowbooks() {
            this.showBooks = !this.showBooks
        }
    }
})

app.mount('#app')