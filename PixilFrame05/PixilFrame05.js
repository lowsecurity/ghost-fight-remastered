/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class PixilFrame05 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "pixil-frame-0 (5)",
        "./PixilFrame05/costumes/pixil-frame-0 (5).png",
        { x: 23, y: 23 }
      ),
      new Costume("Broken Heart", "./PixilFrame05/costumes/Broken Heart.png", {
        x: 16,
        y: 60
      }),
      new Costume(
        "Broken Heart2",
        "./PixilFrame05/costumes/Broken Heart2.png",
        { x: 18, y: 71 }
      ),
      new Costume(
        "Broken Heart3",
        "./PixilFrame05/costumes/Broken Heart3.png",
        { x: 18, y: 40 }
      ),
      new Costume(
        "Broken Heart4",
        "./PixilFrame05/costumes/Broken Heart4.png",
        { x: 25, y: 40 }
      )
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
        { name: "Swing check" },
        this.whenIReceiveSwingCheck
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "2nd heart hit check" },
        this.whenIReceive2ndHeartHitCheck
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
    this.costume = "pixil-frame-0 (5)";
    this.visible = false;
  }

  *whenIReceiveFinalFight() {
    this.costume = "pixil-frame-0 (5)";
    yield* this.wait(5);
    this.visible = true;
    this.goto(164, -148);
  }

  *whenIReceiveHeartKilled() {
    this.costume = "pixil-frame-0 (5)";
    yield* this.wait(10);
    this.visible = true;
    this.goto(-190, -5);
  }

  *whenIReceiveSwingCheck() {
    if (this.touching(this.sprites["Sprite1"].andClones())) {
      this.costume = "Broken Heart";
      yield* this.wait(0.1);
      this.costume = "Broken Heart2";
      yield* this.wait(0.1);
      this.costume = "Broken Heart3";
      yield* this.wait(0.1);
      this.costume = "Broken Heart4";
      yield* this.wait(0.1);
      this.broadcast("Heart killed");
      this.broadcast("2nd heart hit check");
      this.visible = false;
    }
  }

  *whenIReceive2ndHeartHitCheck() {
    while (true) {
      if (this.touching(this.sprites["Sprite1"].andClones())) {
        this.costume = "Broken Heart";
        yield* this.wait(0.1);
        this.costume = "Broken Heart2";
        yield* this.wait(0.1);
        this.costume = "Broken Heart3";
        yield* this.wait(0.1);
        this.costume = "Broken Heart4";
        yield* this.wait(0.1);
        this.broadcast("2nd heart killed");
        this.visible = false;
      }
      yield;
    }
  }

  *whenIReceive2ndHeartKilled() {
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
