<template>
    <div class="bg-white p-1.5 w-full absolute z-50 top-0 left-0 h-10 flex shadow items-center justify-center">
        <div class="w-40" >
         <img src="@/assets/logoName.svg" alt="" />
        </div>
    </div>
    <div class="m-0 p-0  opacity-10 flex justify-center items-center bg-gray-300 ">
       <img src="@/assets/dynematrixlogo.svg" alt="" class="py-16 h-screen">
    </div> 
  <div class="text">
    <h2>{{ pageData.mainDescription }}</h2> 
   <h2>{{ pageData.description }}</h2>
    <button class="btnactive font-bold" @click="login()">Login</button>
  </div>
		<div class="flex w-full absolute h-7 bg-white bottom-0 z-50 justify-center items-center p-2">
			<h1 class="text-xs">©{{new Date().getFullYear()}} Crystalline Software Technologies Pvt. Ltd</h1>
		</div>
</template>
<style scoped>
.text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 24px;
      font-weight: bold;
      text-align: center;
      color: #152a43;
  }
</style>
<script>
export default {
  data() {
    return {
      pageData: {
        errorNumber: "",
        mainDescription: "",
        description: "",
        redirectText: "",
      },
       errorInformation:{}
    };
  },
  props: ["errorResult"],
  mounted: function () {
    if(this.errorResult){
      this.errorInformation=JSON.parse(this.errorResult)
         if (this.$route.query.code == 400) {
      this.pageData.errorNumber = this.errorInformation.Number;
      this.pageData.mainDescription = "Bad request";
      this.pageData.description =  this.errorInformation.Description;
    } 
    else if (this.$route.query.code == 403) {
      this.pageData.errorNumber = this.errorInformation.Number;
      this.pageData.mainDescription = "Forbidden";
      this.pageData.description =this.errorInformation.Description;
    } 
    }
    else {
      this.pageData.errorNumber = 404;
      this.pageData.mainDescription = "Page Not Found";
      this.pageData.description =this.errorInformation.Description;
    }
  },
  methods:{
    login(){
     window.location.href ='https://dynematrix.com'; 
    }
 }
 };
</script>