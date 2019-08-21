<template>
    <div class="login">
        <p>Wklej token:</p>
        <input v-model="token"/>
        <br>
        <button @click="addToken">Naciśnij mnie</button>
        <br>
        {{ e }}
    </div>
</template>

<script>
    // import {mapActions} from 'vuex'
    // import router from '../router/router'

    export default {
        name: "login",
        data() {
            return {
                token: '',
                error: '',
            }
        },
        methods: {
            addToken() {
                try {
                    localStorage.setItem('token', this.token)
                } catch (e) {
                }
            }
        },
        // created() {
        //     const {access_token, error} = this.$route.query;
        //     if (error) {
        //         // eslint-disable-next-line
        //         console.error(error);
        //     } else if (access_token) {
        //         this.setAccessToken(access_token);
        //     }
        //     router.push('/');
        // }
    }
</script>

<style scoped>

</style>