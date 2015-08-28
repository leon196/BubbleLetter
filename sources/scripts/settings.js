
define([], function()
{
  var Settings = {}

  Settings.DEFAULT_SPEED = 1
  Settings.DEFAULT_FRICTION = 0.98
  Settings.DEFAULT_FRICTION_COLLISION = 0.9

  Settings.MIN_SIZE = 10
  Settings.MAX_SIZE = 30
  Settings.SPAWN_SIZE = 30
  Settings.SIZE_DEAD = 1
  Settings.SIZE_DELTA = 1

  Settings.MIN_DIST_TO_FOLLOW = 50

  Settings.MIN_DIST_TO_ABSORB = 20

  Settings.SCROLL_SPEED = 0.0001

  Settings.DARKNESS_SPEED = 0.01

  Settings.ORBIT_SCALE = 20
  Settings.ORBIT_SPEED = 0.5

  Settings.SPAWN_DELAY = 5
  Settings.SPAWN_DURATION = 20

  Settings.MIN_SPAWN_BUBBLE = 6
  Settings.MAX_SPAWN_BUBBLE = 12

  Settings.OFFSET_OFFSCREN = 100

  Settings.DEFAULT_TARGET_SCALE = 0.05
  Settings.DEFAULT_AVOID_SCALE = 0.2
  Settings.DEFAULT_GLOBAL_SCALE = 0.0001
  Settings.DEFAULT_NEAR_SCALE = 0.0001

  Settings.LETTER_FONT_SCALE = 1.0
  Settings.BULL_OUTLINE = 2
  Settings.BULL_COLLISION_BIAS = 1

  Settings.FONT_NAME = 'Shadows Into Light'
  // Settings.SYMBOLS = [→⥇⥈⤔↝⤳☝︎☜⤺☟↯↔︎↕︎↺$€¥¢£₽₩฿₺₮₱₦☞]
  Settings.SYMBOLS = '☀︎☼☽☾☁︎☂☃★☆☇☈♠︎♣︎♥︎♦︎♤♧♡♢♚♛♜♝♞♟♔♕♖♗♘♙⚀⚂⚁⚃⚄⚅☻☹☺︎☕︎✌︎✍✎✏︎'
  Settings.currentSymbol = 0
  Settings.RandomSymbols = function () { return Settings.currentSymbol + ":" + Settings.SYMBOLS.charAt(Settings.currentSymbol++) }
  //{ return Settings.SYMBOLS.charAt(Math.floor(Settings.SYMBOLS.length * Math.random())) }

  return Settings
})
