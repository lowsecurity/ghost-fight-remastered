/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite24 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite24/costumes/costume1.svg", {
        x: 104.57997131347656,
        y: 14.25
      }),
      new Costume("text 2", "./Sprite24/costumes/text 2.png", { x: 211, y: 20 })
    ];

    this.sounds = [new Sound("pop", "./Sprite24/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Chains broke" },
        this.whenIReceiveChainsBroke
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "FINAL FIGHT" },
        this.whenIReceiveFinalFight
      )
    ];
  }

  *whenIReceiveChainsBroke() {
    this.costume = "costume1";
    this.goto(-115, -160);
    this.moveAhead();
    yield* this.wait(2);
    this.visible = true;
    yield* this.wait(0.7);
    this.visible = false;
    yield* this.wait(0.7);
    this.visible = true;
    yield* this.wait(0.7);
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveFinalFight() {
    this.costume = "text 2";
    this.goto(132, 106);
    this.moveAhead();
    yield* this.wait(8);
    this.visible = true;
    yield* this.wait(0.7);
    this.visible = false;
    yield* this.wait(0.7);
    this.visible = true;
    yield* this.wait(0.7);
    this.visible = false;
    yield* this.wait(0.7);
    this.visible = false;
    yield* this.wait(0.7);
    this.visible = true;
    yield* this.wait(0.7);
    this.visible = false;
  }
}
