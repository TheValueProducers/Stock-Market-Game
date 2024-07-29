const { Game, Gameplay, Scenario, Share } = require("../models")
const getScenariosFromGameId = async (game_id) => {
    const scenarios = await Game.findAll({
        where: {
            game_id
        },
        include: [{
            model: Gameplay,
            as: "gameplay"
        }]
    })

}