<script>
export default {
  mounted: function () {
    const returnUrl = this.$route.query.returnTo;
   localStorage.removeItem('AUTH_ID');
   this.$router.push({ name: "login", query: { returnTo: returnUrl } });
  },
};
</script>