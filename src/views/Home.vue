

<template>
  <div style="margin-top: 40px; margin-left: 20px; margin-right: 20px; margin-; border-radius:25px;">
     <div style="weight: 100px; height: 1000px">
      
       <h1 style="color:#fff;">Bienvenido</h1>
      
      <b-card>
        
        <h2 style="color:#30A8A1">Seleccione uno de los módulos para continuar</h2>

        <b-row class="justify-content-md-center">
          <!--Módulo 1 -->          
          <b-col>
            <div>
              <b-card no-body class="overflow-hidden" style="width: 100%; height: 200px; background: #30A8A1;">
                <b-row no-gutters>
                  <b-col>
                    <b-card-img src="https://www.cmempleo.com/img/ou-organizacion.png" style="width:40%;height:80%;display: block;margin: auto;margin-top: 20px;}"></b-card-img>
                  </b-col>
                  <b-col md="6">
                    <h3 style="color:#fff;">{{modulos[0].titulo}} </h3>
                    <p style="color:#fff; size-text: 2px;" align = "left-jutify">{{modulos[0].descripcion}}</p>
                    <div style="margin-top: 20px">
                          <a  align = "right" href="/moduloincorporacion" class="btn btn-primary">Explorar</a>
                        </div>
                        <br>
                  </b-col>
                </b-row>
              </b-card>
            </div>
          </b-col>
          <!--Módulo 2 -->
          <b-col>
            <div>
              <b-card no-body class="overflow-hidden" style="width: 100%; height: 200px; background: #30A8A1;">
                <b-row no-gutters>
                  <b-col>
                    <b-card-img src="https://genially.blob.core.windows.net/genially/users/5b60c9bb9f2b733e8c589798/5b61d8be3fede90ee1a8d5b4/5b61d8be3fede90ee1a8d5b5/084c6f06-b527-4917-9337-10dea0dcf1fd.png" style="width:40%;height:80%;display: block;margin: auto;margin-top: 20px;}"></b-card-img>
                  </b-col>
                  <b-col md="6">
                    <h3 style="color:#fff;">{{modulos[1].titulo}} </h3>
                    <p style="color:#fff; size-text: 2px;" align = "left-jutify">{{modulos[1].descripcion}}</p>
                    <div style="margin-top: 20px">
                          <a  align = "right" href="/moduloderechos" class="btn btn-primary">Explorar</a>
                        </div>
                        <br>
                  </b-col>
                </b-row>
              </b-card>
            </div>
          </b-col>
        </b-row>
        
        <br>

        <b-row class="justify-content-md-center">
          <!--Módulo 3 -->          
          <b-col>
            <div>
              <b-card no-body class="overflow-hidden" style="width: 100%; height: 200px; background: #30A8A1;">
                <b-row no-gutters>
                  <b-col>
                    <b-card-img src="http://stargomexico.com/wp-content/uploads/2019/01/pay-per-click.png" style="width:40%;height:80%;display: block;margin: auto;margin-top: 20px;}"></b-card-img>
                  </b-col>
                  <b-col md="6">
                    <h3 style="color:#fff;">{{modulos[2].titulo}} </h3>
                    <p style="color:#fff; size-text: 2px;" align = "left-jutify">{{modulos[2].descripcion}}</p>
                    <div style="margin-top: 20px">
                          <a  align = "right" href="/modulopagos" class="btn btn-primary">Explorar</a>
                        </div>
                        <br>
                  </b-col>
                </b-row>
              </b-card>
            </div>
          </b-col>
          <!--Módulo 4 -->
          <b-col>
            <div>
              <b-card no-body class="overflow-hidden" style="width: 100%; height: 200px; background: #30A8A1;">
                <b-row no-gutters>
                  <b-col>
                    <b-card-img src="https://www.amp.gob.sv/ampweb/wp-content/uploads/2016/06/1467249172_booklet.png" style="width:40%;height:80%;display: block;margin: auto;margin-top: 20px;}"></b-card-img>
                  </b-col>
                  <b-col md="6">
                    <h3 style="color:#fff;">{{modulos[3].titulo}} </h3>
                    <p style="color:#fff; size-text: 2px;" align = "left-jutify">{{modulos[3].descripcion}}</p>
                    <div style="margin-top: 20px">
                          <a  align = "right" href="/moduloreglamento" class="btn btn-primary">Explorar</a>
                        </div>
                        <br>
                  </b-col>
                </b-row>
              </b-card>
            </div>
          </b-col>
        </b-row>
        
        <br>

        <b-row class="justify-content-md-center">
          <!--Módulo 5 -->          
          <b-col>
            <div>
              <b-card no-body class="overflow-hidden" style="width: 100%; height: 200px; background: #30A8A1;">
                <b-row no-gutters>
                  <b-col>
                    <b-card-img src="https://www.digiworks.es/wp-content/uploads/2017/07/icon-seguridad-alojamiento.png" style="width:40%;height:80%;display: block;margin: auto;margin-top: 20px;}"></b-card-img>
                  </b-col>
                  <b-col md="6">
                    <h3 style="color:#fff;">{{modulos[4].titulo}} </h3>
                    <p style="color:#fff; size-text: 2px;" align = "left-jutify">{{modulos[4].descripcion}}</p>
                    <div style="margin-top: 20px">
                          <a  align = "right" href="/moduloseguridad" class="btn btn-primary">Explorar</a>
                        </div>
                        <br>
                  </b-col>
                </b-row>
              </b-card>
            </div>
          </b-col>
          <!--Módulo 6 -->
          <b-col>
            <div>
              <b-card no-body class="overflow-hidden" style="width: 100%; height: 200px; background: #30A8A1;">
                <b-row no-gutters>
                  <b-col>
                    <b-card-img src="https://www.ciudadagroalimentaria.es/wp-content/uploads/2017/11/iconPDF-negro.png" style="width:40%;height:80%;display: block;margin: auto;margin-top: 20px;}"></b-card-img>
                  </b-col>
                  <b-col md="6">
                    <h3 style="color:#fff;">{{modulos[3].titulo}} </h3>
                    <p style="color:#fff; size-text: 2px;" align = "left-jutify">{{modulos[3].descripcion}}</p>
                    <div style="margin-top: 20px">
                          <a  align = "right" href="/moduloderechos" class="btn btn-primary">Explorar</a>
                        </div>
                        <br>
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
            modulos:null
          }
        },
        mounted(){
          this.getTodos();
        },
        methods: {
          getTodos(){
            axios
                .get('http://127.0.0.1:8000/modules/')
                    .then(response =>{
                        this.modulos = response.data
                    })
                    .catch(e => console.log(e))
          }
        },
    }
</script>
