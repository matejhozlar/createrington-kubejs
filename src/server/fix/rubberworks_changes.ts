ServerEvents.recipes(event => {
    const recipesToChange = [
        'simulatedcosters:coaster_cart',
        'offroad:small_tire',
        'offroad:tire',
        'create_hypertube:hypertube_funnel'
    ]

    recipesToChange.forEach(recipe => {
        event.replaceInput(
            {id: recipe},
            'minecraft:dried_kelp',
            'rubberworks:rubber_sheet'
        )
    })
})