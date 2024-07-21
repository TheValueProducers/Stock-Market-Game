const Portfolio = require("./Portfolio")

module.exports = (sequelize, DataTypes ) => {
    const SharePortfolioItems = sequelize.define('SharePortfolioItems', {
        share_portfolio_item_id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false
        },
        share_id: {
            type: DataTypes.STRING,
            references: {
                model: 'Share',
                key: 'share_id'
            }   
        },
        portfolio_item_id: {
            type: DataTypes.UUID,
            references: {
                model: 'PortfolioItem',
                key: 'portfolio_item_id'
            }
        }
    },
    {tableName: 'SharePortfolioItems'})
    return SharePortfolioItems;
    
}