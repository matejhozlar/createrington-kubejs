// KubeJS file to add missing washing recipes for Create Colored mod items back into Create mod
ServerEvents.recipes(event => {
    // pipes from colored pipes
    event.custom({
        "type": "create:splashing",
        "ingredients": [
            { 
                "tag": "create_colored:colored_pipes"
            }
        ],
        "results": [
            {
                "id": "create:fluid_pipe"
            }
        ]
    });
    // tanks from colored tanks
    event.custom({
        "type": "create:splashing",
        "ingredients": [
            { 
                "tag": "create_colored:colored_tanks"
            }
        ],
        "results": [
            {
                "id": "create:fluid_tank"
            }
        ]
    });
});
