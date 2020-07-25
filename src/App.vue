<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">💮 ARDUINODE</a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" to="/">Home</router-link>
            </li>
          </ul>
              <span class="navbar-text">Made by ✅ PP-SYSTEM</span>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>
