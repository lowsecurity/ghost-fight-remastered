/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Health extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Health", "./Health/costumes/Health.png", { x: 119, y: 19 })
    ];

    this.sounds = [new Sound("pop", "./Health/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "fall" }, this.whenIReceiveFall),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "death" }, this.whenIReceiveDeath),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "2nd heart killed" },
        this.whenIReceive2ndHeartKilled
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "YOU SUCK" },
        this.whenIReceiveYouSuck
      )
    ];
  }

  *whenIReceiveFall() {
    yield* this.wait(1);
    this.visible = true;
    this.moveBehind();
    this.goto(-155, 161);
    while (true) {
      this.x = -255 + this.toNumber(this.stage.vars.health);
      if (this.compare(1, this.stage.vars.health) > 0) {
        this.visible = false;
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveDeath() {
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      this.stage.watchers.health.visible = false;
      yield;
    }
  }

  *whenIReceive2ndHeartKilled() {
    this.visible = false;
  }

  *whenIReceiveYouSuck() {
    while (true) {
      this.visible = false;
      yield;
    }
  }
}
