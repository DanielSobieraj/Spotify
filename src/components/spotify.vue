<template>
    <v-app>
        <v-layout align-center justify-center fill-height>
            <v-flex xs6>
                <v-text-field label="Wprowadź artyste" type="text" v-model="name"/>
                <v-btn class="my-5" @click="tokenLogin()">Pobierz artyste</v-btn>
                <ul>
                    <li v-for="(value, key) in info" :key="key">{{ key }}: {{ value }}</li>
                </ul>
            </v-flex>
        </v-layout>
    </v-app>
</template>

<script>
    export default {
        name: "Main"
    }
</script>

<style scoped>

</style>