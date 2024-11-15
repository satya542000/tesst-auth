<template>
  <div class="body-container">
    <div class="background flex justify-center items-center">
      <div class="card">
        <div class="h-1/5 bg-bordergrey logo flex justify-center">
          <img src="../assets/logoName.svg" alt="" class="w-48" />
        </div>
        <div class="h-4/5">
          <div class="flex justify-center flex-col items-center mt-8">
            <div>
              <h1 class="text-primary font-semibold">Welcome back</h1>
            </div>
            <div>
              <p class="text-silver mt-1 text-sm">Sign into your account</p>
            </div>
          </div>
          <div class="mt-8 flex flex-col items-center">
            <div
              class="loginblock cursor-pointer mt-4"
              @click="triggerAuth('google')"
            >
              <div class="flex flex-row items-center justify-center py-1">
                <div class="w-1/4 flex justify-center">
                  <img src="../assets/google.png" class="w-5 h-5" />
                </div>

                <div class="w-3/4">
                  <p class="textName">Sign In With Google</p>
                </div>
              </div>
            </div>
            <div
              class="loginblock cursor-pointer mt-4"
              @click="triggerAuth('outlook')"
            >
              <div class="flex flex-row items-center justify-center py-1">
                <div class="w-1/4 flex justify-center">
                  <img src="../assets/microsoft.png" class="w-5 h-5" />
                </div>
                <div class="w-3/4">
                  <p class="textName">Sign In With Microsoft</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.textName {
  color: hsl(0, 0%, 11%);
}
.loginblock {
  border: 1px solid #878787;
  border-radius: 30px;
  width: 264px;
}

.loginblock:hover {
  background: #e9e9e9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  border: none;
}
.background {
  background: linear-gradient(252.29deg, #5cc8f3 0.75%, #5d7cf0 80.87%);
  height: 100vh;
}
.card {
  background: #ffffff;
  border: 2px solid #7399e8;
  box-sizing: border-box;
  border-radius: 10px;
  height: 350px;
  width: 350px;
}
h1 {
  font-size: 22px !important;
}
.logo {
  border-radius: 8px 8px 0px 0px;
}
</style>

<script>
export default {
  methods: {
    triggerAuth(loginMethod) {
      console.log("aa", process.env.VUE_APP_API_URL);
      window.location.href = `${process.env.VUE_APP_API_URL}/${process.env.VUE_APP_AUTH_API_PATH}/signin/${loginMethod}?backToPath=${this.$route.query.returnTo}`;
    },
  },
};
</script>