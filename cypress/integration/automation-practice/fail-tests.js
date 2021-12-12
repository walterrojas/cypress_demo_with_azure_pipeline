describe('Fail Tests', () => {
    it('Fail test 1', () => {
        expect(true).to.equal(false)
    })
    it('Fail test 2', () => {
        var result = false
        expect(result).to.equal(true)
    })
})