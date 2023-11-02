/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite14 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite14/costumes/costume1.png", {
        x: 0,
        y: 0
      }),
      new Costume(
        "pixil-frame-0 (17)",
        "./Sprite14/costumes/pixil-frame-0 (17).png",
        { x: 24, y: 35 }
      )
    ];

    this.sounds = [new Sound("pop", "./Sprite14/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "pellet bomb" },
        this.whenIReceivePelletBomb
      ),
      new Trigger(Trigger.BROADCAST, { name: "death" }, this.whenIReceiveDeath),
      new Trigger(
        Trigger.BROADCAST,
        { name: "YOU SUCK" },
        this.whenIReceiveYouSuck
      )
    ];
  }

  *whenIReceivePelletBomb() {
    yield* this.wait(2);
    this.visible = true;
    this.goto(134, -37);
    for (let i = 0; i < 15; i++) {
      this.move(-12);
      yield;
    }
    this.broadcast("explode2");
    this.visible = false;
    yield* this.wait(1);
    this.visible = true;
    this.goto(134, -37);
    for (let i = 0; i < 25; i++) {
      this.move(-12);
      yield;
    }
    this.broadcast("explode");
    this.visible = false;
    yield* this.wait(1);
    this.visible = true;
    this.goto(134, -37);
    for (let i = 0; i < 5; i++) {
      this.move(-12);
      yield;
    }
    this.broadcast("explode");
    this.visible = false;
    yield* this.wait(2);
    this.visible = true;
    this.goto(134, -37);
    for (let i = 0; i < 15; i++) {
      this.move(-12);
      yield;
    }
    this.broadcast("explode2");
    this.visible = false;
    yield* this.wait(1);
    this.visible = true;
    this.goto(134, -37);
    for (let i = 0; i < 25; i++) {
      this.move(-12);
      yield;
    }
    this.broadcast("explode");
    this.visible = false;
    yield* this.wait(1);
    this.visible = true;
    this.goto(134, -37);
    for (let i = 0; i < 5; i++) {
      this.move(-12);
      yield;
    }
    this.broadcast("explode");
    this.visible = false;
    yield* this.wait(5);
    this.broadcast("blood rain");
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
