<template>
  <div
    class="d-flex flex-row flex-wrap justify-content-around card p-3 align-items-center rounded bg-light shadow-sm"
  >
    <div class="d-flex flex-shrink-0">
      <b-img
        :src="icon"
        alt="Icon"
        fluid
        rounded
        style="width: 75px; height: 75px"
      />
    </div>
    <div class="d-flex flex-column col-sm-12 col-md-4 mx-2 text-truncate">
      <div class="d-flex font-weight-bold">
        {{ bot.name }}
      </div>
      <div>
        {{ bot.descr }}
      </div>
    </div>
    <div class="d-flex mr-1">
      {{ date }}
    </div>
    <b-button
      class="d-flex mr-1"
      size="md"
      variant="outline-info"
      @click="edit"
    >
      Edit
    </b-button>
    <b-button
      class="d-flex"
      size="md"
      variant="outline-danger"
      @click="remove"
    >
      Delete
    </b-button>
  </div>
</template>


<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'
import { botsModule } from '@/store'
import { Bot } from '@/types'

@Component({
  name: 'TheBotRowComponent',
})
export default class TheBotRowComponent extends Vue {
  @Prop({ type: Object, required: true }) private bot!: Bot;
  @Prop({ type: Number, required: true }) private index!: number;

  icon = '';

  created() {
    this.icon = URL.createObjectURL(this.bot.icon)
  }

  @Emit()
  edit() {
    return this.bot.uid
  }

  remove() {
    botsModule.dispatch('removeBot', this.bot.uid)
  }

  get date() {
    return this.bot.date.toLocaleDateString()
  }
}
</script>

