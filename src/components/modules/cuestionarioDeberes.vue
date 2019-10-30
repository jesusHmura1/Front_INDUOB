<template>
    <div>
        <div class="questionset">
            <h1 class="mainborder"> Cuestionario derechos y deberes.</h1>
        </div>
        <!-- Multiple Choice Question Set -->
        <div class="questionset">
            <h2 class="mainborder"> Test derechos y deberes de un estudiante </h2>
            <p class="mainborder"> Mide tus conocimientos completando este test! </p>
            <div class="mainborder">
                <div v-if="questionnumber === 1">
                    <p>Pregunta 1: Según el "Sistema de Evaluacion de la Docencia", ¿cual de estas fases NO es
                        correcta? </p>
                    <button v-on:click="AFunc">Jerarquización de necesidades</button>
                    <button v-on:click="BFunc">Toma de decisiones para la mejora</button>
                    <button v-on:click="CFunc">Triangulación de la información</button>
                    <button v-on:click="DFunc">Evaluación Final</button>
                </div>
                <div v-if="questionnumber === 2">
                    <p>Pregunta 2: El área estratégica de Pregrado de la USACH considera tres ideas fuerza, ¿Cual de
                        estas NO es una de estas ideas? </p>
                    <button v-on:click="AFunc">Cooperación</button>
                    <button v-on:click="BFunc">Equidad</button>
                    <button v-on:click="CFunc">Excelencia</button>
                    <button v-on:click="DFunc">Pertinencia</button>
                </div>
                <div v-if="questionnumber === 3">
                    <p>Pregunta 3: ¿Cual de estos objetivos presentes corresponde a un Objetivo de Pregrado? </p>
                    <button v-on:click="AFunc">Fomentar la interdisciplinariedad y transdisciplinariedad en los
                        proyectos de la Escuela, para lograr el efecto de sinergia, con las universidades,
                        municipalidades, empresa privada e instituciones científicas.
                    </button>
                    <button v-on:click="BFunc">Fomento de la colaboración interinstitucional</button>
                    <button v-on:click="CFunc">'Proporcionar atención gíneco-obstétrica integral a la mujer durante su
                        ciclo vital, enfatizando su quehacer en el proceso de reproducción humana y ejecutando las
                        actividades de su competencia.
                    </button>
                    <button v-on:click="DFunc">Posicionar a la Escuela entre las entidades formadoras de mayor prestigio
                        en el área de educación de post grado, post título y educación continua en el campo de la salud
                        sexual y reproductiva.
                    </button>
                </div>
                <div v-if="questionnumber === 4">
                    <p>Pregunta 4:De estas 4 resposnabilidades, ¿Cual NO corresponde a las responsabilidades del cargo
                        de "Académico"?</p>
                    <button v-on:click="AFunc">Participar en los procesos de autoevaluación y de acreditación de la
                        carrera.
                    </button>
                    <button v-on:click="BFunc">Desarrollar las prácticas profesionales incorporadas en el Plan de
                        Estudios. En caso de coordinaciones de prácticas específicas deberá supervisar el adecuado
                        funcionamiento de estas.
                    </button>
                    <button v-on:click="CFunc">Colaborar en la planificación y desarrollo de la asignatura del plan de
                        estudio de pre y post-grado que imparte la unidad.
                    </button>
                    <button v-on:click="DFunc">Supervisar el cumplimiento de los compromisos adquiridos por los
                        académicos que participan en la experiencia clínica.
                    </button>
                </div>
                <div v-if='submit === "true"' class="dropdowncomments">
                    <h2 class="greenfont">Resultados obtenidos.</h2>
                    <p>{{commentResults}}</p>
                    <div v-if='deberes === 1'>
                        <b-button href="/moduloderechos" variant="primary">derechos y deberes</b-button>
                    </div>
                </div>
                <div v-if="submit !== 'true'">
                    <button v-if="questionnumber === 5" v-on:click="SFunc">Submit</button>
                </div>
            </div>
        </div>
        <div>
            <img>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CuestionarioDeberes",
        data() {
            return {
                pointsnumberx: 0,
                questionnumber: 1,
                tfnumber: 1,
                mcnumber: 1,
                ddnumber: 1,
                AOpt: 0,
                BOpt: 0,
                COpt: 0,
                DOpt: 0,
                AWin: 0,
                BWin: 0,
                CWin: 0,
                DWin: 0,
                submit: 'false',
                reglamento: 0,
                allCorrect: 0,
                commentResults: '',
                deberes: 0,
            }
        },
        methods: {
            mcquestions: function () {
                this.mcnumber += 1;
                this.tfnumber = 1;
                this.ddnumber = 1;
                this.pointsnumberx = 0;
                this.questionnumber = 1;
                this.AOpt = 0;
                this.BOpt = 0;
                this.COpt = 0;
                this.DOpt = 0;
                this.AWin = 0;
                this.BWin = 0;
                this.CWin = 0;
                this.DWin = 0;
                this.submit = 'false';
                this.commentResults = '';
                this.allCorrect = 0;
                this.deberes = 0;
            },
            AFunc: function () {
                //validamos si la respuesta seleccionada es la correcta si la respuesta es la correcta sumamos +1
                // en caso de ser incorrecta la dejamos en 0 se valida con la respuesta que se selecciona.
                this.AOpt += 1;
                this.questionnumber += 1
            },
            BFunc: function () {
                this.BOpt += 1;
                this.questionnumber += 1
            },
            CFunc: function () {
                this.COpt += 1;
                this.questionnumber += 1
            },
            DFunc: function () {
                this.DOpt += 1;
                this.questionnumber += 1;
                this.submit = 'false'
            },
            SFunc:
                function () {
                    if (this.AOpt === 1 && this.BOpt === 1 && this.COpt === 1 && this.DOpt === 1) {
                        this.allCorrect = 1;
                        this.commentResults = 'felicitaciones estan todas correctas,!'
                    } else {
                        this.allCorrect = 2;
                        this.commentResults = 'necesitas mas practica dirigete a seguir aprendiendo sobre los contenidos.'
                        this.deberes = 1;
                    }
                    this.submit = 'true'
                }
        }
    }

