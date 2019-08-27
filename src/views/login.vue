<template>
    <v-app style="background: grey">
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
                                            label="Token"
                                            v-model="token"
                                            type="text"
                                            :error-messages="responseError"
                                    ></v-text-field>
                                </v-form>
                            </v-card-text>
                            <v-card-actions class="d-flex justify-center">
                                <v-btn color="#1db954" dark large @click="sendToken">Login</v-btn>
                            </v-card-actions>
                        </v-card>
                        <!--                        <p>{{ responseError }}</p>-->
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    </v-app>
</template>


<script>
    import axios from 'axios'
    import router from '../router'

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