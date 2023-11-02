/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class PixilFrame07 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "pixil-frame-0 (7)",
        "./PixilFrame07/costumes/pixil-frame-0 (7).png",
        { x: 115, y: 29 }
      ),
      new Costume("Damaged 2", "./PixilFrame07/costumes/Damaged 2.png", {
        x: 115,
        y: 29
      }),
      new Costume("DEAD", "./PixilFrame07/costumes/DEAD.png", { x: 115, y: 29 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "FINAL FIGHT" },
        this.whenIReceiveFinalFight
      ),
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
  }

  *whenIReceiveFinalFight() {
    this.costume = "pixil-frame-0 (7)";
    this.goto(137, 157);
    this.visible = true;
  }

  *whenIReceiveHeartKilled() {
    this.costume = "Damaged 2";
  }

  *whenIReceive2ndHeartKilled() {
    this.costume = "DEAD";
    yield* this.wait(3);
    this.visible = false;
  }

  *whenIReceiveYouSuck() {
    while (true) {
      this.visible = false;
      yield;
    }
  }
}
