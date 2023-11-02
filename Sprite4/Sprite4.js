/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite4 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Wait", "./Sprite4/costumes/Wait.png", { x: 109, y: 136 }),
      new Costume("Wait2", "./Sprite4/costumes/Wait2.png", { x: 408, y: 136 }),
      new Costume(
        "What are you holdiong",
        "./Sprite4/costumes/What are you holdiong.png",
        { x: 373, y: 136 }
      ),
      new Costume(
        "Ending text true 2",
        "./Sprite4/costumes/Ending text true 2.png",
        { x: 364, y: 136 }
      ),
      new Costume(
        "Ending text true",
        "./Sprite4/costumes/Ending text true.png",
        { x: 434, y: 136 }
      ),
      new Costume("JK lol trolled", "./Sprite4/costumes/JK lol trolled.png", {
        x: 109,
        y: 188
      }),
      new Costume("Death 1", "./Sprite4/costumes/Death 1.png", {
        x: 90,
        y: 136
      }),
      new Costume("Death 2", "./Sprite4/costumes/Death 2.png", {
        x: 78,
        y: 136
      }),
      new Costume("Death 3", "./Sprite4/costumes/Death 3.png", {
        x: 78,
        y: 136
      }),
      new Costume("Death 4", "./Sprite4/costumes/Death 4.png", {
        x: 72,
        y: 136
      }),
      new Costume("Death 5", "./Sprite4/costumes/Death 5.png", {
        x: 53,
        y: 136
      }),
      new Costume("Death 6", "./Sprite4/costumes/Death 6.png", {
        x: 53,
        y: 136
      }),
      new Costume("Death 7", "./Sprite4/costumes/Death 7.png", { x: 0, y: 0 }),
      new Costume("Ending text 1", "./Sprite4/costumes/Ending text 1.png", {
        x: 236,
        y: 187
      }),
      new Costume("Hurt 1", "./Sprite4/costumes/Hurt 1.png", {
        x: 120,
        y: 166
      }),
      new Costume("Hurt 2", "./Sprite4/costumes/Hurt 2.png", {
        x: 111,
        y: 136
      }),
      new Costume("Hurt 3", "./Sprite4/costumes/Hurt 3.png", {
        x: 109,
        y: 140
      }),
      new Costume("Text 4", "./Sprite4/costumes/Text 4.png", {
        x: 240,
        y: 184
      }),
      new Costume("text 3", "./Sprite4/costumes/text 3.png", {
        x: 159,
        y: 179
      }),
      new Costume(
        "pixil-frame-0 (1)2",
        "./Sprite4/costumes/pixil-frame-0 (1)2.png",
        { x: 126, y: 157 }
      ),
      new Costume("Text one", "./Sprite4/costumes/Text one.png", {
        x: 289,
        y: 189
      }),
      new Costume("Text one2", "./Sprite4/costumes/Text one2.png", {
        x: 274,
        y: 190
      }),
      new Costume(
        "pixil-frame-0 (2)",
        "./Sprite4/costumes/pixil-frame-0 (2).png",
        { x: 105, y: 255 }
      ),
      new Costume(
        "pixil-frame-0 (3)",
        "./Sprite4/costumes/pixil-frame-0 (3).png",
        { x: 105, y: 206 }
      ),
      new Costume(
        "pixil-frame-0 (4)",
        "./Sprite4/costumes/pixil-frame-0 (4).png",
        { x: 221, y: 145 }
      ),
      new Costume("troollllll", "./Sprite4/costumes/troollllll.png", {
        x: 0,
        y: 0
      })
    ];

    this.sounds = [
      new Sound("pop", "./Sprite4/sounds/pop.wav"),
      new Sound("Low Whoosh", "./Sprite4/sounds/Low Whoosh.wav")
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "new game" },
        this.whenIReceiveNewGame
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Scythe" },
        this.whenIReceiveScythe
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
        { name: "new game" },
        this.whenIReceiveNewGame2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Scythe" },
        this.whenIReceiveScythe2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "bone walls" },
        this.whenIReceiveBoneWalls2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "bone wall 2" },
        this.whenIReceiveBoneWall3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "sign pellet" },
        this.whenIReceiveSignPellet
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "sign pellet" },
        this.whenIReceiveSignPellet2
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "scythe wheel" },
        this.whenIReceiveScytheWheel
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "blood rain" },
        this.whenIReceiveBloodRain
      ),
      new Trigger(Trigger.BROADCAST, { name: "death" }, this.whenIReceiveDeath),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Final Stage" },
        this.whenIReceiveFinalStage
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Chains broke" },
        this.whenIReceiveChainsBroke
      ),
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

  *whenIReceiveNewGame() {
    this.costume = "Wait";
    this.goto(174, -19);
    this.visible = false;
    yield* this.wait(14);
    this.visible = true;
    this.stage.watchers.health.visible = true;
    this.broadcast("start games");
    yield* this.wait(1);
    this.costume = "pixil-frame-0 (2)";
    yield* this.wait(0.2);
    this.costume = "pixil-frame-0 (3)";
    yield* this.wait(0.2);
    this.costume = "pixil-frame-0 (4)";
    yield* this.wait(0.2);
    this.costume = "Wait";
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveScythe() {
    this.costume = "pixil-frame-0 (2)";
    yield* this.wait(0.2);
    this.costume = "pixil-frame-0 (3)";
    yield* this.wait(0.2);
    this.costume = "pixil-frame-0 (4)";
    yield* this.wait(0.2);
    this.costume = "Wait";
    yield* this.wait(9.5);
  }

  *whenIReceiveBoneWalls() {
    this.costume = "pixil-frame-0 (2)";
    yield* this.wait(0.2);
    this.costume = "pixil-frame-0 (3)";
    yield* this.wait(0.3);
    this.costume = "pixil-frame-0 (4)";
    yield* this.wait(0.2);
    this.costume = "Wait";
    yield* this.wait(9.5);
  }

  *whenIReceiveBoneWall2() {
    this.costume = "pixil-frame-0 (2)";
    yield* this.wait(0.2);
    this.costume = "pixil-frame-0 (3)";
    yield* this.wait(0.2);
    this.costume = "pixil-frame-0 (4)";
    yield* this.wait(0.2);
    this.costume = "Wait";
    yield* this.wait(9.5);
  }

  *whenIReceiveNewGame2() {
    yield* this.playSoundUntilDone("Low Whoosh");
  }

  *whenIReceiveScythe2() {
    yield* this.playSoundUntilDone("Low Whoosh");
  }

  *whenIReceiveBoneWalls2() {
    yield* this.playSoundUntilDone("Low Whoosh");
  }

  *whenIReceiveBoneWall3() {
    yield* this.playSoundUntilDone("Low Whoosh");
  }

  *whenIReceiveSignPellet() {
    this.costume = "pixil-frame-0 (2)";
    yield* this.wait(0.2);
    this.costume = "pixil-frame-0 (3)";
    yield* this.wait(0.2);
    this.costume = "pixil-frame-0 (4)";
    yield* this.wait(0.2);
    this.costume = "Wait";
    yield* this.wait(9.5);
  }

  *whenIReceiveSignPellet2() {
    yield* this.playSoundUntilDone("Low Whoosh");
  }

  *whenGreenFlagClicked2() {
    this.stage.watchers.health.visible = false;
  }

  *whenIReceiveScytheWheel() {
    this.costume = "pixil-frame-0 (2)";
    yield* this.wait(0.2);
    this.costume = "pixil-frame-0 (3)";
    yield* this.wait(0.2);
    this.costume = "pixil-frame-0 (4)";
    yield* this.wait(0.2);
    this.costume = "Wait";
    yield* this.wait(9.5);
  }

  *whenIReceiveBloodRain() {
    this.costume = "pixil-frame-0 (2)";
    yield* this.wait(0.2);
    this.costume = "pixil-frame-0 (3)";
    yield* this.wait(0.2);
    this.costume = "pixil-frame-0 (4)";
    yield* this.wait(0.2);
    this.costume = "Wait";
    yield* this.wait(9.5);
  }

  *whenIReceiveDeath() {
    this.costume = "pixil-frame-0 (2)";
    yield* this.wait(0.2);
    this.costume = "pixil-frame-0 (3)";
    yield* this.wait(0.2);
    this.costume = "pixil-frame-0 (4)";
    yield* this.wait(0.2);
    this.costume = "Wait";
    yield* this.wait(3);
    this.visible = false;
  }

  *whenIReceiveFinalStage() {
    this.broadcast("CHAINED");
    this.costume = "Wait";
    yield* this.glide(3, -13, -9);
    this.costume = "Text one";
    yield* this.wait(3);
    this.costume = "Text one2";
    yield* this.wait(3);
    this.costume = "pixil-frame-0 (2)";
    yield* this.wait(0.2);
    this.costume = "pixil-frame-0 (3)";
    yield* this.wait(0.2);
    this.costume = "pixil-frame-0 (4)";
    yield* this.wait(0.2);
    this.costume = "Wait";
    yield* this.wait(0.2);
    this.costume = "pixil-frame-0 (1)2";
  }

  *whenIReceiveChainsBroke() {
    yield* this.wait(1);
    this.costume = "text 3";
    yield* this.wait(3);
    this.costume = "Text 4";
    yield* this.wait(1);
    this.broadcast("FINAL FIGHT");
    yield* this.glide(1, -6, 103);
    this.costume = "pixil-frame-0 (2)";
    yield* this.wait(0.2);
    this.costume = "pixil-frame-0 (3)";
    yield* this.wait(0.2);
    this.costume = "pixil-frame-0 (4)";
    yield* this.wait(0.2);
    this.costume = "Wait";
  }

  *whenIReceiveFinalFight() {
    this.visible = true;
  }

  *whenIReceiveHeartKilled() {
    this.costume = "Hurt 1";
    yield* this.wait(0.1);
    this.costume = "Hurt 2";
    yield* this.wait(0.1);
    this.costume = "Hurt 3";
    yield* this.wait(0.1);
    this.costume = "Wait";
  }

  *whenIReceive2ndHeartKilled() {
    this.stage.vars.numberSet += 6;
    this.costume = "Hurt 1";
    yield* this.wait(0.1);
    this.costume = "Hurt 2";
    yield* this.wait(0.1);
    this.costume = "Hurt 3";
    yield* this.wait(0.1);
    this.costume = "Wait";
    yield* this.wait(2);
    yield* this.glide(3, 108, -102);
    this.costume = "Ending text 1";
    yield* this.wait(5);
    this.costume = "JK lol trolled";
    yield* this.wait(1);
    this.costume = "Wait";
    yield* this.glide(3, -8, 102);
    this.broadcast("desperation ");
  }

  *whenIReceiveTheTrueEnding() {
    this.visible = true;
    yield* this.glide(2, 6, 102);
    this.costume = "Ending text true";
    yield* this.wait(3);
    this.costume = "Ending text true 2";
    yield* this.wait(2);
    this.broadcast("oh shoot");
  }

  *whenIReceiveOhShoot() {
    this.costume = "What are you holdiong";
    yield* this.wait(3);
    this.costume = "Wait";
    yield* this.wait(2);
  }

  *whenbackdropswitchesto() {
    this.visible = false;
  }

  *whenIReceiveYouSuck() {
    while (true) {
      this.visible = false;
      yield;
    }
  }
}
