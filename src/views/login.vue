<template>
    <v-app>
        <v-content>
            <v-container
                    class="fill-height pa-0"
                    fluid
            >
                <v-row
                        align="center"
                        justify="center"
                >
                    <v-col
                            cols="12"
                            sm="8"
                            md="4"
                    >
                        <v-card class="elevation-12">
                            <v-toolbar
                                    color="#1db954"
                                    dark
                            >
                                <v-toolbar-title style="width:100%" class="text-center w">
                                    Spotify Login
                                </v-toolbar-title>
                            </v-toolbar>
                            <v-card-text>
                                <v-form>
                                    <v-text-field
                                            label="Wpisz token"
                                            v-model="token"
                                            :error-messages="responseError"
                                            color="#1db954"
                                    ></v-text-field>
                                </v-form>
                            </v-card-text>
                            <v-card-actions class="d-flex justify-center">
                                <v-btn color="#1db954" dark large @click="sendToken">Zaloguj</v-btn>
                            </v-card-actions>
                        </v-card>
                        <!-- <p>{{ responseError }}</p>-->
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    </v-app>
</template>


<script>
    import axios from 'axios'
    import router from '../router'
    import {mapActions} from 'vuex'

    export default {
        name: "login",
        data() {
            return {
                token: '',
                responseUser: null,
                responseError: null
            }
        },
        methods: {
            ...mapActions('auth', ['setToken']),
            sendToken() {
                let headers = {'Authorization': `Bearer ` + this.token};
                axios
                    .get(this.$store.state.auth.baseURL + 'me', {headers})
                    .then(response => {
                            this.responseUser = 'Witaj, ' + response.data.display_name;
                            this.setToken(this.token);
                            this.setAuth();
                            router.push({path: '/home'})
                        },
                    )
                    .catch(err => {
                        this.responseError = err.response.data.error.message;
                        localStorage.clear()
                    });
            },
            setAuth() {
            }
        },
        created: function () {
            this.setAuth();
        }
    }
</script>

<style scoped>
</style>

<!--localStorage.setItem('authToken', `${this.token}`);-->