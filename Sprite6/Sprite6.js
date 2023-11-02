/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite6 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite6/costumes/costume1.png", {
        x: 0,
        y: 0
      }),
      new Costume(
        "pixil-frame-0 (17)",
        "./Sprite6/costumes/pixil-frame-0 (17).png",
        { x: 24, y: 35 }
      )
    ];

    this.sounds = [new Sound("pop", "./Sprite6/sounds/pop.wav")];

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
    this.visible = true;
    this.goto(134, -37);
    for (let i = 0; i < 10; i++) {
      this.move(-12);
      yield;
    }
    this.broadcast("explode");
    this.visible = false;
    yield* this.wait(1);
    this.visible = true;
    this.goto(134, -37);
    for (let i = 0; i < 20; i++) {
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
    this.visible = true;
    this.goto(134, -37);
    for (let i = 0; i < 10; i++) {
      this.move(-12);
      yield;
    }
    this.broadcast("explode");
    this.visible = false;
    yield* this.wait(1);
    this.visible = true;
    this.goto(134, -37);
    for (let i = 0; i < 20; i++) {
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
