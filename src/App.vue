<template>
    <v-app>
        <v-layout align-center justify-center fill-height>
            <v-flex xs6>
                <v-text-field label="Wprowadź token" type="text" v-model="token"/>
                <v-btn class="my-5">Zatwierdź</v-btn>
                <p>Twój token to: {{ tokenLoginAuth() }}</p>
                <v-btn class="my-5" @click="tokenLogin()">Pobierz artyste</v-btn>
                <ul>
                    <li v-for="(value, key) in info" :key="key">{{ key }}: {{ value }}</li>
                </ul>
            </v-flex>
        </v-layout>
    </v-app>
</template>

<script>
    import axios from 'axios';

    export default ({
        name: 'App',
        data() {
            return {
                info: null,
                token: '',
                baseURL: "https://api.spotify.com/v1/",
            }
        },
        methods: {
            tokenLogin() {
                axios.defaults.headers.common.Authorization = `Bearer ${this.token}`;
                axios
                    .get(`${this.baseURL}artists/1Cs0zKBU1kc0i8ypK3B9ai`)
                    .then(response => (this.info = response.data))
                    .catch(err => (alert(err)));
            },
            tokenLoginAuth() {

            }
        },
    });
</script>
