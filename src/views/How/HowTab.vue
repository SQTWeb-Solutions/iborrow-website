<template>
  <div class="row">
    <div class="col-md-8 offset-md-2">
      <div class="d-flex justify-content-center">
        <tab-control>
          <li class="nav-item">
            <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Investors</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Borrowers</a>
          </li>
        </tab-control>
      </div>
    </div>
    <tab-content>
      <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
        <investing-tab></investing-tab>
      </div>
      <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
        <borrowing-tab></borrowing-tab>
      </div>
    </tab-content>
  </div>
</template>

<script>
import TabControl from './TabControl'
import TabContent from './TabContent'
import BorrowingTab from './BorrowingTab'
import InvestingTab from './InvestingTab'
export default {
  name: 'how-tab',
  components: {
    TabControl,
    TabContent,
    BorrowingTab,
    InvestingTab
  }
}
</script>
