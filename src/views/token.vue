<script>
export default {
  mounted: function () {
    console.log(this.$route.query.access_token);
    console.log("coming here");
    let tokenSet = {
      access_token: this.$route.query.access_token,
      id_token: this.$route.query.id_token,
      refresh_token: this.$route.query.refresh_token,
      expires_at: this.$route.query.expires_at,
      provider: this.$route.query.provider,
    };
    this.$http
      .post(
        `${process.env.VUE_APP_API_URL}/${process.env.VUE_APP_AUTH_API_PATH}/token/get`,
        tokenSet
      )
      .then((result) => {
        let resultData='';
        if (result.data.errorStatus == true) {
          this.$router.push({
            name: "error",
            query: { code: result.data.errorCode },
            params: { errorResult: JSON.stringify( { Number: result.data.errorCode , Description: result.data.Description } )}
          });
        } else {
          if(this.$route.query.returnTo=="undefined"){ 
          let activeApp=  result.data.apps.filter((app)=>{
              return app.isActive
            })
            if(activeApp.length==0){
               this.$router.push({ name: "error", query: { code: 403 }, params: { errorResult: JSON.stringify( { Number: 403 , Description: "App is not active"} )} });
            }else{
             this.$route.query.returnTo=`${process.env.VUE_APP_TRAINING_WEBAPP_URL}`;
            }
          }
          //this.$route.query.returnTo ='https://training.vuedirect.com';
          if(result.data.apps){
            resultData = result.data.apps.filter((app) => {
           return (
              app.appName.toLowerCase() ==
              this.$route.query.returnTo
                .replace(/(^\w+:|^)\/\//, "")
                .split(".")[0]
            );
          })[0];
          }
          if( result.data.apps.length>0 && !resultData.isActive) {
            this.$router.push({ name: "error", query: { code: 403 }, params: { errorResult: JSON.stringify( { Number: 403 , Description: "App is not active"} )} });
          }else {
            this.$store.commit("auth_success", result.data.userInfo);
            const userInfo = result.data.userInfo;
            console.log("userInfo info>>>>>", userInfo);
            localStorage.setItem("AUTH_ID", result.data.sessionId);
            console.log(
              "process.env.VUE_APP_ORG_WEBAPP_URL",
              process.env.VUE_APP_ORG_WEBAPP_URL
            );
            console.log(
              "this.$route.query.returnTo",
              this.$route.query.returnTo
            );
           if (userInfo.organisationType == 10702) {
              if (this.$route.query.returnTo == "undefined") {
               window.location.href = `${process.env.VUE_APP_ORG_WEBAPP_URL}?session=${result.data.sessionId}`;
              } else {
                let appName=this.$route.query.returnTo
                .replace(/(^\w+:|^)\/\//, "")
                .split(".")[0]
                if(appName=='admin'){
                    window.location.href = `${process.env.VUE_APP_ORG_WEBAPP_URL}?session=${result.data.sessionId}`;
                }else{
                    window.location.href = `${this.$route.query.returnTo}?session=${result.data.sessionId}`;
                }
              }
            }  else {
                       if (this.$route.query.returnTo == "undefined") {
              console.log(3)
                window.location.href = `${process.env.VUE_APP_ADMIN_WEBAPP_URL}/admin?session=${result.data.sessionId}`;
            } else {
              console.log(4)
                window.location.href = `${this.$route.query.returnTo}/admin?session=${result.data.sessionId}`;
            }
            }
          }
        }
      });
  },
  computed: {
    generateApiUrl() {
      if (window.location.hostname.includes("localhost")) {
        return "http://localhost:3000/services/monitor";
      } else {
        // return window.location.origin+'/services/monitor';
        return "https://api.test.com/services/auth";
      }
    },
  },
};
</script>