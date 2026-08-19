ServerEvents.recipes(event => {
    const byOutput = [
        'simulatedcoasters:coaster_cart',
        'offroad:small_tire',
        'offroad:tire',
        'create_hypertube:hypertube_funnel',
        'createcasing:andesite_spout',
        'createcasing:brass_spout',
        'createcasing:zinc_spout',
    ]

    byOutput.forEach(output => {
        event.replaceInput(
            { output: output},
            'minecraft:dried_kelp',
            'rubberworks:rubber_sheet'
        )
    })
})