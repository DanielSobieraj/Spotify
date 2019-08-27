<template>
    <v-app>
        <v-container fill-height>
            <v-layout row wrap align-center>
                <v-flex col-10 col-md-4 mx-auto>
                    <h1 class="py-4 text-center">VueSpotify</h1>
                    <v-text-field
                            label="Wyszukaj"
                            outlined
                            v-model="search"
                            min="10"
                            @keyup="searchBar"
                    ></v-text-field>
                    <p v-for="(resp, key) in search" :key="key">{{ resp }}</p>
                    <p>{{ responseError }}</p>
                    <span>
                        <router-link to="/login">Wyloguj</router-link>
                    </span>
                </v-flex>
            </v-layout>
        </v-container>
    </v-app>
</template>

<script>
    import axios from 'axios'
    import router from '../router'

    export default {
        name: "home",
        data() {
            return {
                search: null,
                responseError: null
            }
        },
        methods: {
            searchBar() {
                axios
                    .get(this.$store.state.auth.baseURL + `search?q=${this.search}&type=track`)
                    .then(response => {
                            this.search = response.data;
                        },
                    )
                    .catch(err => {
                        this.responseError = err.response.data.error.message;
                        router.push({path: '/login'})
                    });
            },
        },
    };
</script>
