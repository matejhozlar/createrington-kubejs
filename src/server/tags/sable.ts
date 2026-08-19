ServerEvents.tags('block', (event) => {
    // super light blocks
    const sableSuperLightBlocks = [
        // add blocks here
    ]
    sableSuperLightBlocks.forEach((block) => {
        event.add('sable:super_light', block)
    })

    // light blocks
    const sableLightBlocks = [
        'dndecor:belt',
    ]
    sableLightBlocks.forEach((block) => {
        event.add('sable:light', block)
    })

    // heavy blocks
    const sableHeavyBlocks = [
        // add blocks here
    ]
    sableHeavyBlocks.forEach((block) => {
        event.add('sable:heavy', block)
    })

    // super heavy blocks
    const sableSuperHeavyBlocks = [
        // add blocks here
    ]
    sableSuperHeavyBlocks.forEach((block) => {
        event.add('sable:super_heavy', block)
    })

    // half volume blocks
    const sableHalfVolumeBlocks = [
        // add blocks here
    ]
    sableHalfVolumeBlocks.forEach((block) => {
        event.add('sable:half_volume', block)
    })

    // quarter volume blocks
    const sableQuarterVolumeBlocks = [
        // add blocks here
    ]
    sableQuarterVolumeBlocks.forEach((block) => {
        event.add('sable:quarter_volume', block)
    })

    // slippery blocks
    const sableSlipperyBlocks = [
        // add blocks here
    ]
    sableSlipperyBlocks.forEach((block) => {
        event.add('sable:slippery', block)
    })

    // bouncy blocks
    const sableBouncyBlocks = [
        // add blocks here
    ]
    sableBouncyBlocks.forEach((block) => {
        event.add('sable:bouncy', block)
    })

    // frictive blocks
    const sableFrictiveBlocks = [
        'dndecor:belt',
    ]
    sableFrictiveBlocks.forEach((block) => {
        event.add('sable:frictive', block)
    })
});