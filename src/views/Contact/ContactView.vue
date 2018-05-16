<template>
<div class="about">
  <breadcrumb page="Contact Us" title="Get in touch"></breadcrumb>
  <div class="contact-us">
    <div class="container">
      <div class="row">
        <div class="col-lg-7 col-md-6 col-xs-12">
          <div class="contact-us-form">
            <form action="inc/sendemail.php" class="form-validation" autocomplete="off">
              <input type="email" placeholder="Email Address*" name="email">
              <input type="text" placeholder="Subject*" name="sub">
              <textarea placeholder="Your Message*" name="message"></textarea>
              <button class="p-bg-color hvr-trim-two">SEND MESSAGE</button>
            </form>
          </div>
        </div>
        <div class="col-lg-5 col-md-6 col-xs-12">
          <div class="contact-address">
            <h2>Don’t Hesitate to contact with us for any kind of information</h2>
            <p>Call us for imiditate support this number</p>
            <a href="tel:+234703612212" class="tran3s">880 876 65 455</a>
            <ul>
              <li><a href="" class="tran3s"><font-awesome-icon :icon="['fab', 'facebook']" /></a></li>
              <li><a href="" class="tran3s"><font-awesome-icon :icon="['fab', 'twitter']" /></a></li>
              <li><a href="" class="tran3s"><font-awesome-icon :icon="['fab', 'google-plus']" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="alert-wrapper" id="alert-success">
      <div id="success">
        <button class="closeAlert"><i class="fa fa-times" aria-hidden="true"></i></button>
        <div class="wrapper">
                  <p>Your message was sent successfully.</p>
                </div>
          </div>
      </div>
      <div class="alert-wrapper" id="alert-error">
          <div id="error">
              <button class="closeAlert"><i class="fa fa-times" aria-hidden="true"></i></button>
              <div class="wrapper">
                  <p>Sorry!Something Went Wrong.</p>
              </div>
          </div>
      </div>
  </div>

</div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
export default {
  name: 'contact',
  components: {
    Breadcrumb
  },
  metaInfo () {
    return {
      title: 'Contact iBorrow'
    }
  }
}
</script>
