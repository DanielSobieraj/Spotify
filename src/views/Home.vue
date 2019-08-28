<template>
    <v-app>
        <v-navigation-drawer app>

        </v-navigation-drawer>

        <v-app-bar app>
            <v-row
                    align="center"
                    justify="space-between">
                <v-col sm="4">
                    <v-text-field
                            label="Wyszukaj"
                            v-model="search"
                            outlined
                            @keyup="searchBar"
                            :error-messages="responseError"
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
                <ul>
                    <li v-for="(artists, key1) in responseArtists" :key="key1">
                        Wykonawcy: {{ artists.name }}
                    </li>
                    <hr>
                    <li v-for="(tracks, key2) in responseTracks" :key="key2">
                        Utwory: {{ tracks.name }}
                    </li>
                    <hr>
                    <li v-for="(albums, key3) in responseAlbums" :key="key3">
                        Albumy: {{ albums.name }}
                    </li>
                </ul>
                <p></p>
                <p>{{ responseError }}</p>
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
                    .get(this.$store.state.auth.baseURL + `search?q=${this.search}&type=track,artist,album&limit=8`)
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
    };
</script>
