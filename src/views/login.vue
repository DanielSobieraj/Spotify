<template>
    <v-app>
        <v-container fill-height>
            <v-layout row wrap align-center>
                <v-flex col-10 col-md-4 mx-auto>
                    <div class="py-4 text-center">
                        <h2>Witaj w</h2>
                        <h1>VueSpotify</h1>
                    </div>
                    <v-text-field
                            label="Wpisz token"
                            outlined
                            v-model="token"
                            min="10"
                    ></v-text-field>
                    <div class="text-center">
                        <v-btn @click="sendToken">Zaloguj się</v-btn>
                        <div class="my-5">
                            <hr>
                            <p v-if="responseUser">{{ responseUser }}</p>
                            <p v-else>{{ responseError }}</p>
                            <!--                            <v-btn @click="sendToken">Przejdź dalej</v-btn>-->
                        </div>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </v-app>
</template>



<script>
    import axios from 'axios'
    import router from '../router'
    // import {mapActions} from 'vuex'
    // eslint-disable-next-line to ignore the next line.
    export default {
        name: "login",
        data() {
            return {
                token: this.$store.state.auth.token,
                responseUser: null,
                responseError: null
            }
        },
        methods: {
            sendToken() {
                localStorage.setItem('authToken', this.token);
                // this.$store.dispatch('auth/setToken', this.token);
                axios
                    .get(this.$store.state.auth.baseURL + 'me')
                    .then(response => {
                            this.responseUser = 'Witaj, ' + response.data.display_name;
                            router.push({path: '/home'})
                        },
                    )
                    .catch(err => {
                        this.responseError = err.response.data.error.message;
                        router.push({path: '/login'})
                    });
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