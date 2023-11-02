/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class HideBox extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./HideBox/costumes/costume1.svg", {
        x: 47,
        y: 30.5
      })
    ];

    this.sounds = [new Sound("pop", "./HideBox/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "fall" }, this.whenIReceiveFall),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "death" }, this.whenIReceiveDeath),
      new Trigger(
        Trigger.BROADCAST,
        { name: "oh shoot" },
        this.whenIReceiveOhShoot
      )
    ];
  }

  *whenIReceiveFall() {
    yield* this.wait(1);
    this.visible = true;
    this.moveBehind();
    this.moveAhead(1);
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveDeath() {
    this.visible = false;
  }

  *whenIReceiveOhShoot() {
    this.visible = false;
  }
}
