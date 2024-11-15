<script>
export default {
  mounted: function () {
    const returnUrl = this.$route.query.returnTo;
    console.log("returnUrl", returnUrl);
    if (localStorage.getItem("AUTH_ID")) {
      window.location.replace(`${returnUrl}?session=${localStorage.getItem("AUTH_ID")}`);
    } else {
      this.$router.push({ name: "login", query: { returnTo: returnUrl } });
    }
  },
};
</script>