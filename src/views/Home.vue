<template>
    <v-app>
        <v-navigation-drawer app>

        </v-navigation-drawer>

        <v-app-bar
                app
                height="100"
                extension-height="200">
            <v-row
                    align="center"
                    justify="space-between">
                <v-col sm="4">
                    <v-text-field
                            label="Wyszukaj"
                            v-model="search"
                            outlined
                            @keyup="searchBar"
                            color="#1db954"
                            :error-messages="responseError"
                            success-messages=""
                            class="mt-5"
                    ></v-text-field>
                </v-col>
                <v-col sm="5">
                    <h1 class="py-4 text-center">VueSpotify</h1>
                </v-col>
                <v-col sm="3" class="text-end">
                    <v-btn color="#1db954" dark large @click="clearToken">Wyloguj</v-btn>
                </v-col>
            </v-row>
        </v-app-bar>

        <!-- Sizes your content based upon application components -->
        <v-content>

            <!-- Provides the application the proper gutter -->
            <v-container fluid>
                <v-layout wrap row>
                    <v-flex
                            justify="center"
                            align="center"
                    >
                        <h2>Wykonawcy</h2>
                        <v-layout wrap row>
                            <v-flex xs-12 md-2 justify="center"
                                    align="center" v-for="(artists, key1) in responseArtists" :key="key1">
                                <v-card
                                        max-width="200"
                                        height="200"
                                        class="mx-auto"
                                >
                                    <v-card-title>{{ artists.name }}</v-card-title>
                                    <v-card-text>{{ artists.name }}</v-card-text>
                                    <v-card-actions>
                                        <v-btn>Play</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-flex>
                        </v-layout>

                    </v-flex>
                </v-layout>
                <v-layout>
                    <v-flex>
                        <hr>
                        <h2>Utwory</h2>
                        <v-card
                                width="175"
                                height="200"
                                class="mx-auto"
                                v-for="(tracks, key2) in responseTracks" :key="key2"
                        >
                            <v-card-title>{{ tracks.name }}</v-card-title>
                            <v-card-text>{{ tracks.name }}</v-card-text>
                            <v-card-actions>
                                <v-btn>Play</v-btn>
                            </v-card-actions>
                        </v-card>
                        <hr>
                        <h2>Albumy</h2>
                        <v-card
                                width="175"
                                height="200"
                                class="mx-auto"
                                v-for="(albums, key3) in responseAlbums" :key="key3"
                        >
                            <v-card-title>{{ albums.name }}</v-card-title>
                            <v-card-text>{{ albums.name }}</v-card-text>
                            <v-card-actions>
                                <v-btn>Play</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>

        <v-footer app>
            <!-- -->
        </v-footer>
    </v-app>
</template>

<script>
    import axios from 'axios'


    export default {
        name: "home",
        data() {
            return {
                search: '',
                responseTracks: [],
                responseArtists: [],
                responseAlbums: [],
                responseError: null
            }
        },
        methods: {
            searchBar() {
                axios
                    .get(this.$store.state.auth.baseURL + `search?q=${this.search}&type=track,artist,album&limit=6`)
                    .then(response => {
                            this.responseTracks = response.data.tracks.items;
                            this.responseArtists = response.data.artists.items;
                            this.responseAlbums = response.data.albums.items;
                        },
                    )
                    .catch(err => {
                        this.responseError = err.response.data.error.message;
                        // router.push({path: '/login'})
                    });
            },
            clearToken() {
                localStorage.clear();
                this.$router.push({path: '/login'})
            }
        },
        created: function() {
            axios.defaults.headers.common['Authorization'] = `Bearer ` + localStorage.getItem('authToken');
        }
    };
</script>
