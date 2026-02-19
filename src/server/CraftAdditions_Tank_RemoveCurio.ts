// KubeJS file to add missing washing recipes for Create Colored mod items back into Create mod
ServerEvents.tags('item',event => {
    event.remove('curios:tank', 'create_sa:small_filling_tank')
    event.remove('curios:tank', 'create_sa:medium_filling_tank')
    event.remove('curios:tank', 'create_sa:large_filling_tank')
    event.remove('curios:tank', 'create_sa:small_fueling_tank')
    event.remove('curios:tank', 'create_sa:medium_fueling_tank')
    event.remove('curios:tank', 'create_sa:large_fueling_tank')
});
