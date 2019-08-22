<template>
    <div id="app">
        <v-app>
            <div>
                <v-toolbar>
                    <v-toolbar-title>Spotify Player</v-toolbar-title>

                    <div class="flex-grow-1"></div>

                    <v-toolbar-items>
                        <v-btn text>
                            <router-link to="/">home</router-link>
                        </v-btn>
                        <v-btn text>
                            <router-link to="/login">Zaloguj</router-link>
                        </v-btn>
                    </v-toolbar-items>
                </v-toolbar>
            </div>
            <router-view/>
        </v-app>
    </div>
</template>

<script>
    import router from './router'

    export default {
        name: 'app',
        router,
        data: () => ({
            //
        }),
    };
</script>
