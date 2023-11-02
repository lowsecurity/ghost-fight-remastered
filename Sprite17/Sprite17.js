/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite17 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite17/costumes/costume1.png", {
        x: 0,
        y: 0
      }),
      new Costume(
        "pixil-frame-0 (17)",
        "./Sprite17/costumes/pixil-frame-0 (17).png",
        { x: 24, y: 34 }
      )
    ];

    this.sounds = [new Sound("pop", "./Sprite17/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "explode2" },
        this.whenIReceiveExplode2
      ),
      new Trigger(Trigger.BROADCAST, { name: "death" }, this.whenIReceiveDeath),
      new Trigger(
        Trigger.BROADCAST,
        { name: "YOU SUCK" },
        this.whenIReceiveYouSuck
      )
    ];
  }

  *whenIReceiveExplode2() {
    this.visible = true;
    this.goto(this.sprites["Sprite14"].x, this.sprites["Sprite14"].y);
    while (!this.touching("edge")) {
      this.move(8);
      yield;
    }
    this.visible = false;
  }

  *whenIReceiveDeath() {
    this.visible = false;
  }

  *whenIReceiveYouSuck() {
    while (true) {
      this.visible = false;
      yield;
    }
  }
}
