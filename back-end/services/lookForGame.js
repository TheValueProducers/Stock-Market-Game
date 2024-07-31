const { Game, Gameplay, Scenario, Share } = require("../models")
const getScenarioSharesFromGameId = async (game_id) => {
    const scenarios = await Game.findAll({
        where: {
            game_id
        },
        include: [{
            model: Gameplay,
            include: {
                model: Scenario,
                as: "scenarios",
                include: {
                    model: Share
                }
            }
        }]
    })
    console.log(scenarios);

}