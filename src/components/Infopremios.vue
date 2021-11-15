<template>
    <div class="container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
            <div class="card">
                <img src="@/assets/htl.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title fw-bold">Viaje a la playa - 1er lugar</h5>
                    <p class="card-text">
                        Puedes llevarte un viaje todo incluido al hotel de lujo Azul Iztapa Grand de 3 dias y 2 noches a traves de la agencia de viajes Arletts Travels.
                    </p>
                    <router-link to="/Viaje" class="btn btn-primary">Ver premio</router-link>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card">
                <img src="@/assets/ta.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title fw-bold">Dos botellas - 2do lugar</h5>
                    <p class="card-text">
                        Puedes llevarte dos botellas de tequila marca azul de un litro cada una, destilado en el pueblo de tequila jalisco.
                        <br><span class="bnk">.</span>
                    </p>
                    <router-link to="/Botella" class="btn btn-primary">Ver premio</router-link>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card">
                <img src="@/assets/cg.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title fw-bold">Un carton - 3er lugar</h5>
                    <p class="card-text">
                        <br>El tercer lugar consta de un carton completo de caguamas a tu eleccion.
                        <br><span class="bnk">.</span>
                    </p>
                    <router-link to="/Carton" class="btn btn-primary">Ver premio</router-link>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<style scoped>
.bnk{
    color: #fff;
}
</style>