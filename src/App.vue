<template>
  <div id="nav" class="fondo">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page">
            <router-link to="/">Inicio</router-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link">
            <router-link to="/premios">Premios</router-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link">
            <router-link to="/about">Acerca de</router-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link">
            <router-link to="/organizadores">Dudas</router-link>
          </a>
        </li>
      </ul>
    </header>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #fff;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.fondo{
  background-color: #242424;
}
</style>
