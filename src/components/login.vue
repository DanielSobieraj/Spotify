<template>
    <div id="login">
        <v-app>
            <v-layout align-center justify-center fill-height application.theme--dark>
                <v-flex xs2>
                    <v-text-field label="Wprowadź token" type="text" v-model="token"/>
                    <v-btn @click="saveLocalStorage()">Zatwierdź</v-btn>
                    <br>
                    {{ tokenError }}

                    <router-view></router-view>
                </v-flex>
            </v-layout>
        </v-app>
    </div>
</template>


<script>
    import axios from 'axios'

    export default ({
        name: 'login',
        data() {
            return {
                token: '',
                baseURL: "https://api.spotify.com/v1/",
                tokenError: ''
            }
        },
        mounted() {
            if (localStorage.token) {
                this.token = localStorage.token;
            }
        },
        watch: {
            token(newToken) {
                localStorage.token = newToken;
            }
        },
        methods: {
            saveLocalStorage() {
                axios.defaults.headers.common.Authorization = `Bearer ${localStorage.token}`
                axios
                    .get(`${this.baseURL}artists/1Cs0zKBU1kc0i8ypK3B9ai`)
                    // eslint-disable-next-line
                    .then(response => {
                        this.tokenError = null
                    })
                    .catch(err => {
                        this.tokenError = err.response.data.error.message
                    })
            }
        },
    });
</script>