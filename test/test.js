const TestToken = artifacts.require('TestToken')

contract('TestToken', accounts => {
  before(async () => {
    this.testToken = await TestToken.deployed()
  })
  it('symbol and name is set', async () => {
    const name = await this.testToken.name()
    const symbol = await this.testToken.symbol()
    assert.equal(name, 'TestToken')
    assert.equal(symbol, 'TT')
  })
  it('contract is unpaused', async () => {
    const paused = await this.testToken.paused()
    assert.equal(paused, false)
  })
})
