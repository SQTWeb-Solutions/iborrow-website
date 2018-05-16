<template>
  <div class="item"  width="100%">
    <div class="card">
      <div class="card-header" >
        <div class="o-media">
          <div class="o-media__img mr-2">
            <div class="c-avatar c-avatar--medium">
              <span class="c-avatar__name">QA</span>
            </div>
          </div>
          <div class="o-media__body">
            <h4 class="c-search-result__title mt-2">John <span class="text-primary">from Abuja</span></h4>
            <p class="c-search-result__meta">Borrower</p>
          </div>
        </div>
      </div>
      <div class="card-body">
        <h6 class="card-title">Loan for House Repair</h6>
        <div class="progress">
          <div class="progress-bar bg-success" role="progressbar" style="width: 85%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80% Funded</div>
        </div>
        <p class="card-text">When the equation, first to ability the forwards, the a but travelling.</p>
      </div>
      <div class="card-footer text-muted">
        2 days ago
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'loan-item'
}
</script>
<style>
.card-header {
    padding: 0.9rem 1.25rem 0.6rem 1.25rem !important;
    background: none !important;
}
.o-media {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
}

.c-avatar {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: relative;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  -ms-flex-line-pack: center;
  align-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin: 0;
  padding: 0;
  overflow: hidden;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.c-avatar__name {
  width: 70px;
  min-width: 70px;
  height: 70px;
  border-radius: 100%;
  overflow: hidden;
  line-height: 70px;
  background: #2FCA74;
  text-align: center;
  font-size: 20px;
  color: #ffffff;
}
.c-avatar--medium .c-avatar__name {
  width: 60px;
  min-width: 60px;
  height: 60px;
  line-height: 60px;
}
.o-media__body {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
.c-search-result__title {
  margin-bottom: 0;
  font-size: 1rem;
}
.c-search-result__meta {
  color: #7f8fa4;
  font-size: .875rem;
}
</style>
