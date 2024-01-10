const { createApp } = Vue;

createApp({
    data() {
        return {
            email: [],
        };
    },
    mounted () {
        console.log (axios);

        for (let i = 0; i < 10; i ++) {
            axios
            .get ('https://flynn.boolean.careers/exercises/api/random/mail')
            .then ((result) => {
                this.email.push(result.data.response);
            });
        }
        
    }
}).mount('#app');