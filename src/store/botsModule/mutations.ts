import { Bot } from '@/types'
import { Mutations } from 'vuex-smart-module'
import BotsState from './state'

export default class BotsMutations extends Mutations<BotsState> {
  addBot(bot: Bot) {
    this.state.bots.push(bot)
  }

  removeBot(id: string) {
    const index = this.state.bots.findIndex(e => (e.uid = id))
    this.state.bots.splice(index, 1)
  }

  editBot(id: string | null) {
    this.state.modalUid = id
  }
}
