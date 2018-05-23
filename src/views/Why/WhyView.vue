<template>
<div class="about">
  <breadcrumb page="Why iBorrow" title="Why you should use iBorrow"></breadcrumb>
  <div class="service-version-two">
    <div class="container">
      <single-service>
        <image-container topText="iBorrow gives you a better opporunity of money in return for your investent">
          <img src="@/assets/images/inner-page/why-iborrow-1.jpg" alt="Man smilling with good result">
        </image-container>
        <div class="col-md-6 col-xs-12 text">
          <p>Exclusive Bonuses</p>
          <h2>Enjoy bonus payout on every transaction</h2>
          <p>Make money investing with iBorrow and get bonuses on every transaction you make on iBorrow. Your transactions counts and give you more access/priviledge on iBorrow.</p>
          <a :href="`${applicationUrl}/auth/create-account`" class="tran3s mt-2"><font-awesome-icon icon="long-arrow-alt-right" /> Join us now </a>
        </div>
      </single-service>
      <single-service>
        <div class="col-md-6 col-xs-12 text">
          <p>No down time</p>
          <h2>Get exclusive loan offer from potential investors</h2>
          <p>Get loan from verified and potential investors with little or no collateral. All loan offers are friendly and covenient.</p>
          <a :href="`${applicationUrl}/auth/register/borrowers`" class="tran3s mt-2"><font-awesome-icon icon="long-arrow-alt-right" /> Start borrowing </a>
        </div>
        <image-container topText="Get loan from verified investors with little or no collateral">
          <img src="@/assets/images/inner-page/why-iborrow-2.jpg" alt="Man calculating loan">
        </image-container>
      </single-service>
      <single-service>
        <image-container bottomText="Pay back loan within 3-24 months tenure plan.">
          <img src="@/assets/images/inner-page/why-iborrow-4.jpg" alt="Man smilling with good result">
        </image-container>
        <div class="col-md-6 col-xs-12 text">
          <p>Less commision</p>
          <h2>Loan with less interest rate.</h2>
          <p>Get loan with very low and afordable interest rate with vast paymen return scheme. All loans are considered friendly with low interest rate.</p>
          <a :href="`${applicationUrl}/auth/register/borrowers`" class="tran3s mt-2"><font-awesome-icon icon="long-arrow-alt-right" /> Start borrowing </a>
        </div>
      </single-service>
      <single-service>
        <div class="col-md-6 col-xs-12 text">
            <p>Business Opportunities</p>
            <h2>Have high turnout investent on your business</h2>
            <p>Have best business tips/advice and investment on iBorrow from potential investors and successfull business mans and womans.</p>
            <a :href="`${applicationUrl}/auth/create-account`" class="tran3s"><font-awesome-icon icon="long-arrow-alt-right" /> Join us now </a>
          </div>
          <image-container topText="Worry less about how to get investment for your business endeavours." bottomText="iBorrow connects you to potenial investors to help make your business reality comes to live.">
            <img src="@/assets/images/inner-page/why-iborrow-3.jpg" alt="Woman thinking how to pay loan">
          </image-container>
      </single-service>
    </div>
  </div>
</div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import SingleService from './SingleService'
import ImageContainer from './ImageContainer'
export default {
  name: 'why-iborrow-view',
  components: {
    Breadcrumb,
    SingleService,
    ImageContainer
  },
  data () {
    return {
      applicationUrl: process.env.VUE_APP_APPLICATION_URL
    }
  },
  metaInfo () {
    return {
      title: 'Why iBorrow'
    }
  }
}
</script>
