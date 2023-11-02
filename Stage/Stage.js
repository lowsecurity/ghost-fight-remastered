/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.png", {
        x: 480,
        y: 360
      }),
      new Costume("backdrop2", "./Stage/costumes/backdrop2.png", {
        x: 480,
        y: 360
      }),
      new Costume("backdrop3", "./Stage/costumes/backdrop3.png", {
        x: 480,
        y: 360
      }),
      new Costume("backdrop4", "./Stage/costumes/backdrop4.png", {
        x: 480,
        y: 360
      }),
      new Costume("backdrop7", "./Stage/costumes/backdrop7.png", {
        x: 480,
        y: 360
      }),
      new Costume("backdrop5", "./Stage/costumes/backdrop5.png", {
        x: 480,
        y: 360
      }),
      new Costume("backdrop6", "./Stage/costumes/backdrop6.png", {
        x: 480,
        y: 360
      }),
      new Costume("backdrop8", "./Stage/costumes/backdrop8.png", {
        x: 480,
        y: 360
      }),
      new Costume("backdrop9", "./Stage/costumes/backdrop9.png", {
        x: 480,
        y: 360
      }),
      new Costume("backdrop10", "./Stage/costumes/backdrop10.png", {
        x: 480,
        y: 360
      }),
      new Costume("shot", "./Stage/costumes/shot.png", { x: 480, y: 360 }),
      new Costume("Lights out", "./Stage/costumes/Lights out.png", {
        x: 480,
        y: 360
      }),
      new Costume("The end", "./Stage/costumes/The end.png", { x: 480, y: 360 })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "lights on" },
        this.whenIReceiveLightsOn
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "death" }, this.whenIReceiveDeath),
      new Trigger(
        Trigger.BROADCAST,
        { name: "The end" },
        this.whenIReceiveTheEnd
      )
    ];

    this.vars.ooop = 0;
    this.vars.health = 100;
    this.vars.numberSet = 0;

    this.watchers.health = new Watcher({
      label: "health",
      style: "large",
      visible: false,
      value: () => this.vars.health,
      x: 393,
      y: 172
    });
  }

  *whenIReceiveLightsOn() {
    this.costume = "backdrop2";
    yield* this.wait(1);
    this.costume = "backdrop3";
    yield* this.wait(1);
    this.costume = "backdrop4";
    yield* this.wait(1);
    this.costume = "backdrop7";
    yield* this.wait(1);
    this.costume = "backdrop5";
    yield* this.wait(2);
    this.costume = "backdrop6";
    yield* this.wait(2);
    this.costume = "backdrop8";
    this.broadcast("fall");
    yield* this.wait(1);
    this.costume = "backdrop9";
  }

  *whenGreenFlagClicked() {
    this.costume = "backdrop1";
  }

  *whenIReceiveDeath() {
    yield* this.wait(4);
    this.costume = "backdrop10";
  }

  *whenIReceiveTheEnd() {
    this.costume = "The end";
  }
}
