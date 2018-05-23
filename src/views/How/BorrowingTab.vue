<template>
  <div class="our-portfolio  pt-5">
    <div class="container">
      <div class="theme-title">
        <h6>Borowing Steps</h6>
        <h2>How to borrow</h2>
        <a :href="`${applicationUrl}/auth/register/borrower`"  class="tran3s">Start Borrowing</a>
      </div>
    </div>
    <div class="wrapper">
      <div class="row">
        <div class="what-we-do mt-4">
          <div class="row">
            <div class="col-md-4 col-sm-6 col-xs-12">
              <single-block link="auth/register/borrower" title="Create Account in minutes" description="Step 1: Create a borrower account on iBorrow, by filling the required information on the regsistration page.">
                <img src="@/assets/images/login.svg" />
              </single-block>
            </div>
            <div class="col-md-4 col-sm-6 col-xs-12">
              <single-block middle link="auth/register/borrower" title="Unlock your account" description="Step 2: Check your email for the verification instruction and activate your account to start using it on iBorrow.">
                <img src="@/assets/images/lock.svg" />
              </single-block>
            </div>
            <div class="col-md-4 col-sm-12 col-xs-12">
              <single-block link="auth/register/borrower" title="Make loan live" description="Step 3: Post your loan request on iBorrow with your account by setting the interest rate, repayment period and expiry date.">
                <img src="@/assets/images/notes.svg" />
              </single-block>
            </div>
            <div class="col-md-4 col-sm-12 col-xs-12">
              <single-block link="auth/register/borrower" title="Commitment by Investor" description="Step 4: Once your loan is live, Investment request will start coming from all investor available in your state of preference.">
                <img src="@/assets/images/group.svg" />
              </single-block>
            </div>
            <div class="col-md-4 col-sm-12 col-xs-12">
              <single-block middle link="auth/register/borrower" title="Contract terms confirmation" description="Step 5: iBorrow prepare a valid contract terms agreement between the two party and the parties can view and verify.">
                <img src="@/assets/images/contract.svg" />
              </single-block>
            </div>
            <div class="col-md-4 col-sm-12 col-xs-12">
              <single-block link="auth/register/borrower" title="Receive payment" description="Step 6: Once all legal formalities have been completed, investor will transfer the money to your account with the account informatin you provided.">
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
  name: 'borrowing-tab',
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
