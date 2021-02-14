import { Bot } from '@/types'

export default class BotsState {
  bots: Bot[] = [];

  modalUid: string | null = null;
}
