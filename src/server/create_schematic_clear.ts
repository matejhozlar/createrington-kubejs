// KubeJS file to add Create Garnished Roots recipes
ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('create:empty_schematic', 1), // arg 1: output
        [
            'create:schematic'
        ]
        )
});