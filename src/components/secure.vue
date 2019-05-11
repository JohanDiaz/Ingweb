<template>
    <div id="secure">
        <h1>Login </h1>
        <p>
            Bienvenido
        </p>
    </div>
</template>

<script>
<script src="https://www.gstatic.com/firebasejs/6.0.2/firebase-app.js"></script>
<script>
import Firebase from 'firebase';
import config from 'C:/Users/Sebastian Diaz/desktop/vuelog/src/config.js';
let app= Firebase.initializeApp(config,"other1");
const db = app.database();
import username from './login.vue';
    export default {
        name: 'Secure',
        created(){
              console.log(username);
        },
        data() {
            return {
                  datos:{
                        nombre:"",
                        apellido:"",
                        usuario:""
                  }
            };
        }
    }
</script>

<style scoped>
    #secure {
        background-color: #FFFFFF;
        border: 1px solid #CCCCCC;
        padding: 20px;
        margin-top: 10px;
    }
</style>
