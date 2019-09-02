<template>
    <v-app>
        <!--        <v-navigation-drawer app>-->
        <!--        </v-navigation-drawer>-->

        <v-app-bar
                app
                height="100"
                extension-height="200"
                wrap>
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
                            :success-messages="responseSuccess"
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
                        <h2 v-if="this.search !== ''">Wykonawcy</h2>
                        <v-layout wrap row>
                            <v-flex
                                    xs-12
                                    sm-8
                                    md-4
                                    lg-2
                                    justify="center"
                                    align="center"
                                    v-for="(artists, key1) in responseArtists" :key="key1"
                            >
                                <div>
                                    <v-card
                                            width="250"
                                            height="270"
                                            class="mx-auto"
                                            :style="{backgroundImage: 'url(' + artists.images[0].url + ')',
                                        backgroundSize: 'cover'}"
                                    >
                                    </v-card>
                                    <v-card-title class="d-flex justify-center flex-wrap mx-auto text-center" style="width:250px;">{{ artists.name }}
                                    </v-card-title>
                                </div>
                            </v-flex>
                        </v-layout>
                        <hr class="my5" v-if="this.search !== ''">
                        <h2 v-if="this.search !== ''">Utwory</h2>
                        <v-layout wrap row>
                            <v-flex
                                    xs-12
                                    sm-8
                                    md-4
                                    lg-2
                                    justify="around"
                                    align="center"
                                    v-for="(tracks, indexTrack) in responseTracks" :key="indexTrack"
                            >
                                <div>
                                    <v-card
                                            width="250"
                                            height="270"
                                            @click="playTrack(indexTrack)"
                                            class="mx-auto overflow-hidden"
                                            :style="{
                                            backgroundColor: 'rgba(29,185,84,0.8)',
                                            backgroundImage: 'url(' + playImage + ')',
                                            backgroundSize: 'cover'}"
                                    >
                                    </v-card>
                                    <v-card-title class="d-flex justify-center flex-wrap mx-auto text-center" style="width:250px;">
                                        {{ tracks.name }}
                                    </v-card-title>
                                    <v-card-text class="d-flex justify-center">
                                        {{ tracks.artists[0].name }}
                                    </v-card-text>
                                </div>
                            </v-flex>
                        </v-layout>
                        <hr v-if="this.search !== ''">
                        <h2 v-if="this.search !== ''">Albumy</h2>
                        <v-layout wrap row>
                            <v-flex
                                    xs-12
                                    sm-8
                                    md-4
                                    lg-2
                                    justify="around"
                                    align="center"
                                    v-for="(albums, indexAlbum) in responseAlbums" :key="indexAlbum">
                                <v-card
                                        width="250"
                                        height="270"
                                        class="mx-auto"
                                        :style="{
                                        backgroundImage: 'url(' + responseAlbums[indexAlbum].images[0].url + ')',
                                        backgroundSize: 'cover'}"
                                >
                                </v-card>
                                <v-card-title class="d-flex justify-center flex-wrap mx-auto text-center" style="width:250px;">
                                    {{ albums.name }}
                                </v-card-title>
                                <v-card-text class="d-flex justify-center flex-wrap mx-auto text-center" style="width:250px;">
                                    {{ albums.artists[0].name }}
                                </v-card-text>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>

        <v-footer app>
            <audio controls :src="this.trackURL" autoplay>
                <source :src="trackURL">
            </audio>
            {{ this.trackName }}{{ this.trackArtist }}
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
                responseSuccess: '',
                responseError: null,
                playImage: 'http://pixsector.com/cache/0d0aeff3/av63fa1d6082bbbeb54d8.png',
                albumCover: '',
                trackName: '',
                trackArtist: '',
                trackURL: '',
            }
        },
        methods: {
            searchBar() {
                let vm = this
                axios
                    .get(this.$store.state.auth.baseURL + `search?q=${this.search}&type=track,artist,album&limit=6`)
                    .then(response => {
                            vm.responseTracks = response.data.tracks.items;
                            vm.responseArtists = response.data.artists.items;
                            vm.responseAlbums = response.data.albums.items;
                            vm.responseError = '';
                        },
                    )
                    .catch(err => {
                        vm.responseError = err.response.data.error.message;
                        // router.push({path: '/login'})
                    });
            },
            clearToken() {
                localStorage.clear();
                this.$router.push({path: '/login'})
            },
            playTrack(indexTrack) {
                this.trackURL = this.responseTracks[indexTrack].preview_url;
                if (this.trackURL !== null) {
                    this.trackName = this.responseTracks[indexTrack].artists[0].name + ' - ';
                    this.trackArtist = this.responseTracks[indexTrack].name;
                } else {
                    this.trackName = 'Brak utworu';
                    this.trackArtist = null;
                    this.trackURL = '';
                }
            },
            // Object.map(item => {
            //   item.
            // })!!!
            albumCoverTest(indexAlbum) {
                this.albumCover = this.responseAlbums[indexAlbum].images[0].url;
                // if (this.albumCover !== undefined) {
                //     this.albumCover = this.responseAlbums[indexAlbum].images[0].url;
                // } else {
                //     this.albumCover = 'https://i.scdn.co/image/cc1b320bd06c6167997e65fd5e38d35c1a26caf1';
                // }
            }
        },
        created: function () {
            axios.defaults.headers.common['Authorization'] = `Bearer ` + localStorage.getItem('authToken');
        }
    };
</script>
