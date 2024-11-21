const { buildModule } = require('@nomicfoundation/hardhat-ignition/modules');

module.exports = buildModule('TokenShopModule', m => {
    const TokenShopModule = m.contract('TokenShop', [
        ''
    ]);

    return { TokenShopModule };
});