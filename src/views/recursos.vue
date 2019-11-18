

<template>
  <div style="margin-top: 40px; margin-left: 20px; margin-right: 20px; margin-; border-radius:25px;">
     <div style="weight: 100px; height: 1000px">

       <h1 style="color:#fff;">Recursos</h1>

      <b-card>

        <h2 style="color:#30A8A1">Con estos documentos cuentas:</h2>

         <b-row class="justify-content-md-center">
          <b-col>
            <div>
              <b-card no-body class="overflow-hidden" style="width: 100%; height: 200px; background: #30A8A1;">
                <b-row no-gutters>
                  <b-col>
                    <tr v-for="documento in documentos" :key = "documento.id">
                        <a href="http://127.0.0.1:8000/documents/download/5" style="color:#fff" font-size = "100px"><h2>{{documento.titulo}}</h2></a>
                    </tr>
                  </b-col>
                </b-row>
              </b-card>
            </div>
          </b-col>
        </b-row>




      </b-card>

     </div>


  </div>
</template>


<script>
import axios from 'axios'
    export default {
        name: "Home",
        data() {
          return {
            documentos:null
          }
        },
        mounted(){
          this.getTodos();
        },
        methods: {
          getTodos(){
            axios
                .get('http://127.0.0.1:8000/documents/')
                    .then(response =>{
                        this.documentos = response.data
                    })
                    .catch(e => this.console.log(e))

          }
        },
    }
</script>
