<template>
    <div id="registro">
    <br>
    <header>
      <h1>Registro</h1>
    </header>
    <form @submit.prevent="AlmacenarDatos">
    <section class="row">
      <section class="col-sm-6">
        <section class="form-group">
            <label for="usr">Nombre</label>
            <input type="text" name="nombre" v-model="input.nombre" class="form-control">
        </section>
          <section class="form-group">
              <label for="usr">Apellido</label>
              <input type="text" name="apellido" v-model="input.apellido" class="form-control">
          </section>
          <section class="form-group">
              <label for="usr">Usuario</label>
              <input type="text" name="usuario" v-model="input.usuario" class="form-control">
          </section>
          <section class="form-group">
              <label for="usr">Contraseña</label>
              <input type="password" name="contraseña" v-model="input.contraseña" class="form-control">
          </section>
      </section>
      </section>
      <section>
        <button type="button" v-on:click="completo()" class="btn btn-success btn-lg btn-block">Completar</button>
      </section>
    </form>

    </div>
</template>

<script>
import Firebase from 'firebase';
import config from 'C:/Users/Sebastian Diaz/desktop/vuelog/src/config.js';
let app= Firebase.initializeApp(config);
let db = app.database();
let usuariosref=db.ref('usuarios');
    export default {
        name: 'registro',
        firebase:{
              usuarios:usuariosref
        },
        data() {
            return {
                  input: {
                    nombre:"",
                    apellido:"",
                    usuario:"",
                    contraseña:""
                }

            };
        },
        methods: {
            completo(){

            if(this.input.nombre !="" && this.input.apellido !="" &&  this.input.usuario !="" &&  this.input.contraseña !=""){
                db.ref( '/perfiles/ ' + this.input.usuario).set({
                    nombre:this.input.nombre,
                    apellido:this.input.apellido,
                    usuario:this.input.usuario,
                    contraseña:this.input.contraseña
                })
                this.$emit("authenticated", true);
                this.$router.replace({ name: "login" });
            }else{
                alert("Digite todos los campos")
            }

            },
        }
    }
</script>

<style scoped>
    #registro {
        background-color: #FFFFFF;
        border: 1px solid #CCCCCC;
        padding: 20px;
        margin-top: 10px;
    }
</style>
