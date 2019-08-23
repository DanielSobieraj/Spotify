<template>
    <v-app>
        <!--        <v-app-bar app>-->
        <!--            <v-toolbar-title class="headline text-uppercase">-->
        <!--                <span>Spotify Player</span>-->
        <!--            </v-toolbar-title>-->
        <!--            <v-spacer></v-spacer>-->
        <!--            <v-btn class="mx-3">-->
        <!--                <span class="mr-2"><router-link to="/">Home</router-link></span>-->
        <!--            </v-btn>-->
        <!--            <v-btn class="mx-3">-->
        <!--                <span class="mr-2"><router-link to="/login">Login</router-link></span>-->
        <!--            </v-btn>-->
        <!--        </v-app-bar>-->
        <v-container>
            <login/>
        </v-container>
    </v-app>
</template>

<script>
    import router from './router'
    import login from './views/login'

    export default {
        name: 'App',
        router,
        components: {
            login
        },
        data: () => ({
            //
        }),
    };
</script>
