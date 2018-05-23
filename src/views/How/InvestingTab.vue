<template>
  <div class="our-portfolio pt-5">
    <div class="container">
      <div class="theme-title">
        <h6>Investment Steps</h6>
        <h2>How to Invest</h2>
        <a :href="`${applicationUrl}/auth/register/investor`" class="tran3s">Start Investing</a>
      </div>
    </div>
    <div class="wrapper">
      <div class="row">
        <div class="what-we-do mt-4">
          <div class="row">
            <div class="col-md-4 col-sm-6 col-xs-12">
              <single-block link="auth/register/investor" title="Create Account in minutes" description="Step 1: Create an investors account on iBorrow, by filling the required information on the regsistration page.">
                <img src="@/assets/images/login.svg" />
              </single-block>
            </div>
            <div class="col-md-4 col-sm-6 col-xs-12">
              <single-block middle link="auth/register/investor" title="Unlock your account" description="Step 2: Check your email for the verification instruction and activate your account to start using it on iBorrow.">
                <img src="@/assets/images/lock.svg" />
              </single-block>
            </div>
            <div class="col-md-4 col-sm-12 col-xs-12">
              <single-block link="auth/register/investor" title="Review pre-verified loans" description="Step 3: View and review all pre-verified loans from your location and send investment request for your loan of preference.">
                <img src="@/assets/images/notes.svg" />
              </single-block>
            </div>
            <div class="col-md-4 col-sm-12 col-xs-12">
              <single-block link="auth/register/investor" title="Loan verification" description="Step 4: Communicate with respective borrower and verify the loan status and credibility with terms and agreement.">
                <img src="@/assets/images/approved.svg" />
              </single-block>
            </div>
            <div class="col-md-4 col-sm-12 col-xs-12">
              <single-block middle link="auth/register/investor" title="Contract terms confirmation" description="Step 5: iBorrow prepare a valid contract terms agreement between the two party and the parties can view and verify.">
                <img src="@/assets/images/contract.svg" />
              </single-block>
            </div>
            <div class="col-md-4 col-sm-12 col-xs-12">
              <single-block link="auth/register/investor" title="Loan disbursement" description="Step 6: Once all legal formalities have been completed, investors need to transfer funds to the borrowers account and provide approval for loan disbursal.">
                <img src="@/assets/images/money-bag.svg" />
              </single-block>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SingleBlock from './SingleBlock'
export default {
  name: 'investing-tab',
  data () {
    return {
      applicationUrl: process.env.VUE_APP_APPLICATION_URL
    }
  },
  components: {
    SingleBlock
  }
}
</script>
