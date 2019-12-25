<template>
  <div class="navbar">
    <Routerlink class="navbar__brand" to="/">
      NicoThumb
    </Routerlink>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.navbar {
  align-items: center;
  background: #fff;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, .1);
  display: flex;
  height: 4rem;
  justify-content: space-between;
  left: 0;
  padding: 2%;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 3;

  &__brand {
    color: inherit;
    font-family: Merriweather, serif;
    font-weight: bold;
    font-size: 1.2rem;
    text-decoration: none;

    &:visited {
      color: inherit;
    }

    &:hover {
      opacity: .6;
    }
  }
}
</style>
