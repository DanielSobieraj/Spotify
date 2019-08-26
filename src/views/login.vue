<template>
    <v-app>
        <v-container fill-height>
            <v-layout row wrap align-center>
                <v-flex col-10 col-md-4 mx-auto>
                    <h1 class="py-4 text-center">VueSpotify</h1>
                    <v-text-field
                            label="Wpisz token"
                            outlined
                            v-model="token"
                            min="10"
                    ></v-text-field>
                    <div class="text-center">
                        <v-btn @click="sendToken">Zaloguj się</v-btn>
                        <div class="">
                            <ul class="row" style="list-style: none">
                                <li v-for="(value, key) in info" :key="key">{{ value }}</li>
                            </ul>
                            <v-btn @click="sendToken">Przejdź dalej</v-btn>
                        </div>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </v-app>
</template>

<script>
    import axios from 'axios'
    // import router from '../router/router'
    // import {mapActions} from 'vuex'

    export default {
        name: "login",
        data() {
            return {
                token: this.$store.state.auth.token,
                info: null
            }
        },
        methods: {
            sendToken() {
                localStorage.setItem('authToken', this.token);
                this.$store.dispatch('auth/setToken', this.token);
                axios
                    .get(this.$store.state.auth.baseURL + 'me')
                    .then(response => (this.info = response.data),
                    )
                    .catch(err => (this.info = err));
            },
        },
        created: function () {
            axios.defaults.headers.common['Authorization'] = `Bearer ` + this.$store.state.auth.token;
        }
    }
</script>

<style scoped>

</style>

<!--localStorage.setItem('authToken', `${this.token}`);-->