</script>

<style>
    body {
        background-image: url("https://i.pinimg.com/originals/05/c8/2e/05c82ee619eb200c68e0789eb583ac73.png");
        background-size: 110%;
        min-width: 1200px;
        width: auto !important;
        width: 1200px;
        background-position: top; /* Position the image to the top cente */
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 30px;
    }

    .comment {
        color: red;
    }

    .questionset {
        margin-top: 10px;
        margin-left: 180px;
        margin-right: 180px;
        padding-left: 20px;
        padding-right: 20px;
    }

    h1 {
        font-size: 50px;
        margin-bottom: 10px;
    }

    button {
        float: top;
        background-color: #17a2b8 !important;
        border: none;
        color: white;
        margin-top: 15px;
        margin-bottom: 15px;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
    }

    p {
        font-weight: bolder;
        font-size: 15px;
    }

    .dropdowncomments {
        border: 1px solid #fff;
        background-color: rgba(255, 255, 255, .8);
        padding: 5px;
        margin-top: 1rem;
        margin-left: 13rem;
        margin-right: 13rem;
        margin-bottom: 3rem;
        font-weight: bolder;
        font-size: 16px;
    }

    select {
        margin-bottom: 1em;
        height: 3em;
        width: 400px;
        font-size: 14px;
        border: 1px solid #fff;
        border: 1px solid #fff;
        background-color: rgba(255, 255, 255, .8);
        padding: 5px;
    }

    .redfont {
        color: red;
    }

    .greenfont {
        color: #17a2b8 !important;
    }

    .mainborder {
        color: #17a2b8 !important;
        font-weight: bolder;
        background-color: rgba(255, 255, 255, .8);
        margin-left: 205px;
        margin-right: 205px;
        padding-top: 5px;
        margin-top: 0px;
    }

    .paddingbottom {
        padding-bottom: 10px;
    }
</style>

