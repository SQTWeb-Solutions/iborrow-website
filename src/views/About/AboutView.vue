<template>
<div class="about">
  <breadcrumb page="About Us" title="Company Story"></breadcrumb>
  <div class="about-text">
    <div class="container">
      <div class="title">
        <h6>WELCOME TO iBorrow</h6>
        <h2>We’r a dynamic team of creatives people <br>innovation &amp; Marketing Expert.</h2>
      </div>
      <img src="images/inner-page/1.jpg" alt="">
      <div class="about-tab-wrapper clearfix">
        <ul class="nav nav-tabs float-left">
          <li class="active"><a data-toggle="tab" href="#history">Our History</a></li>
          <li><a data-toggle="tab" href="#vision">Vision</a></li>
          <li><a data-toggle="tab" href="#contact">Contact Us</a></li>
          <li><a data-toggle="tab" href="#news">News</a></li>
        </ul>
        <div class="tab-content float-left">
          <div id="history" class="tab-pane fade in active">
              <p>We provide marketing services to startups and small businesses to looking for a partner of their digital media, design &amp; dev, lead generation, and communications requirents. We work with you, not for you. Although we have great resources.</p>
              <img src="images/home/sign.png" alt="">
          </div> <!-- /#history -->
            <div id="vision" class="tab-pane fade">
              <p>We provide marketing services to startups and small businesses to looking for a partner of their digital media, design &amp; dev, lead generation, and communications requirents. We work with you, not for you. Although we have great resources.</p>
            </div> <!-- /#vision -->
            <div id="contact" class="tab-pane fade">
              <p>We provide marketing services to startups and small businesses to looking for a partner of their digital media, design &amp; dev, lead generation, and communications requirents. We work with you, not for you. Although we have great resources.</p>
            </div> <!-- /#contact -->
            <div id="news" class="tab-pane fade">
              <p>We provide marketing services to startups and small businesses to looking for a partner of their digital media, design &amp; dev, lead generation, and communications requirents. We work with you, not for you. Although we have great resources.</p>
            </div> <!-- /#news -->
        </div>
      </div> <!-- /.about-tab-wrapper -->
    </div> <!-- /.container -->
  </div>

</div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
export default {
  name: 'about',
  components: {
    Breadcrumb
  }
}
</script>
