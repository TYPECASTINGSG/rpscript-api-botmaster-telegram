/**
 * @module botmaster-telegram
 */

const TelegramBot = require('telegram-bot');
import {RpsContext,RpsModule,rpsAction} from 'rpscript-interface';

let MOD_ID = "botmaster-telegram"

export interface ModuleContext {
  botmaster?:any;
  token?: string;
}

@RpsModule(MOD_ID)
export default class RPSModule {

  constructor(ctx:RpsContext){
    let mapContext = ctx.getModuleContext(MOD_ID);
    
    if(!mapContext)
      ctx.event.emit(RpsContext.LOAD_MOD_ERR_EVT,MOD_ID,new Error("No config found for botmaster-telegram module"));
    else {
      mapContext['botmaster'] = new TelegramBot({credentials:{authToken:mapContext.token}});
      
      ctx.addModuleContext(MOD_ID,mapContext);
    }
  }

}
