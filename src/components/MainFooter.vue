<template>
  <div>
    <footer class="bg-one">
      <div class="container">
        <div class="row">
            <div class="col-md-3 col-sm-6 col-xs-12">
                <div class="footer-logo">
                    <a href="/"><img src="@/assets/images/logo/logo_50px.png" alt="iBorrow"></a>
                    <h5><a href="mailto:info@iborrow.com" class="tran3s">info@iborrow.com</a></h5>
                    <h6 class="p-color">+202. 277. 3894</h6>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12 footer-list">
                <h4>Quick Links</h4>
                <ul>
                    <li><router-link :to="{ name: 'why-iborrow' }" class="tran3s">Why iBorrow</router-link></li>
                    <li><router-link :to="{ name: 'how-it-works' }" class="tran3s">How it Works</router-link></li>
                    <li><a href="#" class="tran3s">FAQs</a></li>
                    <li><a href="#" class="tran3s">Legal Terms</a></li>
                    <li><a href="#" class="tran3s">Policies</a></li>
                </ul>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12 footer-list">
                <h4>Company</h4>
                <ul>
                    <li><router-link :to="{ name: 'about-page' }" tag="a" class="tran3s">About iBorrow</router-link></li>
                    <li><a href="#" class="tran3s">Advisory Board</a></li>
                    <li><a href="#" class="tran3s">Testimonials</a></li>
                    <li><a href="#" class="tran3s">News & Blog</a></li>
                    <li><router-link :to="{ name: 'contact-page' }" class="tran3s">Contact Us</router-link></li>
                </ul>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12 footer-subscribe">
                <h4>Subscribe Us</h4>
                <form action="#">
                    <input type="text" placeholder="Enter your mail">
                </form>
                <h4>Follow us on: </h4>
                <footer-social></footer-social>
            </div>
        </div> <!-- /.row -->

        <div class="bottom-footer clearfix">
            <ul class="float-right">
                <footer-counter :start="0" :stop="8997" :speed="2000" text="Investors"></footer-counter>
                <footer-counter :start="0" :stop="5000" :speed="2000" text="Borrowers"></footer-counter>
                <footer-counter :start="0" :stop="1200" :speed="2000" text="Loans"></footer-counter>
            </ul>
            <p class="float-left">&copy; {{ new Date().getFullYear() }} <a href="#" class="tran3s p-color">iBorrow</a>. All rights reserved</p>
        </div>
      </div> <!-- /.container -->
    </footer>
    <scroll-up></scroll-up>

    <div id="svag-shape">
        <svg height="0" width="0">
            <defs>
                <clipPath id="shape-one">
                    <path fill-rule="evenodd"  fill="rgb(168, 168, 168)"
                d="M343.000,25.000 C343.000,25.000 100.467,106.465 25.948,237.034 C-30.603,336.119 15.124,465.228 74.674,495.331 C134.224,525.434 212.210,447.071 227.280,432.549 C242.349,418.028 338.889,359.517 460.676,506.542 C582.737,653.896 725.650,527.546 751.000,478.000 C789.282,403.178 862.636,-118.314 343.000,25.000 Z"/>
                </clipPath>
            </defs>
        </svg>
    </div>
  </div>
</template>

<script>
import ScrollUp from './scrollUp'
import FooterCounter from './FooterCounterItem'
import FooterSocial from './FooterSocial'
export default {
  name: 'main-footer',
  components: {
    ScrollUp,
    FooterCounter,
    FooterSocial
  }
}
</script>
