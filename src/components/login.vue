<template>
    <div id="login">



        <div class="row">
          <div class="col-sm-4">

          </div>
          <div class="col-sm-4">
          <h1>Login</h1>
          <br><br>
          <form class="form-horizontal">
          <section class="form-group">
              <label class="control-label col-sm-2" for="ced">Cedula:</label>
              <br><br>
              <input type="text" name="username" v-model="input.username">
          </section>
          <br><br>
          <section class="form-group">
          <label class="control-label col-sm-2" for="ced">Contraseña:</label>
            <br><br>
          <input type="password" name="password" v-model="input.password">
          </section>
          </form>

          </div>
        </div>

        <br><br><br>
        <section>
          <button type="button" v-on:click="login()" class="btn btn-primary btn-lg btn-block">Login</button>
        </section>
        <br><br><br>
        <section>
        <button type="button" v-on:click="registro()" class="btn btn-primary btn-lg btn-block">Registro</button>
        </section>
    </div>
</template>

<script src="https://www.gstatic.com/firebasejs/6.0.2/firebase-app.js"></script>
<script>
import Firebase from 'firebase';
import config from 'C:/Users/Sebastian Diaz/desktop/vuelog/src/config.js';
let app= Firebase.initializeApp(config,"other");
const db = app.database();
    export default {
        name: 'Login',
        created(){
        },
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {

            login() {
              var bandera=0;
                  db.ref('/perfiles').on('value',snapshot => {
                  for(let f in snapshot.val()){
                      if(snapshot.val()[f].usuario === this.input.username && snapshot.val()[f].contraseña === this.input.password){
                      this.$emit("authenticated",true);
                      this.$router.replace({name:"secure"})
                      }else{
                        bandera=bandera+1;
                      }
                      }
                  })
                  if(bandera != 0){
                    alert("Usuario o contraseña incorrectos");
                  }
            },
            registro(){
              this.$emit("authenticated",true);
              this.$router.replace({name:"registro"})
            }
        }
    }
</script>

<style scoped>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
</style>
