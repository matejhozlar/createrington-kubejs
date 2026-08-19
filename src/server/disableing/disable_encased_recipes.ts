ServerEvents.recipes((event) => {
    const materials = [
        'brass',
        'copper',
        'railway',
        'shadow_steel',
        'refined_radiance',
        'industrial_iron',
        'weathered_iron',
    ]
    materials.forEach(material => {
        const byOutput = [
            `createcasing:${material}_gearbox`,
            `createcasing:vertical_${material}_gearbox`,
            `createcasing:${material}_press`,
            `createcasing:${material}_mixer`,
            `createcasing:${material}_depot`,
            `createcasing:${material}_encased_chain_drive`,
            `createcasing:${material}_adjustable_chain_gearshift`,
            `createcasing:${material}_chain_conveyor`,
            `createcasing:${material}_gearshift`,
            `createcasing:${material}_clutch`,
            `createcasing:${material}_automatic_clutch`,
            `createcasing:${material}_deployer`,
            `createcasing:${material}_portable_storage_interface`,
            `createcasing:${material}_encased_fan`,
            `createcasing:${material}_mechanical_harvester`,
            `createcasing:${material}_mechanical_saw`,
            `createcasing:${material}_mechanical_drill`,
            `createcasing:${material}_mechanical_plough`,
            `createcasing:${material}_mechanical_roller`,
            `createcasing:${material}_slicer`,
        ]
        byOutput.forEach(item => 
            event.remove({ output: item })
        )
    })
});