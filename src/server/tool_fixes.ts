// KubeJS file to add missing washing recipes for Create Colored mod items back into Create mod
ServerEvents.tags('block',event => {
    event.add('minecraft:mineable/pickaxe', '#c:glass_blocks')
    event.add('silentgear:mineable/paxel', '#c:glass_blocks')
    event.add('minecraft:mineable/pickaxe', '#chipped:glass')
    event.add('silentgear:mineable/paxel', '#chipped:glass')
    event.add('minecraft:mineable/pickaxe', '#mcwwindows:mosaic_glass')
    event.add('silentgear:mineable/paxel', '#mcwwindows:mosaic_glas')
});
