<template>
    <v-app>
        <v-layout align-center justify-center fill-height>
            <v-flex xs6>
                <v-text-field label="Wprowadź token" type="text" v-model="token"/>
                <v-btn @click="saveToken()">Zatwierdź</v-btn>
                <br>
            </v-flex>
        </v-layout>
    </v-app>
</template>


<script>
    export default ({
        name: 'login',
        data() {
            return {
                token: '',
            }
        },
        methods: {
            saveToken() {
                localStorage.token = this.token;
                // eslint-disable-next-line
            },
        },
    });
</script>