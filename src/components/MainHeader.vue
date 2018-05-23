<template>
  <header class="theme-menu-wrapper full-width-menu" :class="{ 'fixed': sticky, 'bg-white': this.$route.meta.white }">
    <div class="header-wrapper">
      <div class="clearfix">
        <div class="logo float-left tran4s"><a href="/"><img src="@/assets/images/logo/logo_50px.png" alt="Logo"></a></div>

        <nav class="theme-main-menu d-flex justify-content-end navbar navbar-expand-lg " id="mega-menu-wrapper">
          <div class="navbar-header">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" @click="collapsing" :class="{ 'collapsed': collapse }" data-toggle="collapse" data-target="#navbar-collapse-1" :aria-expanded="[ collapse ? 'false' : 'true' ]">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
            </div>
          </div>
          <div class="collapse navbar-collapse d-flex justify-content-end" :class="{ 'in': !collapse }" id="navbar-collapse-1" :aria-expanded="[ collapse ? 'false' : 'true' ]">
            <ul class="nav">
              <li class="dropdown-holder menu-list active"><a href="#" class="tran3s">Borrowers</a>
                <ul class="sub-menu">
                  <li><a href="#">Apply for Loan</a></li>
                  <li><a href="#">Active Borrowers</a></li>
                  <li><a href="#">Business Opportunity</a></li>
                  <li><router-link :to="{ name: 'why-borrow' }">Why Borrow</router-link></li>
                  <li><router-link :to="{ name: 'how-it-works' }">How it works</router-link></li>
                  <li><a href="#">Terms of use</a></li>
                  <li><a href="#">FAQs</a></li>
                </ul>
              </li>
              <li class="dropdown-holder menu-list"><a href="#" class="tran3s">Investors</a>
                <ul class="sub-menu">
                  <li><a href="#">Start Investing</a></li>
                  <li><a href="#">Active Investors</a></li>
                  <li><a href="#">Business Opportunity</a></li>
                  <li><router-link :to="{ name: 'why-invest' }">Why Invest</router-link></li>
                  <li><a href="#">How it works</a></li>
                  <li><a href="#">Terms of use</a></li>
                  <li><a href="#">FAQs</a></li>
                </ul>
              </li>
              <li class="dropdown-holder menu-list"><a href="#" class="tran3s">Knowledege Center</a>
                <ul class="sub-menu">
                  <li><a href="#">News & Blog</a></li>
                  <li><a href="#">FAQs</a></li>
                  <li><a href="#">Terms of use</a></li>
                  <li><a href="#">Policies</a></li>
                  <li><a href="#">How it works</a></li>
                </ul>
              </li>
              <li class="dropdown-holder menu-list"><router-link :to="{ name: 'about-page' }" tag="a" class="tran3s">Company</router-link>
                <ul class="sub-menu">
                  <li><router-link :to="{ name: 'about-page' }" tag="a">About iBorrow</router-link></li>
                  <li><router-link :to="{ name: 'why-iborrow' }">Why iBorrow</router-link></li>
                  <li><a href="#">Advisory Board</a></li>
                  <li><router-link :to="{ name: 'contact-page' }">Contact Us</router-link></li>
                </ul>
              </li>
              <li class="login-button"><a :href="applicationUrl" class="tran3s">login</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'main-header',
  data () {
    return {
      sticky: false,
      collapse: true,
      applicationUrl: process.env.VUE_APP_APPLICATION_URL
    }
  },
  mounted () {
    let _this = this
    // eslint-disable-next-line
    let sticky = $('.theme-menu-wrapper'),
      $window = $(window)
    $window.on('scroll', () => {
      if ($window.scrollTop() > 100) {
        _this.sticky = true
      } else if ($window.scrollTop() < 100) {
        _this.sticky = false
        sticky.removeClass('fixed')
      }
    })

    $('#mega-menu-wrapper .nav li.dropdown-holder').append(function () {
      return `<i class="fa"><svg  aria-hidden="true" data-prefix="fas" data-icon="angle-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-angle-down fa-w-10"><path fill="currentColor" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" class=""></path></svg></i>`
    })
    $('#mega-menu-wrapper .nav li.dropdown-holder .fa').on('click', function () {
      $(this).parent('li').children('ul').slideToggle()
    })
  },
  methods: {
    collapsing () {
      this.collapse = !this.collapse
    }
  }
}
</script>
