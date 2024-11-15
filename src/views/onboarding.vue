<template>
	<div class="py-8 px-12">
		<div>
			<h1>Join Us</h1>
		</div>
		<div class="card shadow-2xl p-4 mt-8">
			<form @submit.prevent="onSubmit">
				<div class="flex row w-full mt-4">
					<div class="w-1/4">
						<label>Organisation Name: </label>
					</div>
					<div class="w-3/4">
						<input
							type="text"
							class="inputboxstyling"
							id="inputcontrolSource"
							name="inputcontrolSource"
							placeholder="Organisation Name"
							autocomplete="off"
							:class="{
								'is-invalid': v$.onboarding.organisationName.$error
							}"
							v-model="onboarding.organisationName"
						/>

						<div v-if="v$.onboarding.organisationName.$error">
							<div v-if="v$.onboarding.organisationName.required" class="invalid-feedback">Organisation Name is required</div>
						</div>
					</div>
				</div>

				<div class="flex row w-full mt-4">
					<div class="w-1/4">
						<label>Address: </label>
					</div>
                    
					<div class="w-3/4">
						<input type="text" class="inputboxstyling" id="inputcontrolSource" name="inputcontrolSource" placeholder="Address" autocomplete="off" :class="{ 'is-invalid': v$.onboarding.address.$error }" v-model="onboarding.address" />
						<div v-if="v$.onboarding.address.$error">
                             
							<div v-if="v$.onboarding.address.required" class="invalid-feedback">Address is required</div>
						</div>
					</div>
				</div>

				<div class="flex row w-full mt-4">
					<div class="w-1/4">
						<label>Phone: </label>
					</div>
					<div class="w-3/4">
						<input type="text" class="inputboxstyling" id="inputcontrolSource" name="inputcontrolSource" placeholder="Phone" autocomplete="off" :class="{ 'is-invalid': v$.onboarding.phoneNumber.$error }" v-model="onboarding.phoneNumber" />
                        <div v-if="v$.onboarding.phoneNumber.$error">
							<span v-if="v$.onboarding.phoneNumber.numeric.$invalid" class="invalid-feedback">Number is invalid</span>
							<div v-if="v$.onboarding.phoneNumber.required && !v$.onboarding.phoneNumber.numeric.$invalid"  class="invalid-feedback">Phone is required</div>
						</div>
					</div>
				</div>

				<div class="flex row w-full mt-4">
					<div class="w-1/4">
						<label>Website: </label>
					</div>
					<div class="w-3/4">
						<input type="text" class="inputboxstyling" id="inputcontrolSource" name="inputcontrolSource" placeholder="Website" autocomplete="off" :class="{ 'is-invalid': v$.onboarding.website.$error }" v-model="onboarding.website" />
						<div v-if="v$.onboarding.website.$error">
							<div v-if="v$.onboarding.website.required " class="invalid-feedback">Website is required</div>
						</div>
					</div>
				</div>

				<!-- <div class="flex row w-full mt-4">
					<div class="w-1/4">
						<label>Domain: </label>
					</div>
					<div class="w-3/4">
						<input type="text" class="inputboxstyling" id="inputcontrolSource" name="inputcontrolSource" placeholder="Domain" autocomplete="off" :class="{ 'is-invalid': v$.onboarding.domain.$error }" v-model="onboarding.domain" />
						<div v-if="v$.onboarding.domain.$error">
							<div v-if="v$.onboarding.domain.required" class="invalid-feedback">Domain is required</div>
						</div>
					</div>
				</div> -->

				<div class="flex row w-full mt-4">
					<div class="w-1/4">
						<label>Contact person: </label>
					</div>
					<div class="w-3/4">
						<input type="text" class="inputboxstyling" id="inputcontrolSource" name="inputcontrolSource" placeholder="Contact person" autocomplete="off" :class="{ 'is-invalid': v$.onboarding.contactPerson.$error }" v-model="onboarding.contactPerson" />
						<div v-if="v$.onboarding.contactPerson.$error">
							<div v-if="v$.onboarding.contactPerson.required" class="invalid-feedback">Contact Person is required</div>
						</div>
					</div>
				</div>
				<div class="flex row w-full mt-4">
					<div class="w-1/4">
						<label>Organisation Email: </label>
					</div>
					<div class="w-3/4">
						<input
							type="text"
							class="inputboxstyling"
							id="inputcontrolSource"
							name="inputcontrolSource"
							placeholder="contactPersonEmail"
							autocomplete="off"
							:class="{
								'is-invalid': v$.onboarding.contactPersonEmail.$error
							}"
							v-model="onboarding.contactPersonEmail"
						/>
						<div v-if="v$.onboarding.contactPersonEmail.$error">
							<div v-if="v$.onboarding.contactPersonEmail.required" class="invalid-feedback">Contact Person Email is required</div>
						</div>
					</div>
				</div>

				<!-- <div class="flex row w-full mt-4">
					<div class="w-1/4">
						<label>Sub Domain: </label>
					</div>
					<div class="w-2/4">
						<input type="text" class="inputboxstyling" id="inputcontrolSource" name="inputcontrolSource" placeholder="domain" autocomplete="off" disabled v-model="onboarding.domain" />
						<div class="col-md-2 subdomain" id="textalignment"></div>
					</div>
					<p class="w-1/4 mt-1">.vue-direct.com</p>
				</div> -->
				<div class="flex justify-center mt-4">
					<button class="btnactive mr-6">
						<span>Save</span>
					</button>
				</div>
			</form>
		</div>
	</div>
