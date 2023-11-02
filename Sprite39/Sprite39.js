/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite39 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("spike", "./Sprite39/costumes/spike.png", { x: 100, y: 100 })
    ];

    this.sounds = [new Sound("pop", "./Sprite39/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Heart killed" },
        this.whenIReceiveHeartKilled
      ),
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

  *whenGreenFlagClicked() {
    this.visible = false;
    this.stage.vars.numberSet = 0;
  }

  *whenIReceiveHeartKilled() {
    this.stage.vars.numberSet = 0;
    yield* this.wait(1);
    this.visible = true;
    this.goto(-5, -15);
    yield* this.wait(2);
    while (!(this.toNumber(this.stage.vars.numberSet) === 1)) {
      if (this.touching(Color.rgb(0, 0, 0))) {
        this.direction = this.radToScratch(
          Math.atan2(
            this.sprites["Sprite1"].y - this.y,
            this.sprites["Sprite1"].x - this.x
          )
        );
        this.move(4);
      } else {
        this.move(4);
      }
      yield;
    }
    this.visible = false;
  }

  *whenIReceive2ndHeartKilled() {
    this.stage.vars.numberSet = 1;
  }

  *whenIReceiveYouSuck() {
    while (true) {
      this.visible = false;
      yield;
    }
  }
}
