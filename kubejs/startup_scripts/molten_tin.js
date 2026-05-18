const $SoundActions = Java.loadClass('net.neoforged.neoforge.common.SoundActions')
const $SoundEvents = Java.loadClass('net.minecraft.sounds.SoundEvents')
const $ParticleTypes = Java.loadClass('net.minecraft.core.particles.ParticleTypes')

StartupEvents.registry('fluid', event => {
    event.create('molten_tin', 'thick')
    .displayName('Molten Tin')
    .tag([ 'minecraft:fluid', 'c:molten_tin'])
    .tint(0xf7f7f4)
    .slopeFindDistance(3)
    .explosionResistance(100)
    .levelDecreasePerBlock(2)
    .tickRate(30)
    .type(type => type
        .density(3000)
        .viscosity(6000)
        .temperature(1300)
        .canExtinguish(false)
        .canHydrate(false)
        .canSwim(false)
        .canDrown(false)
        .supportsBoating(false)
        .pathType(8)
        .adjacentPathType(8)
        .motionScale(0.0023333333333333335)
        .sound($SoundActions.BUCKET_FILL, $SoundEvents.BUCKET_FILL_LAVA)
        .sound($SoundActions.BUCKET_EMPTY, $SoundEvents.BUCKET_EMPTY_LAVA)
        .renderType(0)
        .stillTexture('kubejs:block/thick_fluid_still')
        .flowingTexture('kubejs:block/thick_fluid_flow')
        .lightLevel(15)
    )
})

BlockEvents.modification(event => {
    event.modify('kubejs:molten_tin', block => {
        block.lightEmission = 15
    })
    event.modify('kubejs:flowing_molten_tin', block => {
        block.lightEmission = 15
    })
})