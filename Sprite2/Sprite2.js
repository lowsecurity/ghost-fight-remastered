/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Og", "./Sprite2/costumes/Og.png", { x: 282, y: 192 }),
      new Costume("Final arena", "./Sprite2/costumes/Final arena.png", {
        x: 439,
        y: 79
      }),
      new Costume("ENDING", "./Sprite2/costumes/ENDING.png", {
        x: 439,
        y: -325
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "fall" }, this.whenIReceiveFall),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "death" }, this.whenIReceiveDeath),
      new Trigger(
        Trigger.BROADCAST,
        { name: "FINAL FIGHT" },
        this.whenIReceiveFinalFight
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "2nd heart killed" },
        this.whenIReceive2ndHeartKilled
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "desperation " },
        this.whenIReceiveDesperation
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "YOU SUCK" },
        this.whenIReceiveYouSuck
      )
    ];
  }

  *whenIReceiveFall() {
    this.costume = "Og";
    this.goto(-98, 2);
    yield* this.wait(1);
    this.visible = true;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveDeath() {
    this.visible = false;
  }

  *whenIReceiveFinalFight() {
    this.visible = true;
    this.costume = "Final arena";
    this.goto(-5, -4);
  }

  *whenIReceive2ndHeartKilled() {
    yield* this.wait(3);
    this.costume = "ENDING";
    this.goto(-5, -4);
  }

  *whenIReceiveDesperation() {
    this.visible = true;
    this.costume = "Final arena";
    this.goto(-5, -4);
    this.stage.vars.numberSet = 0;
  }

  *whenIReceiveYouSuck() {
    while (true) {
      this.visible = false;
      yield;
    }
  }
}
