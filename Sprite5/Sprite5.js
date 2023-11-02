/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite5 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite5/costumes/costume1.png", {
        x: 160,
        y: 39
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite5/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "YOU SUCK" },
        this.whenIReceiveYouSuck
      )
    ];
  }

  *whenthisspriteclicked() {
    this.broadcast("start game");
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.visible = true;
  }

  *whenIReceiveYouSuck() {
    while (true) {
      this.visible = false;
      yield;
    }
  }
}
