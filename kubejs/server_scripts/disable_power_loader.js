// KubeJS file to disable create power loaders crafting
ServerEvents.recipes(event => {
    event.remove({ mod: 'create_power_loader' })
});