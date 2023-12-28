<script setup lang="ts">
</script>

<template>
  <div :class="$style.container">
    <div :class="$style.content">
      <img :class="$style.image" src="@/assets/images/lifecounter/icone.png">
      <nav :class="$style.nav">
        <div :class="[$style.link, $style.active]">
          <router-link to="/">
            Home
          </router-link>
        </div>
        <div :class="$style.link">
          <router-link to="/life-counter">
            Life Counter
          </router-link>
        </div>
        <div :class="$style.link">
          <router-link to="/card-creator">
            Card Creator
          </router-link>
        </div>
      </nav>
    </div>
    <div :class="$style.copyright">
      Powered by TinOak Studios
    </div>
  </div>
</template>

<style lang="scss" module>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 8px;
  height: 100vh;
  background-color: #222;

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex: 1;

    .image {
      width: 200px;
      margin-bottom: 16px;
    }

    .nav {
      display: flex;
      gap: 16px;

      .link {
        color: #fff;
        cursor: pointer;

        &.active {
          border-bottom: 1px solid #fff;
        }

        &:hover {
          border-bottom: 1px solid #fff;
        }
      }
    }
  }

  .copyright {
    color: #fff;
  }
}
</style>