<template>
    <v-app>
        <v-layout align-center justify-center fill-height>
            <v-flex xs6>
                <v-text-field label="Wprowadź artyste" type="text" v-model="name" @keyup="requestSearch()"/>
                <ol>
                    <li v-for="(value, key) in info" :key="key">{{ value.name }}</li>
                    {{ tokenError }}
                </ol>
            </v-flex>
        </v-layout>
    </v-app>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'spotify',
        data() {
            return {
                info: null,
                name: '',
                token: '',
                tokenError: '',
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
            requestSong() {
                axios
                    .get(`${this.baseURL}search?q=${this.name}&type=artist,album,track`)
                    // eslint-disable-next-line
                    .then(response => {
                        this.info = response.data.artists.items;
                        this.tokenError = ''
                    })
                    .catch(err => {
                        this.info = '';
                        this.tokenError = err.response.data.error.message
                    })
            },
            requestSearch() {
                setTimeout(() => {
                    this.requestSong()
                }, 500);
            }
        },
    }
</script>

<style scoped>

</style>