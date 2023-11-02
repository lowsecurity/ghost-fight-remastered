/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class PixilFrame03 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Chains", "./PixilFrame03/costumes/Chains.png", {
        x: 191,
        y: 360
      }),
      new Costume(
        "Chains breaking",
        "./PixilFrame03/costumes/Chains breaking.png",
        { x: 205, y: 360 }
      ),
      new Costume("Chains Break", "./PixilFrame03/costumes/Chains Break.png", {
        x: 205,
        y: 360
      }),
      new Costume(
        "Chains Falling 1",
        "./PixilFrame03/costumes/Chains Falling 1.png",
        { x: 379, y: 199 }
      ),
      new Costume(
        "Chains Falling 2",
        "./PixilFrame03/costumes/Chains Falling 2.png",
        { x: 406, y: -10 }
      ),
      new Costume(
        "Chains Falling 3",
        "./PixilFrame03/costumes/Chains Falling 3.png",
        { x: 414, y: -146 }
      ),
      new Costume("Chains gone", "./PixilFrame03/costumes/Chains gone.png", {
        x: 0,
        y: 0
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Final Stage" },
        this.whenIReceiveFinalStage
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "BREAK CHAINS" },
        this.whenIReceiveBreakChains
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "YOU SUCK" },
        this.whenIReceiveYouSuck
      )
    ];
  }

  *whenIReceiveFinalStage() {
    yield* this.wait(2);
    this.goto(-150, -13);
    this.moveBehind();
    this.costume = "Chains";
    this.visible = true;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveBreakChains() {
    this.costume = "Chains breaking";
    yield* this.wait(0.3);
    this.costume = "Chains";
    yield* this.wait(0.2);
    this.costume = "Chains breaking";
    yield* this.wait(0.1);
    this.costume = "Chains";
    yield* this.wait(0.1);
    this.costume = "Chains breaking";
    yield* this.wait(0.1);
    this.costume = "Chains";
    yield* this.wait(0.3);
    this.costume = "Chains breaking";
    yield* this.wait(0.2);
    this.costume = "Chains";
    yield* this.wait(0.1);
    this.costume = "Chains breaking";
    yield* this.wait(0.1);
    this.costume = "Chains";
    yield* this.wait(0.1);
    this.costume = "Chains Break";
    yield* this.wait(0.1);
    this.costume = "Chains Falling 1";
    yield* this.wait(0.1);
    this.costume = "Chains Falling 2";
    yield* this.wait(0.1);
    this.costume = "Chains Falling 3";
    yield* this.wait(0.1);
    this.costume = "Chains gone";
    yield* this.wait(0.1);
    this.broadcast("Chains broke");
  }

  *whenIReceiveYouSuck() {
    while (true) {
      this.visible = false;
      yield;
    }
  }
}
