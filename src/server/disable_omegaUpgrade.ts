// KubeJS file to disable sophisticated omaga stack upgrade tiers
ServerEvents.recipes(event => {
    event.remove({output: 'sophisticatedbackpacks:stack_upgrade_omega_tier'})
    event.remove({output: 'sophisticatedstorage:stack_upgrade_omega_tier'})
});