import { Getters } from 'vuex-smart-module'
import BotsState from './state'

export default class BotsGetters extends Getters<BotsState> {
  get bots() {
    return this.state.bots
  }

  botById(id: string) {
    return this.state.bots.find(b => (b.uid = id)) ?? null
  }

  get modalPayload() {
    return this.state.modalUid
  }
}
