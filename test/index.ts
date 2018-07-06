import {expect} from 'chai';
import m from 'mocha';

import RPSModule from '../src/index';
import { RpsContext } from 'rpscript-interface';

m.describe('botmaster-telegram', () => {

  m.it('should init telegram botmaster', async function () {
    let ctx = new RpsContext
    ctx.addModuleContext('botmaster-telegram',{token:'TOKEN',webhookEndpoint:'/endoint'});
    let md = new RPSModule(ctx);

    // let output = await md.botmaster-telegram(new RpsContext,{},"Hello *World*!");


    // expect(output).to.be.equals('<p>Hello <em>World</em>!</p>');

  }).timeout(0);

})
