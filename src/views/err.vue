<template>
    <v-app>
        <v-content>
            <v-container
                    wrap fluid>
                <v-row
                        justify="center"
                        align="center"
                >
                    <v-col
                            xs-12>
                        <div class="text-center my-5">
                            <img src="https://cdn3.iconfinder.com/data/icons/web-hosting-7/66/61-512.png">
                        </div>
                        <div class="text-center">
                            <router-link to="/login">
                                <v-btn class="mx-5"
                                >Strona głowna
                                </v-btn>
                            </router-link>
                            <v-btn class="mx-5" @click="$router.go(-2)"
                            >Cofnij
                            </v-btn>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    export default {
        name: "err"
    }
</script>