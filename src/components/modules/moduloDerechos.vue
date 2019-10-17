<template>
    <div style="margin-top: 20px">
        <div>
            <b-card-group columns>
                <b-card
                        title="Card title that wraps to a new line"
                        img-src="https://placekitten.com/g/400/450"
                        img-alt="Image"
                        img-top
                >
                    <b-card-text>
                        This is a wider card with supporting text below as a natural lead-in to additional content.
                        This content is a little bit longer.
                    </b-card-text>
                </b-card>

                <b-card header="Quote">
                    <blockquote class="blockquote mb-0">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer class="blockquote-footer">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                        </footer>
                    </blockquote>
                </b-card>

                <b-card title="Title" img-src="https://picsum.photos/400/400/?image=20" img-alt="Image" img-top>
                    <b-card-text>
                        This card has supporting text below as a natural lead-in to additional content.
                    </b-card-text>
                    <b-card-text class="small text-muted">Last updated 3 mins ago</b-card-text>
                </b-card>

                <b-card bg-variant="primary" text-variant="white">
                    <blockquote class="card-blockquote">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer>
                            <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
                        </footer>
                    </blockquote>
                </b-card>

                <b-card>
                    <b-card-title>Title</b-card-title>
                    <b-card-text>
                        This card has supporting text below as a natural lead-in to additional content.
                    </b-card-text>
                    <b-card-text class="small text-muted">Last updated 3 mins ago</b-card-text>
                </b-card>

                <b-card img-src="https://picsum.photos/400/400/?image=20" img-alt="Image" overlay></b-card>

                <b-card img-src="https://picsum.photos/400/400/?image=20" img-alt="Image" img-top>
                    <b-card-text>
                        This is a wider card with supporting text below as a natural lead-in to additional content.
                        This card has even longer content than the first.
                    </b-card-text>
                    <template v-slot:footer>
                        <small class="text-muted">Footer Text</small>
                    </template>
                </b-card>
            </b-card-group>
            <b-card
                    title="Test Reglamentos"
                    img-src="https://www.caracteristicas.co/wp-content/uploads/2018/11/reglamento-e1542397242504.jpg"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 100%; max-height: 10rem;"
                    class="mb-2"
            >
                <b-card-text>
                    Si se encuentra preparado para realizar el cuestionario sobre los derecho y deberes de la institucion
                    ingrese a el siguiente boton.
                </b-card-text>
                <div>
                    <b-button href="/cuestionariodeberes" variant="primary">Realizar cuestionario</b-button>
                </div>

            </b-card>
        </div>
    </div>
</template>

<script>
    export default {
        name: "moduloDerechos"
    }
</script>

<style scoped>

</style>
