/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class PixilFrame011 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("4", "./PixilFrame011/costumes/4.png", { x: 346, y: 219 }),
      new Costume("attack 4", "./PixilFrame011/costumes/attack 4.png", {
        x: 346,
        y: 219
      }),
      new Costume("2", "./PixilFrame011/costumes/2.png", { x: 456, y: 236 }),
      new Costume("attack (2)", "./PixilFrame011/costumes/attack (2).png", {
        x: 456,
        y: 236
      }),
      new Costume("1", "./PixilFrame011/costumes/1.png", { x: 443, y: 234 }),
      new Costume("attack (5)", "./PixilFrame011/costumes/attack (5).png", {
        x: 406,
        y: 211
      }),
      new Costume("5", "./PixilFrame011/costumes/5.png", { x: 406, y: 211 }),
      new Costume("6", "./PixilFrame011/costumes/6.png", { x: 406, y: 211 }),
      new Costume("attack 67", "./PixilFrame011/costumes/attack 67.png", {
        x: 406,
        y: 211
      }),
      new Costume("attack 1", "./PixilFrame011/costumes/attack 1.png", {
        x: 443,
        y: 234
      }),
      new Costume("3", "./PixilFrame011/costumes/3.png", { x: 418, y: 221 }),
      new Costume("attack 3", "./PixilFrame011/costumes/attack 3.png", {
        x: 418,
        y: 221
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
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

  *whenGreenFlagClicked() {
    this.goto(-14, -79);
    this.visible = false;
  }

  *whenIReceiveDesperation() {
    this.stage.vars.numberSet += 0;
    yield* this.wait(0.5);
    this.costume = 1;
    this.visible = true;
    yield* this.wait(0.8);
    this.costume = "attack 1";
    yield* this.wait(0.2);
    this.visible = false;
    this.costume = 2;
    this.visible = true;
    yield* this.wait(0.8);
    this.costume = "attack (2)";
    yield* this.wait(0.2);
    this.visible = false;
    this.costume = 3;
    this.visible = true;
    yield* this.wait(0.8);
    this.costume = "attack 3";
    yield* this.wait(0.2);
    this.visible = false;
    this.costume = 4;
    this.visible = true;
    yield* this.wait(0.8);
    this.costume = "attack 4";
    yield* this.wait(0.2);
    this.visible = false;
    this.costume = 5;
    this.visible = true;
    yield* this.wait(1.8);
    this.costume = "attack (5)";
    yield* this.wait(0.2);
    this.visible = false;
    this.costume = 6;
    this.visible = true;
    yield* this.wait(2);
    this.costume = "attack 67";
    yield* this.wait(0.2);
    this.visible = false;
    yield* this.wait(4);
    this.stage.vars.numberSet = 6;
    this.broadcast("THE TRUE ENDING");
  }

  *whenIReceiveYouSuck() {
    while (true) {
      this.visible = false;
      yield;
    }
  }
}
