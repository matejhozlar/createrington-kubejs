ServerEvents.recipes(event => {
    const dyesTags = [
        'white',
        'light_gray',
        'gray',
        'black',
        'brown',
        'red',
        'orange',
        'yellow',
        'lime',
        'green',
        'cyan',
        'light_blue',
        'blue',
        'purple',
        'magenta',
        'pink'
    ]

    dyesTags.forEach(color => {
        event.remove({ id: `interiors:crafting/chair/${color}_chair_from_other_chair` })
        event.remove({ id: `interiors:crafting/floor_chair/${color}_floor_chair_from_other_floor_chair` })

        event.shapeless(
            Item.of(`interiors:${color}_chair`, 1),
            [
                {tag: 'interiors:chairs'},
                {tag: `c:dyes/${color}`}
            ]
        )

        event.shapeless(
            Item.of(`interiors:${color}_floor_chair`, 1),
            [
                {tag: 'interiors:floor_chairs'},
                {tag: `c:dyes/${color}`}
            ]
        )
    })
});