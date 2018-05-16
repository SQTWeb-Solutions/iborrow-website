<template>
  <div class="business-statics">
    <img src="@/assets/images/home/chart.png" alt="" id="chart">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-xs-12 order-md-2">
          <div class="main-content">
            <div class="theme-title-two">
              <h2><span>We’re <strong>ready to</strong> serve</span> <br> <span>you with best.</span></h2>
            </div>
            <div class="main-wrapper">
              <h4>Trusted Partners and relaible investors/borrowers ready for you</h4>
              <p>We are here to help make your business go better with easy by connecting to the right investors/borrowers.</p>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-xs-12 order-md-1">
          <div class="wrapper">
            <div class="statics">
              <strong>1,234</strong>
              <font-awesome-icon icon="smile" size="lg" />
              <p>Loans completed</p>
            </div>
            <div class="statics fix">
              <strong>786</strong>
              <i class="fa fa-long-arrow-down" aria-hidden="true"></i>
              <font-awesome-icon icon="meh" size="lg" />
              <p>Loans pending</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home-caption'
}
</script>
