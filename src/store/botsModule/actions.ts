import { Bot } from '@/types'
import { Actions } from 'vuex-smart-module'

import BotsState from './state'
import BotsMutations from './mutations'
import BotsGetters from './getters'

export default class BotsActions extends Actions<BotsState, BotsGetters, BotsMutations> {
  addBot(bot: Bot) {
    this.commit('addBot', bot)
    return true
  }

  removeBot(id: string) {
    this.commit('removeBot', id)
    return true
  }

  /**
   * Set bot with that uid for modal payload
   * @param id (Bot uid)
   */
  editBot(id: string | null) {
    this.commit('editBot', id)
  }
}