</template>
<style scoped>
label {
	float: left;
	width: 100%;
	text-align: right;
	padding: 0.5rem;
}

.invalid-feedback {
	color: red;
}
.is-invalid {
	border: 1px solid red !important;
}
</style>
<script lang="ts">
// import { mapGetters } from 'vuex';

import { required,email, helpers } from '@vuelidate/validators';



import useVuelidate from '@vuelidate/core';
const numeric = helpers.regex( /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/i);

// import { globalApiMixin } from '../../GlobalMixins/apiGlobalMixins';
import { defineComponent } from 'vue';
import { toast } from '../main';
export default defineComponent({

	// mixins: [globalApiMixin],
	name: 'app',
	data() :any{
		return {
            v$: useVuelidate(),
			onboarding: {
				organisationName: '',
				address: '',
				phoneNumber: '',
				website: '',
				domain: '',
				contactPerson: '',
				contactPersonEmail: '',
				subDomain: ''
			},
			isLoading: false
		};
	},
	validations() {

        return{
onboarding: {
			organisationName: { required },
			address: { required },
			contactPerson: { required },
			contactPersonEmail: { required, email },
			phoneNumber: { required ,numeric},
			website: { required },
			// domain: { required },
			// subDomain: {}
		}
        }
		
	},

	computed: {
		// ...mapGetters({
		// 	userInfo: 'userInfo'
		// })
	},
	methods: {
		addOrganization(payload:any) {
			this.$http
				.post(`${process.env.VUE_APP_API_URL}/${process.env.VUE_APP_AUTH_API_PATH}/onboarding`, payload)
				.then(() => {
					toast.success(`Organisations Added.`, {
						timeout: 1000,
					closeOnClick: true,
					closeButton: 'button',
					icon: true
					});
					this.$router.back();
				})
				.catch(() => {
						toast.error(`Organisations  Not Added.`, {
					timeout: 1000,
					closeOnClick: true,
					closeButton: 'button',
					icon: true
					});
				});
		},
		onSubmit() {
            console.log("save")
			this.submitted = true;
			this.v$.$touch();
			if (this.v$.$invalid) {
                 console.log("savedsdd")
				return;
			}
			let fullDomain = this.onboarding.contactPersonEmail.substring(this.onboarding.contactPersonEmail.lastIndexOf("@") + 1);
            let orgName = fullDomain.split('.')[0];
			let payload = {
				organizationName: this.onboarding.organisationName,
				orgLogo: '',
				address: this.onboarding.address,
				contactNumber: this.onboarding.phoneNumber,
				websiteUrl: this.onboarding.website,
				contactPerson: this.onboarding.contactPerson,
				tenantName: orgName,
				isActive: false,
				// createdBy: this.userInfo._id,
				createdAt: new Date(),
				// updatedBy: this.userInfo._id,
				updatedAt: new Date()
			};
			console.log('payload',payload);
			this.addOrganization(payload);
		}
	}
});
</script>