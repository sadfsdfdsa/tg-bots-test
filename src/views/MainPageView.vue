<template>
  <div class="container">
    <div class="d-flex flex-row justify-content-around align-items-center mt-2">
      <div class="me-auto flex-grow-1 h3">
        Telegram bots
      </div>
      <div class="h6 text-primary">
        by Artem Shuvaev
      </div>
    </div>
    <div class="d-flex flex-row justify-content-center">
      <div class="d-flex flex-column col-lg-6">
        <div class="d-flex flex-row justify-content-center my-3">
          <b-button
            size="lg"
            variant="outline-primary"
            @click="editBot(null)"
          >
            Create new bot
          </b-button>
        </div>
        <BotRow
          v-for="(b, i) in bots"
          :key="i"
          class=" mb-2"
          :index="i + 1"
          :bot="b"
          @edit="editBot"
        />
        <div
          v-if="bots.length === 0"
          class="d-flex flex-row justify-content-center my-3 h3 text-muted"
        >
          There is no bots, create first!
        </div>
      </div>
      <BotModal
        v-if="modalShow"
        :show="modalShow"
        @close="modalShow = false"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { botsModule } from '@/store'

@Component({
  name: 'MainPageView',
  components: {
    BotRow: () => import('@/components/TheBotRowComponent.vue'),
    BotModal: () => import('@/components/TheBotModal.vue'),
  },
})
export default class MainPageView extends Vue {
  modalShow = false;

  get bots() {
    return botsModule.getters.bots
  }

  editBot(uid: string | null) {
    botsModule.dispatch('editBot', uid)
    this.modalShow = true
  }
}
</script>
