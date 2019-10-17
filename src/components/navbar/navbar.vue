<template>
    <b-navbar toggleable="md" type="dark" variant="info" class="nav-background" >

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand :to="{name: 'home'}">Induob</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>

    </b-navbar-nav>

    <b-navbar-nav class="ml-auto">
        <b-nav-item :to="{name: 'home'}">Inicio</b-nav-item>
        <b-nav-item :to="{name: 'asdasd'}">Recursos</b-nav-item>
        <b-nav-item :to="{name: 'asdas'}">Quienes Somos</b-nav-item>
        <b-nav-item :to="{name: 'asdasd'}">Ayuda</b-nav-item>
        <b-nav-item :to="{name: 'asdasd'}">Contacto</b-nav-item>
      <b-nav-item-dropdown right>
        <template slot="button-content">
          <em>User</em>
        </template>
        <b-dropdown-item :to="{name: 'faqs'}">Perfil</b-dropdown-item>
        <b-dropdown-item :to="{name: 'login'}">Login</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-collapse>
</b-navbar>
</template>

<script>
    export default {
        name: "navbar"
    }
</script>

<style scoped>

</style>
