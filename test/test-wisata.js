const expect = require('chai').expect;

describe('Laporan Penjualan', () => {
  it('Obat Oral', (done) => {
    // anggap aja ngejalanin script laporan Obat Oral
    const obatOral = 400 * 20;
    expect(obatOral).to.equal(8000, "harusnya pas nich");
    done();
  });

  it('Jamu', (done) => {
    // TODO: jalanin script
    const jamu = 3 * 4;
    expect(jamu).to.equal(12, "harusnya pas nich jamunya");
    done();
  });
});
