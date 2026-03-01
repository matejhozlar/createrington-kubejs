ItemEvents.modification(event => {
  event.modify('createshufflefilter:shuffle_filter', item => {
    item.maxStackSize = 64
  })
  event.modify('createshufflefilter:weighted_shuffle_filter', item => {
    item.maxStackSize = 64
  })
})