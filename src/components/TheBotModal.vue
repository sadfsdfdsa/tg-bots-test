<template>
  <b-modal
    :visible="show"
    :title="header"
    centered
    hide-footer
    no-close-on-backdrop
    hide-header-close
  >
    <div class="d-flex flex-row">
      <b-input-group
        size="md"
        prepend="Name"
      >
        <b-form-input v-model="name" />
      </b-input-group>
    </div>
    <div class="d-flex flex-row mt-2">
      <b-form-textarea
        id="textarea"
        v-model="descr"
        placeholder="The bot description..."
        rows="3"
        max-rows="6"
      />
    </div>
    <div class="d-flex flex-row mt-2">
      <b-form-file
        v-model="icon"
        :state="Boolean(icon)"
        placeholder="Choose a file or drop it here..."
        drop-placeholder="Drop file here..."
        accept="image/jpeg, image/png, image/gif"
      />
    </div>
    <div class="d-flex flex-row mt-2">
      <b-form-datepicker
        id="example-datepicker"
        v-model="date"
        class="mb-2"
      />
    </div>
    <div
      v-if="errLabel"
      class="d-flex flex-row mt-2 text-danger"
    >
      {{ errLabel }}
    </div>
    <div class="d-flex flex-row mt-3 justify-content-center">
      <b-button
        class="col-3"
        variant="secondary"
        @click="close"
      >
        Cancel
      </b-button>
      <b-button
        class="ml-5 col-3"
        variant="success"
        @click="save"
      >
        Save
      </b-button>
    </div>
  </b-modal>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'
import { botsModule } from '@/store'
import { Bot } from '@/types'
import { uid } from '@/utils'

@Component({
  name: 'TheBotModal',
})
export default class TheBotModal extends Vue {
  @Prop({ type: Boolean, required: true }) private show!: boolean;

  header = 'Create new bot';

  payloadIsEdit = false;

  name = 'Bot1234';
  date = new Date();
  descr = '';
  icon: File | null = null;
  uid = '';

  errLabel = '';

  created() {
    const payload = botsModule.getters.modalPayload
    if (payload) {
      const bot = botsModule.getters.botById(payload)
      if (!bot) return
      this.name = bot.name
      this.header = `Edit ${bot.name}`
      this.descr = bot.descr ?? ''
      this.icon = bot.icon
      this.uid = bot.uid
      this.date = bot.date
      this.payloadIsEdit = true
    }
  }

  save() {
    if (!this.name || !this.date || !this.icon) {
      this.errLabel = 'All fields required, please feel them all'
      return
    }

    const bot: Bot = {
      name: this.name,
      icon: this.icon,
      descr: this.descr,
      date: this.date,
      uid: this.payloadIsEdit ? this.uid : uid(),
    }

    this.payloadIsEdit
      ? botsModule.dispatch('removeBot', bot.uid) &&
        botsModule.dispatch('addBot', bot)
      : botsModule.dispatch('addBot', bot)

    this.close()
  }

  @Emit('close')
  close() {
    return true
  }
}
</script>

