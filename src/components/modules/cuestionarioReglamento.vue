<template>
    <div>
        <div class="questionset">
            <h1 class="mainborder"> Cuestionario Reglamento interno de Obstetricia.</h1>
        </div>
        <!-- Question Buttons -->
        <div class="questionbuttons">
            <button v-on:click='tfquestions'>Cuestionario verdadero y falsos</button>
            <button v-on:click='mcquestions'>Cuestionario seleccion multiple con alternativas</button>
            <button v-on:click='ddquestions'>Cuestionario seleccion multiple</button>
        </div>
        <!-- True/False Question Set -->
        <div v-if="tfnumber % 2 === 0" class="questionset">
            <h2 class="mainborder"> Lumberjack Career Questions </h2>
            <p class="mainborder"> So you want to be a lumberjack? </p>
            <div class='mainborder'>
                <p v-if="questionnumber < 6"> Question: {{questionnumber}} </p>
                <p v-if="questionnumber === 1"> Do you like being outdoors.</p>
                <p v-if="questionnumber === 2"> Do you like to swing axes at trees? </p>
                <p v-if="questionnumber === 3"> Do you think you can fight a bear? </p>
                <p v-if="questionnumber === 4"> Do you make your own sandwiches? </p>
                <p v-if="questionnumber === 5"> Are you an atheletic person? </p>
                <!-- True/False Answers -->
                <button v-if="questionnumber <= 5" v-on:click="add">Yes</button>
                <button v-if="questionnumber <= 5" v-on:click="sub">No</button>
                <!-- True/False Comments -->
                <div class="paddingbottom">
                    <p v-if="pointsnumberx === 5" class="comment"> Sounds like you're going to love working as a
                        lumberjack! </p>
                    <p v-if="pointsnumberx === 4" class="comment"> You may enjoy lumberjacking. </p>
                    <p v-if="pointsnumberx === 3" class="comment"> You may enjoy lumberjacking. </p>
                    <p v-if="pointsnumberx === 2" class="comment"> We may be on to something. </p>
                    <p v-if="pointsnumberx === 1" class="comment"> We may be on to something. </p>
                    <p v-if="pointsnumberx < 0" class="comment"> You probably don't want to be a lumberjack.</p>
                    <div v-if="questionnumber === 6">
                        <h2 class="greenfont">Recommendation</h2>
                        <div v-if="pointsnumberx >= 2">
                            <img src="https://www.northcountrypublicradio.org/news/images/woodsman1.jpg" height="200px">
                            <h3> Oaksville Lumberjack School - 604-434-WOOD - students@OLS.com -
                                www.oaksvillelumberjack </h3>
                        </div>
                        <div v-if="pointsnumberx <= 1">
                            <img src="https://teenlife.s3.amazonaws.com/media/uploads/listings/id-gaming-academy-yale/CLmQsrGhNRel.jpg"
                                 height="200px">
                            <h3>Lighthouse Labs Programming School - 604-320-2931 - students@lighthouselabs.com -
                                www.lighthouselabs.com</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Multiple Choice Question Set -->
        <div v-if="mcnumber % 2 === 0" class="questionset">
            <h2 class="mainborder"> EVENT! </h2>
            <p class="mainborder"> Figure out where to go for today! </p>
            <div class="mainborder">
                <div v-if="questionnumber === 1">
                    <p>Question 1: How is the weather? </p>
                    <button v-on:click="AFunc">Sunny</button>
                    <button v-on:click="BFunc">Cloudy</button>
                    <button v-on:click="CFunc">Windy</button>
                    <button v-on:click="DFunc">Wet</button>
                </div>
                <div v-if="questionnumber === 2">
                    <p>Question 2: What do you want to see? </p>
                    <button v-on:click="AFunc">Nature</button>
                    <button v-on:click="BFunc">Science Experiments</button>
                    <button v-on:click="CFunc">Movie</button>
                    <button v-on:click="DFunc">Animals</button>
                </div>
                <div v-if="questionnumber === 3">
                    <p>Question 3: What is the temperature? </p>
                    <button v-on:click="AFunc">Hot</button>
                    <button v-on:click="BFunc">Cold</button>
                    <button v-on:click="CFunc">Warm</button>
                    <button v-on:click="DFunc">Gross</button>
                </div>
                <div v-if="questionnumber === 4">
                    <p>Question 4: What kind of trip?</p>
                    <button v-on:click="AFunc">Any</button>
                    <button v-on:click="BFunc">Mostly Adults</button>
                    <button v-on:click="CFunc">Mostly Kids</button>
                    <button v-on:click="DFunc">Date</button>
                </div>
                <div v-if="submit !== 'true'">
                    <button v-if="questionnumber === 6" v-on:click="SFunc">Submit</button>
                </div>
                <!-- Multiple Choice Comments -->
                <div v-if="submit === 'true'" class='paddingbottom'>
                    <h2 class="greenfont"> Recommendation: </h2>
                    <div v-if="AWin === 1">
                        <img src="https://vancouver-canada.ca/images/lionsgatebridge.jpg">
                        <p v-if="AWin === 1" class="comment"> Stanley Park <br/> Stanley Park, Vancouver, BC V6G 1Z4
                            <br/> 604-403-2101 <br/> www.stanleypark.ca</p>
                    </div>
                    <div v-if="BWin === 1">
                        <img src="https://vancouver-canada.ca/images/scienceworld.jpg">
                        <p class="comment"> Science World <br/> 1455 Quebec St, Vancouver, BC V6A 3Z7 <br/> 604-435-5232
                            <br/> www.scienceworld.ca</p>
                    </div>
                    <div v-if="CWin === 1">
                        <img src="https://assets-auto.rbl.ms/94f36b761053e043e9bfe7e9c7df7fe46e5f466939f3e0c2fd160f6819e8aa33">
                        <p v-if="CWin === 1" class="comment"> IMAX Theater <br/> 1455 Quebec St, Vancouver, BC V6A 3Z7
                            <br/> 604-506-4320 <br/> www.imax.ca</p>
                    </div>
                    <div v-if="DWin === 1">
                        <img src="http://wpmedia.vancouversun.com/2016/06/png-merlin-archive-nyac-an-exxon-valdez-oil-spill-survivo.jpeg?w=475&h=356&crop=1&quality=55&strip=all">
                        <p v-if="DWin === 1" class="comment"> Vancouver Aquarium <br/> 845 Avison Way, Vancouver, BC V6G
                            3E2 <br/> 604-520-2340 <br/> www.vancouveraquarium.ca</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- Dropdown Question Set -->
        <div v-if="ddnumber % 2 === 0" class="questionset">
            <h2 class="mainborder">Test Reglamento interno</h2>
            <p class="mainborder"> Mide tus conocimientos completando este test!</p>
            <!-- Dropdown Questions -->
            <div v-if="submit !== 'true'">
                <div>
                    <select v-model="dropdownanswer">
                        <option disabled value="">1. Según el "Sistema de Evaluacion de la Docencia", ¿cual de estas fases NO es correcta?</option>
                        <option v-for="dropdown in dropdownset" :value="dropdown.id">
                            {{dropdown.option}}
                        </option>
                    </select>
                </div>
                <div>
                    <select v-if="dropdownanswer !== ''" v-model="dropdownanswer2">
                        <option disabled value="">2.El área estratégica de Pregrado de la USACHconsidera tres ideas fuerza, ¿Cual de estas NO es una de estas ideas?:</option>
                        <option v-for="dropdown in dropdownset2" :value="dropdown.id">
                            {{dropdown.option}}
                        </option>
                    </select>
                </div>
                <div>
                    <select v-if="dropdownanswer2 !== ''" v-model="dropdownanswer3">
                        <option disabled value="">3.¿Cual de estos objetivos presentes corresponde a un Objetivo de Pregrado?</option>
                        <option v-for="dropdown in dropdownset3" :value="dropdown.id">
                            {{dropdown.option}}
                        </option>
                    </select>
                </div>
                <div>
                    <select v-if="dropdownanswer3 !== ''" v-model="dropdownanswer4">
                        <option disabled value="">4. De estas 4 resposnabilidades, ¿Cual NO corresponde a las responsabilidades del cargo de "Académico"?</option>
                        <option v-for="dropdown in dropdownset4" :value="dropdown.id">
                            {{dropdown.option}}
                        </option>
                    </select>
                </div>
                <div>
                    <select v-if="dropdownanswer4 !== ''" v-model="dropdownanswer5">
                        <option disabled value="">4. De estas 4 resposnabilidades, ¿Cual NO corresponde a las responsabilidades del cargo de "Académico"?</option>
                        <option v-for="dropdown in dropdownset5" :value="dropdown.id">
                            {{dropdown.option}}
                        </option>
                    </select>
                </div>
            </div>
            <!-- Dropdown Comments -->
            <div v-if='submit === "true"' class="dropdowncomments">
                <h2 class="greenfont">Resultados obtenidos.</h2>
                <p>{{dropdowncomment}}</p>
                <p>{{dropdowncomment2}}</p>
                <p>{{dropdowncomment3}}</p>
                <p>{{dropdowncomment4}}</p>
                <p>{{dropdowncomment5}}</p>
                <p>{{dropdowncomment6}}</p>
                <div v-if='reglamento === 1'>
                    <b-button href="/moduloreglamento" variant="primary">Reglamento</b-button>
                </div>
            </div>
            <div v-if="submit !== 'true'">
                <button v-if="dropdownanswer5 !== ''" v-on:click="DDFunc" class="ddbutton">Submit</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CuestionarioReglamento",
        data() {
            return {
// Shared Question Data
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
// Dropdown Question Sets
                dropdownanswer: '',
                dropdownanswer2: '',
                dropdownanswer3: '',
                dropdownanswer4: '',
                dropdownanswer5: '',
                dropdowncomment: '',
                dropdowncomment1: '',
                dropdowncomment2: '',
                dropdowncomment3: '',
                dropdowncomment4: '',
                dropdowncomment5: '',
                sponsormessage: '',
                ddopt1: 0,
                ddopt2: 0,
                ddopt3: 0,
                ddopt4: 0,
                submit: 'false',
                reglamento: 0,
                dropdownset: [
                    {id: 1, option: 'Jerarquización de necesidades'},
                    {id: 2, option: 'Toma de decisiones para la mejora'},
                    {id: 3, option: 'Triangulación de la información'},
                    {id: 4, option: 'Evaluación Final'}
                ],
                dropdownset2: [
                    {id: 1, option: 'Cooperación'},
                    {id: 2, option: 'Equidad'},
                    {id: 3, option: 'Excelencia'},
                    {id: 4, option: 'Pertinencia'}
                ],
                dropdownset3: [
                    {id: 1, option: 'Fomentar la interdisciplinariedad y transdisciplinariedad en los proyectos de la Escuela, para lograr el efecto de sinergia, con las universidades, municipalidades, empresa privada e instituciones científicas.'},
                    {id: 2, option: 'Fomento de la colaboración interinstitucional'},
                    {id: 3, option: 'Proporcionar atención gíneco-obstétrica integral a la mujer durante su ciclo vital, enfatizando su quehacer en el proceso de reproducción humana y ejecutando las actividades de su competencia.'},
                    {id: 4, option: 'Posicionar a la Escuela entre las entidades formadoras de mayor prestigio en el área de educación de post grado, post título y educación continua en el campo de la salud sexual y reproductiva.'}
                ],
                dropdownset4: [
                    {id: 1, option: 'Participar en los procesos de autoevaluación y de acreditación de la carrera.'},
                    {id: 2, option: 'Desarrollar las prácticas profesionales incorporadas en el Plan de Estudios.  En caso de coordinaciones de prácticas específicas deberá supervisar el adecuado funcionamiento de estas.'},
                    {id: 3, option: 'Colaborar en la planificación  y desarrollo de la asignatura del plan de estudio de pre y post-grado que imparte la unidad.'},
                    {id: 4, option: 'Supervisar el cumplimiento de los compromisos adquiridos por los académicos que participan en la experiencia clínica.'}
                ],
                dropdownset5: [
                    {id: 1, option: 'Participar en los procesos de autoevaluación y de acreditación de la carrera.'},
                    {id: 2, option: 'Desarrollar las prácticas profesionales incorporadas en el Plan de Estudios.  En caso de coordinaciones de prácticas específicas deberá supervisar el adecuado funcionamiento de estas.'},
                    {id: 3, option: 'Colaborar en la planificación  y desarrollo de la asignatura del plan de estudio de pre y post-grado que imparte la unidad.'},
                    {id: 4, option: 'Supervisar el cumplimiento de los compromisos adquiridos por los académicos que participan en la experiencia clínica.'}
                ]
            }
        },
        methods: {
            add: function () {
                this.pointsnumberx += 1
                this.questionnumber += 1
            },
            sub: function () {
                this.pointsnumberx -= 1
                this.questionnumber += 1
            },
            tfquestions: function () {
                this.tfnumber += 1
                this.mcnumber = 1
                this.ddnumber = 1
                this.pointsnumberx = 0
                this.questionnumber = 1
                this.AOpt = 0
                this.BOpt = 0
                this.COpt = 0
                this.DOpt = 0
                this.AWin = 0
                this.BWin = 0
                this.CWin = 0
                this.DWin = 0
                this.submit = 'false'
            },
            mcquestions: function () {
                this.mcnumber += 1
                this.tfnumber = 1
                this.ddnumber = 1
                this.pointsnumberx = 0
                this.questionnumber = 1
                this.AOpt = 0
                this.BOpt = 0
                this.COpt = 0
                this.DOpt = 0
                this.AWin = 0
                this.BWin = 0
                this.CWin = 0
                this.DWin = 0
                this.submit = 'false'
            },
            ddquestions: function () {
                this.ddnumber += 1
                this.tfnumber = 1
                this.mcnumber = 1
                this.pointsnumberx = 0
                this.questionnumber = 1
                this.AOpt = 0
                this.BOpt = 0
                this.COpt = 0
                this.DOpt = 0
                this.AWin = 0
                this.BWin = 0
                this.CWin = 0
                this.DWin = 0
                this.reglamento = 0
                this.submit = 'false'
                this.reglamento = 0
                this.sponsormessage = ''
                this.dropdownanswer = ''
                this.dropdownanswer2 = ''
                this.dropdownanswer3 = ''
                this.dropdownanswer4 = ''
                this.dropdownanswer5 = ''
                this.dropdowncomment6 = ''
            },
            AFunc: function () {
                this.AOpt += 1
                this.questionnumber += 1
            },
            BFunc: function () {
                this.BOpt += 1
                this.questionnumber += 1
            },
            CFunc: function () {
                this.COpt += 1
                this.questionnumber += 1
            },
            DFunc: function () {
                this.DOpt += 1
                this.questionnumber += 1
            },
            SFunc: function () {
                if (this.AOpt >= this.BOpt && this.AOpt >= this.COpt && this.AOpt >= this.DOpt) {
                    this.AWin += 1
                } else if (this.BOpt >= this.AOpt && this.BOpt >= this.COpt && this.BOpt >= this.DOpt) {
                    this.BWin += 1
                } else if (this.COpt >= this.AOpt && this.COpt >= this.BOpt && this.COpt >= this.DOpt) {
                    this.CWin += 1
                } else if (this.DOpt >= this.AOpt && this.DOpt >= this.BOpt && this.DOpt >= this.COpt) {
                    this.DWin += 1
                }
                this.submit = 'true'
            },
            DDFunc: function () {
                this.reglamento = 0;
                this.submit = 'true'
// Dropdown Question 1
                if (this.dropdownanswer === 1) {
                    this.dropdowncomment = 'Correcto'
                    this.ddopt1 += 1
                } else if (this.dropdownanswer === 2) {
                    this.dropdowncomment = 'Incorrecta'
                    this.ddopt2 += 1
                } else if (this.dropdownanswer === 3) {
                    this.dropdowncomment = 'Incorrecta '
                    this.ddopt3 += 1
                } else if (this.dropdownanswer === 4) {
                    this.dropdowncomment = 'Incorrecta'
                    this.ddopt4 += 1
                }
// Dropdown Question 2
                if (this.dropdownanswer2 === 1) {
                    this.dropdowncomment2 = 'Incorrecta'
                    this.ddopt1 += 1
                } else if (this.dropdownanswer2 === 2) {
                    this.dropdowncomment2 = 'Correcta'
                    this.ddopt2 += 1
                } else if (this.dropdownanswer2 === 3) {
                    this.dropdowncomment2 = 'Incorrecta'
                    this.ddopt3 += 1
                } else if (this.dropdownanswer2 === 4) {
                    this.dropdowncomment2 = 'Incorrecta'
                    this.ddopt4 += 1
                }
// Dropdown Question 3
                if (this.dropdownanswer3 === 1) {
                    this.dropdowncomment3 = 'Incorrecta'
                    this.ddopt1 += 1
                } else if (this.dropdownanswer3 === 2) {
                    this.dropdowncomment3 = 'Incorrecta'
                    this.ddopt2 += 1
                } else if (this.dropdownanswer3 === 3) {
                    this.dropdowncomment3 = 'Correcta'
                    this.ddopt3 += 1
                } else if (this.dropdownanswer3 === 4) {
                    this.dropdowncomment3 = 'Incorrecta'
                    this.ddopt4 += 1
                }
// Dropdown Question 4
                if (this.dropdownanswer4 === 1) {
                    this.dropdowncomment4 = 'Incorrecta'
                    this.ddopt1 += 1
                } else if (this.dropdownanswer4 === 2) {
                    this.dropdowncomment4 = 'Incorrecta'
                    this.ddopt2 += 1
                } else if (this.dropdownanswer4 === 3) {
                    this.dropdowncomment4 = 'Incorrecta'
                    this.ddopt3 += 1
                } else if (this.dropdownanswer4 === 4) {
                    this.dropdowncomment4 = 'Correcta'
                    this.ddopt4 += 1
                }
// Dropdown Question 5
                if (this.dropdownanswer5 === 1) {
                    this.dropdowncomment5 = 'Incorrecta'
                    this.ddopt1 += 1
                } else if (this.dropdownanswer5 === 2) {
                    this.dropdowncomment5 = 'Incorrecta'
                    this.ddopt2 += 1
                } else if (this.dropdownanswer5 === 3) {
                    this.dropdowncomment5 = 'Incorrecta'
                    this.ddopt3 += 1
                } else if (this.dropdownanswer5 === 4) {
                    this.dropdowncomment5 = 'Correcta'
                    this.ddopt4 += 1
                }
                if (this.dropdownanswer === 1 && this.dropdownanswer2 === 2 && this.dropdownanswer3 === 3 && this.dropdownanswer4 === 4) {
                    this.dropdowncomment6 = 'felicitaciones respondiste todo de manera correcta'
                    this.ddopt4 += 1
                }
                else {
                    this.dropdowncomment6 = 'lastima todavia te falta un poco de conocimiento vuelve a estudiar y intentalo mas tarde'
                    this.ddopt4 += 1
                    this.reglamento = 1
                }

// Dropdown Recommendations
                if (this.ddopt1 >= this.ddopt2 && this.ddopt1 >= this.ddopt3 && this.ddopt1 >= this.ddopt4) {
                    this.sponsormessage = 'Business University - 778-367-8094 - 1423 McKaw St, Vancouver, B.C. - bus@vueuniveristy.com - www.businessuniveristy.com'
                } else if (this.ddopt2 >= this.ddopt1 && this.ddopt2 >= this.ddopt3 && this.ddopt2 >= this.ddopt4) {
                    this.sponsormessage = 'Vancouver Art Gallery School - 604-303-3041 - 3728 Clark St, Vancouver, B.C. - students@vags.com - www.vancouverartschool.com'
                } else if (this.ddopt3 >= this.ddopt1 && this.ddopt3 >= this.ddopt2 && this.ddopt3 >= this.ddopt4) {
                    this.sponsormessage = 'Lighthouse Labs - 604-230-2954 - 2837 Union St, Vancouver, B.C. - students@lighthouselabs.com - www.lighthouselabs.com'
                } else if (this.ddopt4 >= this.ddopt1 && this.ddopt4 >= this.ddopt2 && this.ddopt4 >= this.ddopt3) {
                    this.sponsormessage = 'Northwest Culinary Academy - 604-876-7653 - 8932 Dunman St, Vancouver, B.C. - www.northwestculnary.ca'
                }
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

