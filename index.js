import {
  Project,
  Sprite
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Sprite2 from "./Sprite2/Sprite2.js";
import Sprite3 from "./Sprite3/Sprite3.js";
import Sprite4 from "./Sprite4/Sprite4.js";
import Sprite5 from "./Sprite5/Sprite5.js";
import HealthFrame from "./HealthFrame/HealthFrame.js";
import Sprite6 from "./Sprite6/Sprite6.js";
import Sprite7 from "./Sprite7/Sprite7.js";
import Sprite8 from "./Sprite8/Sprite8.js";
import Sprite9 from "./Sprite9/Sprite9.js";
import Sprite10 from "./Sprite10/Sprite10.js";
import Sprite11 from "./Sprite11/Sprite11.js";
import Sprite12 from "./Sprite12/Sprite12.js";
import Sprite13 from "./Sprite13/Sprite13.js";
import Sprite15 from "./Sprite15/Sprite15.js";
import Sprite14 from "./Sprite14/Sprite14.js";
import Sprite16 from "./Sprite16/Sprite16.js";
import Sprite17 from "./Sprite17/Sprite17.js";
import Sprite18 from "./Sprite18/Sprite18.js";
import Sprite19 from "./Sprite19/Sprite19.js";
import Sprite20 from "./Sprite20/Sprite20.js";
import Sprite21 from "./Sprite21/Sprite21.js";
import Sprite22 from "./Sprite22/Sprite22.js";
import Sprite23 from "./Sprite23/Sprite23.js";
import Health from "./Health/Health.js";
import HideBox from "./HideBox/HideBox.js";
import Sprite26 from "./Sprite26/Sprite26.js";
import Sprite27 from "./Sprite27/Sprite27.js";
import Sprite29 from "./Sprite29/Sprite29.js";
import Sprite30 from "./Sprite30/Sprite30.js";
import Sprite31 from "./Sprite31/Sprite31.js";
import Sprite32 from "./Sprite32/Sprite32.js";
import Sprite33 from "./Sprite33/Sprite33.js";
import Sprite34 from "./Sprite34/Sprite34.js";
import Sprite35 from "./Sprite35/Sprite35.js";
import Sprite36 from "./Sprite36/Sprite36.js";
import Sprite37 from "./Sprite37/Sprite37.js";
import Sprite38 from "./Sprite38/Sprite38.js";
import PixilFrame03 from "./PixilFrame03/PixilFrame03.js";
import Sprite24 from "./Sprite24/Sprite24.js";
import Sprite25 from "./Sprite25/Sprite25.js";
import Spike from "./Spike/Spike.js";
import Spike2 from "./Spike2/Spike2.js";
import Spike3 from "./Spike3/Spike3.js";
import PixilFrame05 from "./PixilFrame05/PixilFrame05.js";
import PixilFrame07 from "./PixilFrame07/PixilFrame07.js";
import Sprite28 from "./Sprite28/Sprite28.js";
import Sprite39 from "./Sprite39/Sprite39.js";
import PixilFrame011 from "./PixilFrame011/PixilFrame011.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  Sprite1: new Sprite1({
    x: -49,
    y: -123,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 48
  }),
  Sprite2: new Sprite2({
    x: -98,
    y: 2,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 41
  }),
  Sprite3: new Sprite3({
    x: 227.37142857142857,
    y: -175.76,
    direction: -43.70520992941613,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 37
  }),
  Sprite4: new Sprite4({
    x: 174,
    y: -19,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 47
  }),
  Sprite5: new Sprite5({
    x: -47,
    y: 148,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 29
  }),
  HealthFrame: new HealthFrame({
    x: -135,
    y: 129,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 22
  }),
  Sprite6: new Sprite6({
    x: 74,
    y: -37,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 17
  }),
  Sprite7: new Sprite7({
    x: 249.36248173426358,
    y: 138.3624817342638,
    direction: 45,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 19
  }),
  Sprite8: new Sprite8({
    x: 242,
    y: -37,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 21
  }),
  Sprite9: new Sprite9({
    x: 226.7350647362941,
    y: -189.7350647362942,
    direction: 135,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 5
  }),
  Sprite10: new Sprite10({
    x: 74,
    y: 179,
    direction: 0,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 9
  }),
  Sprite11: new Sprite11({
    x: -61.764501987817184,
    y: -172.76450198781708,
    direction: -135,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 11
  }),
  Sprite12: new Sprite12({
    x: -238,
    y: -37,
    direction: -90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 13
  }),
  Sprite13: new Sprite13({
    x: -152.27416997969522,
    y: 189.27416997969513,
    direction: -45,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 15
  }),
  Sprite15: new Sprite15({
    x: 74,
    y: -181,
    direction: 180,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 7
  }),
  Sprite14: new Sprite14({
    x: 74,
    y: -37,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 16
  }),
  Sprite16: new Sprite16({
    x: 157.64675298172568,
    y: 166.64675298172565,
    direction: 45,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 18
  }),
  Sprite17: new Sprite17({
    x: 242,
    y: -37,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 20
  }),
  Sprite18: new Sprite18({
    x: 106.7350647362943,
    y: -189.7350647362942,
    direction: 135,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 4
  }),
  Sprite19: new Sprite19({
    x: 74,
    y: 179,
    direction: 0,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 8
  }),
  Sprite20: new Sprite20({
    x: -181.76450198781706,
    y: -172.76450198781708,
    direction: -135,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 10
  }),
  Sprite21: new Sprite21({
    x: -238,
    y: -37,
    direction: -90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 12
  }),
  Sprite22: new Sprite22({
    x: -232.67619023324838,
    y: 149.67619023324855,
    direction: -45,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 14
  }),
  Sprite23: new Sprite23({
    x: -46,
    y: -181,
    direction: 180,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 6
  }),
  Health: new Health({
    x: -257,
    y: 161,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 1
  }),
  HideBox: new HideBox({
    x: -241,
    y: 154,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 2
  }),
  Sprite26: new Sprite26({
    x: -27,
    y: -14,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 28
  }),
  Sprite27: new Sprite27({
    x: -164,
    y: 40,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 27
  }),
  Sprite29: new Sprite29({
    x: -203,
    y: -158,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 26
  }),
  Sprite30: new Sprite30({
    x: 76,
    y: -104,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 25
  }),
  Sprite31: new Sprite31({
    x: -201,
    y: -50,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 24
  }),
  Sprite32: new Sprite32({
    x: -219,
    y: 28,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 23
  }),
  Sprite33: new Sprite33({
    x: 48,
    y: 55,
    direction: 180,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 35
  }),
  Sprite34: new Sprite34({
    x: -228,
    y: -104,
    direction: 180,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 34
  }),
  Sprite35: new Sprite35({
    x: -138,
    y: -102,
    direction: 180,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 33
  }),
  Sprite36: new Sprite36({
    x: -48,
    y: 36,
    direction: 180,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 32
  }),
  Sprite37: new Sprite37({
    x: 42,
    y: -42,
    direction: 180,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 31
  }),
  Sprite38: new Sprite38({
    x: -228,
    y: -91,
    direction: 180,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 30
  }),
  PixilFrame03: new PixilFrame03({
    x: -150,
    y: -13,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 7,
    size: 100,
    visible: false,
    layerOrder: 3
  }),
  Sprite24: new Sprite24({
    x: 132,
    y: 106,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 49
  }),
  Sprite25: new Sprite25({
    x: -3,
    y: -168,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 36
  }),
  Spike: new Spike({
    x: 9.603003708777678,
    y: -34.06975590825979,
    direction: -130.14339606605682,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 38
  }),
  Spike2: new Spike2({
    x: 54.92790782074036,
    y: -59.16621124952776,
    direction: 124.46081627137178,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 39
  }),
  Spike3: new Spike3({
    x: -35.506231371884724,
    y: 52.335968783031404,
    direction: 168.95195600971786,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 40
  }),
  PixilFrame05: new PixilFrame05({
    x: -190,
    y: -5,
    direction: 109,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 44
  }),
  PixilFrame07: new PixilFrame07({
    x: 137,
    y: 157,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 3,
    size: 100,
    visible: false,
    layerOrder: 42
  }),
  Sprite28: new Sprite28({
    x: 29.580198587914037,
    y: -72.99757994327219,
    direction: -88.44722082664583,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 43
  }),
  Sprite39: new Sprite39({
    x: 26.006593758248805,
    y: -68.59541586828044,
    direction: -93.59265587293862,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 45
  }),
  PixilFrame011: new PixilFrame011({
    x: -14,
    y: -79,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 9,
    size: 100,
    visible: false,
    layerOrder: 46
  })
};

const project = new Project(stage, sprites, {
  frameRate: 60 // Set to 60 to make your project run faster
});
export default project;
