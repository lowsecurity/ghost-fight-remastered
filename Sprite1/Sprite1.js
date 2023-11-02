/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Move right", "./Sprite1/costumes/Move right.png", {
        x: 20,
        y: 24
      }),
      new Costume("Move left", "./Sprite1/costumes/Move left.png", {
        x: 19,
        y: 24
      }),
      new Costume(
        "Ghost fight sprite",
        "./Sprite1/costumes/Ghost fight sprite.png",
        { x: 17, y: 24 }
      ),
      new Costume(
        "Ghost fight sprite2",
        "./Sprite1/costumes/Ghost fight sprite2.png",
        { x: 17, y: 24 }
      ),
      new Costume("gun 5", "./Sprite1/costumes/gun 5.png", { x: 17, y: 85 }),
      new Costume("BANG", "./Sprite1/costumes/BANG.png", { x: 17, y: 105 }),
      new Costume("gun 4", "./Sprite1/costumes/gun 4.png", { x: 17, y: 34 }),
      new Costume("gun 2", "./Sprite1/costumes/gun 2.png", { x: 17, y: 34 }),
      new Costume("gun 3", "./Sprite1/costumes/gun 3.png", { x: 17, y: 24 }),
      new Costume("gun ghost 2", "./Sprite1/costumes/gun ghost 2.png", {
        x: 17,
        y: 24
      }),
      new Costume("Gun ghost", "./Sprite1/costumes/Gun ghost.png", {
        x: 17,
        y: 24
      }),
      new Costume("Captured", "./Sprite1/costumes/Captured.png", {
        x: 19,
        y: 26
      }),
      new Costume(
        "pixil-frame-0 (10)",
        "./Sprite1/costumes/pixil-frame-0 (10).png",
        { x: 21, y: 35 }
      ),
      new Costume(
        "pixil-frame-0 (9)",
        "./Sprite1/costumes/pixil-frame-0 (9).png",
        { x: 22, y: 42 }
      ),
      new Costume(
        "pixil-frame-0 (8)",
        "./Sprite1/costumes/pixil-frame-0 (8).png",
        { x: 19, y: 28 }
      ),
      new Costume("Break free", "./Sprite1/costumes/Break free.png", {
        x: 20,
        y: 26
      }),
      new Costume("attack 1", "./Sprite1/costumes/attack 1.png", {
        x: 23,
        y: 42
      }),
      new Costume("attack 2", "./Sprite1/costumes/attack 2.png", {
        x: 23,
        y: 35
      }),
      new Costume("Attack up 1", "./Sprite1/costumes/Attack up 1.png", {
        x: 65,
        y: 46
      }),
      new Costume("Attack up 2", "./Sprite1/costumes/Attack up 2.png", {
        x: 43,
        y: 58
      }),
      new Costume("Attack left 1", "./Sprite1/costumes/Attack left 1.png", {
        x: 39,
        y: 76
      }),
      new Costume("Attack left 2", "./Sprite1/costumes/Attack left 2.png", {
        x: 56,
        y: 58
      }),
      new Costume("Attack down 1", "./Sprite1/costumes/Attack down 1.png", {
        x: 67,
        y: 25
      }),
      new Costume("attack down 2", "./Sprite1/costumes/attack down 2.png", {
        x: 36,
        y: 26
      }),
      new Costume("R (1)", "./Sprite1/costumes/R (1).png", { x: 50, y: 31 }),
      new Costume("R (2) (1)", "./Sprite1/costumes/R (2) (1).png", {
        x: 50,
        y: 50
      })
    ];

    this.sounds = [
      new Sound("pop", "./Sprite1/sounds/pop.wav"),
      new Sound("bam", "./Sprite1/sounds/bam.wav"),
      new Sound(
        "Pushing-Magazine-Into-Gun-www",
        "./Sprite1/sounds/Pushing-Magazine-Into-Gun-www.wav"
      )
    ];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "fall" }, this.whenIReceiveFall),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start game" },
        this.whenIReceiveStartGame
      ),
      new Trigger(Trigger.BROADCAST, { name: "fall" }, this.whenIReceiveFall2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "CHAINED" },
        this.whenIReceiveChained
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Final Stage" },
        this.whenIReceiveFinalStage
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "2nd heart killed" },
        this.whenIReceive2ndHeartKilled
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "THE TRUE ENDING" },
        this.whenIReceiveTheTrueEnding
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "oh shoot" },
        this.whenIReceiveOhShoot
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "YOU SUCK" },
        this.whenIReceiveYouSuck
      )
    ];
  }

  *whenIReceiveFall() {
    this.costume = "Ghost fight sprite";
    this.goto(-64, -19);
    while (true) {
      if (this.toNumber(this.stage.vars.numberSet) === 6) {
        yield* this.glide(2, -11, -148);
      } else {
        if (this.toNumber(this.stage.vars.numberSet) === 4) {
          this.goto(-151, -10);
        } else {
          if (this.keyPressed("d")) {
            this.x += 5;
            this.costume = "Move right";
            if (this.touching(Color.rgb(0, 0, 0))) {
              this.x -= 5;
            }
          }
          if (this.keyPressed("a")) {
            this.x -= 5;
            this.costume = "Move left";
            if (this.touching(Color.rgb(0, 0, 0))) {
              this.x += 5;
            }
          }
          if (this.keyPressed("w")) {
            this.y += 5;
            this.costume = "Ghost fight sprite";
            if (this.touching(Color.rgb(0, 0, 0))) {
              this.y -= 5;
            }
          }
          if (this.keyPressed("s")) {
            this.y -= 5;
            this.costume = "Ghost fight sprite";
            if (this.touching(Color.rgb(0, 0, 0))) {
              this.y += 5;
            }
          }
        }
        if (this.toNumber(this.stage.vars.numberSet) === 3) {
          if (this.keyPressed("space")) {
            if (this.keyPressed("d")) {
              this.costume = "attack 1";
              yield* this.wait(0.1);
              this.broadcast("Swing check");
              this.costume = "attack 2";
              yield* this.wait(0.1);
              this.costume = "Ghost fight sprite";
            }
            if (this.keyPressed("a")) {
              this.costume = "Attack left 1";
              yield* this.wait(0.1);
              this.broadcast("Swing check");
              this.costume = "Attack left 2";
              yield* this.wait(0.1);
              this.costume = "Ghost fight sprite";
            }
            if (this.keyPressed("w")) {
              this.costume = "Attack up 1";
              yield* this.wait(0.1);
              this.broadcast("Swing check");
              this.costume = "Attack up 2";
              yield* this.wait(0.1);
              this.costume = "Ghost fight sprite";
            }
            if (this.keyPressed("s")) {
              this.costume = "Attack down 1";
              yield* this.wait(0.1);
              this.broadcast("Swing check");
              this.costume = "attack down 2";
              yield* this.wait(0.1);
              this.costume = "Ghost fight sprite";
            }
          }
        }
      }
      yield;
    }
  }

  *whenIReceiveStartGame() {
    this.broadcast("new game");
    this.visible = true;
    this.goto(191, -123);
    for (let i = 0; i < 35; i++) {
      this.x -= 6;
      yield;
    }
    this.visible = false;
    for (let i = 0; i < 5; i++) {
      this.x -= 6;
      yield;
    }
    yield* this.wait(1);
    this.broadcast("lights on");
    yield* this.wait(7);
    for (let i = 0; i < 5; i++) {
      this.move(6);
      yield;
    }
    this.visible = true;
    for (let i = 0; i < 7; i++) {
      this.move(6);
      yield;
    }
  }

  *whenIReceiveFall2() {
    this.visible = false;
    yield* this.wait(1);
    this.visible = true;
  }

  *whenGreenFlagClicked() {
    this.costume = "Move left";
    this.stage.vars.health = 100;
    while (true) {
      if (
        this.touching(Color.rgb(183, 28, 28)) ||
        this.touching(Color.rgb(158, 158, 158)) ||
        this.touching(Color.rgb(121, 85, 72)) ||
          this.touching(Color.rgb(255, 255, 255)) ||
            this.touching(Color.rgb(13, 23, 31))
      ) {
        this.stage.vars.health -= 2;
      }
      if (this.compare(this.stage.vars.health, 0) < 0) {
        this.broadcast("YOU SUCK");
        yield* this.wait(4);
        /* TODO: Implement stop all */ null;
      }
      yield;
    }
  }

  *whenIReceiveChained() {
    yield* this.wait(9);
    for (let i = 0; i < 3; i++) {
      this.costume = "pixil-frame-0 (10)";
      yield* this.wait(0.2);
      this.costume = "pixil-frame-0 (9)";
      yield* this.wait(0.2);
      this.costume = "pixil-frame-0 (8)";
      yield* this.wait(0.2);
      yield;
    }
    this.stage.vars.numberSet = 3;
    this.broadcast("BREAK CHAINS");
    this.costume = "Break free";
  }

  *whenIReceiveFinalStage() {
    this.costume = "Captured";
    this.stage.vars.health = 1;
    this.stage.vars.numberSet = 4;
  }

  *whenIReceive2ndHeartKilled() {
    yield* this.wait(1);
    this.stage.vars.numberSet = 6;
  }

  *whenIReceiveTheTrueEnding() {
    yield* this.wait(4);
    this.costume = "Gun ghost";
    yield* this.wait(0.2);
    this.costume = "gun ghost 2";
    yield* this.wait(0.2);
    this.costume = "gun 3";
    yield* this.wait(0.3);
    this.costume = "gun 2";
  }

  *whenIReceiveOhShoot() {
    this.visible = true;
    yield* this.wait(0.4);
    this.costume = "gun 4";
    yield* this.playSoundUntilDone("Pushing-Magazine-Into-Gun-www");
    yield* this.wait(3);
    this.costume = "gun 5";
    yield* this.wait(2);
    this.visible = false;
    this.stage.costume = "Lights out";
    yield* this.wait(2);
    this.visible = true;
    this.stage.costume = "shot";
    this.costume = "BANG";
    yield* this.playSoundUntilDone("bam");
    yield* this.wait(0.1);
    this.stage.costume = "Lights out";
    this.visible = false;
    this.broadcast("The end");
  }

  *whenIReceiveYouSuck() {
    while (true) {
      this.visible = false;
      yield;
    }
  }
}
