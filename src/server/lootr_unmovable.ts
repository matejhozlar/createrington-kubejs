// KubeJS file to add missing washing recipes for Create Colored mod items back into Create mod
ServerEvents.tags('block',event => {
    event.add('create:non_movable', 'lootr:lootr_trapped_chest')
    event.add('create:non_movable', 'lootr:lootr_shulker')
    event.add('create:non_movable', 'lootr:lootr_chest')
    event.add('create:non_movable', 'lootr:lootr_barrel')
});
