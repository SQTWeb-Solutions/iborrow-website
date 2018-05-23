<template>
<div class="about">
  <breadcrumb page="About Us" title="Company Story"></breadcrumb>
  <div class="about-text">
    <div class="container">
      <div class="title">
        <h6>WELCOME TO iBorrow</h6>
        <h2>We’r alternative investment option to Investors and<br> affordable personal loans to Borrowers</h2>
      </div>
      <img src="@/assets/images/inner-page/1.jpg" alt="iBorrow Team">
      <div class="about-tab-wrapper clearfix">
        <h3 class="text-center mb-3">About iBorrow</h3>
        <p>Folly was these three and songs arose whose. Of in vicinity contempt together in possible branched. Assured company hastily looking garrets in oh. Most have love my gone to this so. Discovered interested prosperous the our affronting insipidity day. Missed lovers way one vanity wishes nay but. Use shy seemed within twenty wished old few regret passed. Absolute one hastened mrs any sensible.</p>
        <h3 class="text-center mt-5 mb-3">Our History</h3>
        <p>Folly was these three and songs arose whose. Of in vicinity contempt together in possible branched. Assured company hastily looking garrets in oh. Most have love my gone to this so. Discovered interested prosperous the our affronting insipidity day. Missed lovers way one vanity wishes nay but. Use shy seemed within twenty wished old few regret passed. Absolute one hastened mrs any sensible.</p>
        <img src="@/assets/images/home/sign.png" alt="Signature">
        <div class="row">
          <div class="col-md-3">
            <ul class="nav nav-tabs d-flex flex-column">
              <li class="active"><a data-toggle="tab" href="#mission" aria-expanded="true">Our Mission</a></li>
              <li class=""><a data-toggle="tab" href="#vision" aria-expanded="false">Vision</a></li>
            </ul>
          </div>
          <div class="col-md-9">
            <div class="tab-content">
              <div id="mission" class="tab-pane active show in fade">
                  <p>Mission text We provide marketing services to startups and small businesses to looking for a partner of their digital media, design &amp; dev, lead generation, and communications requirents. We work with you, not for you. Although we have great resources.</p>
              </div>
              <div id="vision" class="tab-pane fade">
                <p>Vission text We provide marketing services to startups and small businesses to looking for a partner of their digital media, design &amp; dev, lead generation, and communications requirents. We work with you, not for you. Although we have great resources.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <home-counter></home-counter>
  <home-action></home-action>
  <div class="two-section-wrapper">
    <testimonial></testimonial>
    <partners></partners>
  </div>
</div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import HomeCounter from '@/components/Counter'
import HomeAction from '@/components/Actions'
import Testimonial from '@/components/Testimonial'
import Partners from '@/components/Partners'
export default {
  name: 'about',
  components: {
    Breadcrumb,
    Testimonial,
    Partners,
    HomeCounter,
    HomeAction
  },
  metaInfo () {
    return {
      title: 'About iBorrow'
    }
  }
}
</script>
