<template>
<div id="login">
  <v-app>
    <v-layout align-center justify-center fill-height>
      <v-flex xs6>
        <v-text-field label="Wprowadź token" type="text" v-model="token"/>
        <v-btn @click="saveLocalStorage()">Zatwierdź</v-btn>
        <br>
        <v-btn @click="spotify()">Pobierz artyste</v-btn>
        <ul>
          <li v-for="(value, key) in info" :key="key">{{ key }}: {{ value }}</li>
        </ul>
      </v-flex>
    </v-layout>
  </v-app>
</div>
</template>
{{ token }}
<script>
  import axios from 'axios';

  export default ({
    name: 'Login',
    data () {
      return {
        token: '',
        info: null,
      }
    },
    mounted() {
      const token = localStorage.getItem('token');
      if (token) {
        this.token = token;
      }
    },
    watch: {
      token(newToken) {
        localStorage.token = newToken;
      }
    },
    methods: {
      saveLocalStorage() {
        axios.defaults.headers.common.Authorization = `Bearer ${this.token}`;
      },
      spotify() {
        axios
                .get(`https://api.spotify.com/v1/artists/1Cs0zKBU1kc0i8ypK3B9ai`)
                .then(response => (this.info = response.data));
      }
    },
  });
</script>