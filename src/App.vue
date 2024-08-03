<template>
  <div class="lean linear" style="height: 100vh">
    <router-view />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
@media only screen and (min-width: 768px) {
  .linear {
    padding: 2em;
  }
}
.linear {
  overflow: hidden;
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
}
</style>
