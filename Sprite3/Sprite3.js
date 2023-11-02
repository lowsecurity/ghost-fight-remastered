/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("pixil-frame-0", "./Sprite3/costumes/pixil-frame-0.png", {
        x: 69,
        y: 17
      }),
      new Costume(
        "pixil-frame-0 (1)",
        "./Sprite3/costumes/pixil-frame-0 (1).png",
        { x: 45, y: 74 }
      ),
      new Costume(
        "pixil-frame-0 (1)2",
        "./Sprite3/costumes/pixil-frame-0 (1)2.png",
        { x: 384, y: 357 }
      ),
      new Costume(
        "pixil-frame-0 (15)",
        "./Sprite3/costumes/pixil-frame-0 (15).png",
        { x: 415, y: 110 }
      ),
      new Costume(
        "pixil-frame-0 (15)2",
        "./Sprite3/costumes/pixil-frame-0 (15)2.png",
        { x: 307, y: 131 }
      ),
      new Costume(
        "pixil-frame-0 (16)",
        "./Sprite3/costumes/pixil-frame-0 (16).png",
        { x: 459, y: 257 }
      )
    ];

    this.sounds = [new Sound("pop", "./Sprite3/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "start game" },
        this.whenIReceiveStartGame
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Scythe" },
        this.whenIReceiveScythe
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Scythe" },
        this.whenIReceiveScythe2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "bone walls" },
        this.whenIReceiveBoneWalls
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "bone wall 2" },
        this.whenIReceiveBoneWall2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start games" },
        this.whenIReceiveStartGames
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "scythe wheel" },
        this.whenIReceiveScytheWheel
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.BROADCAST, { name: "death" }, this.whenIReceiveDeath),
      new Trigger(
        Trigger.BROADCAST,
        { name: "YOU SUCK" },
        this.whenIReceiveYouSuck
      )
    ];
  }

  *whenIReceiveStartGame() {
    this.visible = false;
    this.costume = "pixil-frame-0";
    yield* this.wait(16.5);
    for (let i = 0; i < 10; i++) {
      this.visible = true;
      this.goto(this.random(113, -138), this.random(32, -143));
      this.direction = this.radToScratch(
        Math.atan2(
          this.sprites["Sprite1"].y - this.y,
          this.sprites["Sprite1"].x - this.x
        )
      );
      while (!this.touching("edge")) {
        this.move(10);
        yield;
      }
      this.visible = false;
      yield;
    }
    yield* this.wait(1);
    this.stage.vars.ooop = 0;
    this.costume = "pixil-frame-0 (1)";
    this.broadcast("Scythe");
    yield* this.wait(2);
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveScythe() {
    yield* this.wait(2);
    for (let i = 0; i < 10; i++) {
      this.visible = true;
      this.goto(this.random(113, -138), this.random(32, -143));
      this.direction = this.radToScratch(
        Math.atan2(
          this.sprites["Sprite1"].y - this.y,
          this.sprites["Sprite1"].x - this.x
        )
      );
      yield* this.glide(
        0.7,
        this.sprites["Sprite1"].x,
        this.sprites["Sprite1"].y
      );
      this.visible = false;
      yield;
    }
    this.broadcast("bone walls");
    this.stage.vars.ooop++;
  }

  *whenIReceiveScythe2() {
    yield* this.wait(2);
    while (!(this.toNumber(this.stage.vars.ooop) === 1)) {
      this.direction += 20;
      yield;
    }
    this.direction = 90;
  }

  *whenIReceiveBoneWalls() {
    yield* this.wait(2);
    this.visible = true;
    this.costume = "pixil-frame-0 (15)";
    for (let i = 0; i < 2; i++) {
      this.goto(431, 27);
      for (let i = 0; i < 150; i++) {
        this.move(-7);
        yield;
      }
      this.costume = "pixil-frame-0 (15)2";
      yield;
    }
    this.visible = false;
    this.broadcast("bone wall 2");
  }

  *whenIReceiveBoneWall2() {
    this.costume = "pixil-frame-0 (16)";
    this.goto(416, -3);
    this.visible = true;
    for (let i = 0; i < 100; i++) {
      this.move(-10);
      yield;
    }
    this.costume = "pixil-frame-0 (16)";
    this.goto(416, -3);
    this.visible = true;
    for (let i = 0; i < 100; i++) {
      this.move(-10);
      yield;
    }
    this.visible = false;
    this.broadcast("sign pellet");
    yield* this.wait(1.5);
    this.broadcast("pellet bomb");
  }

  *whenIReceiveStartGames() {
    while (true) {
      yield* this.playSoundUntilDone("Video Game 2");
      yield;
    }
  }

  *whenIReceiveScytheWheel() {
    yield* this.wait(2);
    this.costume = "pixil-frame-0 (1)2";
    this.visible = true;
    this.goto(-55, -20);
    for (let i = 0; i < 200; i++) {
      this.direction += 2;
      yield;
    }
    for (let i = 0; i < 150; i++) {
      this.direction -= 2;
      yield;
    }
    this.visible = false;
    this.broadcast("Final Stage");
  }

  *whenGreenFlagClicked2() {
    this.visible = false;
  }

  *whenIReceiveDeath() {
    while (true) {
      this.visible = false;
      yield;
    }
  }

  *whenIReceiveYouSuck() {
    while (true) {
      this.visible = false;
      yield;
    }
  }
}
