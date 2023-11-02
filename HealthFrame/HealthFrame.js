/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class HealthFrame extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "pixil-frame-0 (10)",
        "./HealthFrame/costumes/pixil-frame-0 (10).png",
        { x: 196, y: 89 }
      )
    ];

    this.sounds = [
      new Sound("Video Game 2", "./HealthFrame/sounds/Video Game 2.wav"),
      new Sound("Low Whoosh", "./HealthFrame/sounds/Low Whoosh.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "fall" }, this.whenIReceiveFall),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
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
    this.costume = "pixil-frame-0 (10)";
    this.stage.vars.health = 100;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
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
