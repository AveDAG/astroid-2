function hero () {
    hero2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 2 . . . 2 . . . . . . . 
. . . . . 1 2 1 . . . . . . . . 
. 2 2 2 . 2 2 2 . 2 2 2 . . . . 
. 2 5 2 . 2 1 2 . 2 5 2 . . . . 
. 2 2 2 . . 2 . . 2 2 2 . . . . 
. . . 2 2 2 2 2 2 2 . . . . . . 
. . . . . 2 5 2 . . . . . . . . 
. . . . . 2 2 2 . . . . . . . . 
. . . . . . 5 . . . . . . . . . 
. . . . . 2 2 2 . . . . . . . . 
. . . . . 2 . 2 . . . . . . . . 
. . . . . 2 . 2 . . . . . . . . 
`, SpriteKind.Player)
    hero2.setPosition(78, 97)
    controller.moveSprite(hero2, 100, 0)
}
function score () {
    info.changeScoreBy(1)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    overlap()
})
function overlap () {
    game.over(false)
}
function projectile () {
    projectile2 = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
. 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
. 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
. 7 7 1 1 1 7 7 7 7 1 1 1 7 7 . 
. 7 7 1 1 1 7 7 7 7 1 1 1 7 7 . 
7 7 1 1 1 1 1 7 7 1 1 1 1 1 7 7 
7 7 1 1 1 1 1 7 7 1 1 1 1 1 7 7 
7 7 7 1 1 1 7 7 7 7 1 1 1 7 7 7 
7 7 7 7 7 7 7 f f 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 f 7 7 7 7 7 7 7 
. 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
. 7 7 7 7 f f f f f f f 7 7 7 . 
. 7 7 7 f 1 2 1 2 1 2 1 f 7 7 . 
. 7 7 7 f 1 1 2 1 2 1 1 f 7 7 . 
. 7 7 7 7 f f f f f f f 7 7 7 . 
`, 0, 0)
}
let projectile2: Sprite = null
let hero2: Sprite = null
hero()
game.onUpdateInterval(700, function () {
    projectile()
    score()
})
