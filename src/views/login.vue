<template>
    <v-app>
        <v-container fill-height>
            <v-layout row wrap align-center>
                <v-flex col-4 mx-auto>
                    <h1 class="py-4 text-center">VueSpotify</h1>
                    <v-text-field
                            label="Wpisz token"
                            outlined
                            v-model="token"
                    ></v-text-field>
                    <div class="text-center">
                        <v-btn @click="sendToken">Zaloguj się</v-btn>
                        <p class="my-5">{{ token }}</p>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </v-app>
</template>

<script>
    // import router from '../router/router'
    import axios from 'axios'

    export default {
        name: "login",
        data() {
            return {
                token: '',
            }
        },
        methods: {
            sendToken() {
                localStorage.setItem('auth', `Bearer ${this.token}`);
                let aa = axios.get(this.store.baseURL + '/me')
            }
        },
    }
</script>

<style scoped>

</style>