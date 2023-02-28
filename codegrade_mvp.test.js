import {
  as,
  dosyaAdiniBul,
  ortalamaBul,
  ortalamadanBuyukleriBul,
} from "./index";
import { numbers } from "./sample_data";

describe("fooFunction", () => {
  it("as sa döner", () => {
    expect(as()).toBe("sa");
  });
});

describe("Dosya adını bul", () => {
  it("Boş string verilirse boş string dönüyor mu?", () => {
    let sonuc = dosyaAdiniBul("");
    expect(sonuc).toBe("");
  });

  it("Path içerisinde / yoksa inputu aynen return ediyor mu?", () => {
    let sonuc = dosyaAdiniBul("Beethoven_5.mp3");
    expect(sonuc).toBe("Beethoven_5.mp3");
  });

  it("Standart inputla doğru çıktıyı üretiyor mu?", () => {
    let sonuc = dosyaAdiniBul("C:/Users/johnsmith/Music/Beethoven_5.mp3");
    expect(sonuc).toBe("Beethoven_5.mp3");
  });

  it("Başka standart bir inputla doğru çıktıyı üretiyor mu?", () => {
    let sonuc = dosyaAdiniBul(
      "D:/Users/johnsmith/Documents/VestibulumQuam.txt"
    );
    expect(sonuc).toBe("VestibulumQuam.txt");
  });
});

describe("Ortalama bul", () => {
  it("Boş array verilirse null dönüyor mu?", () => {
    let sonuc = ortalamaBul([]);
    expect(sonuc).toBe(null);
  });

  it("Tek bir sayı varsa aynı sayı dönüyor mu?", () => {
    let sonuc = ortalamaBul([4]);
    expect(sonuc).toBe(4);
  });

  it("Az sayıda elemanla doğru sonucu üretiyor mu?", () => {
    let sonuc = ortalamaBul([50, -26, 153, 7]);
    expect(sonuc).toBe(46);
  });

  it("Çok sayıda elemanla doğru sonucu bekletmeden üretiyor mu?", () => {
    let sonuc = ortalamaBul(numbers);
    expect(sonuc).toBe(9831);
  });
});

describe("Ortalamadan büyükleri bul", () => {
  it("Boş array verilirse null dönüyor mu?", () => {
    let sonuc = ortalamadanBuyukleriBul([], ortalamaBul);
    expect(sonuc).toBe(null);
  });

  it("Tek bir sayı varsa aynı sayıyı içeren bir array dönüyor mu?", () => {
    let sonuc = ortalamadanBuyukleriBul([4], ortalamaBul);
    expect(sonuc).toStrictEqual([4]);
  });

  it("Az sayıda elemanla doğru sonucu üretiyor mu?", () => {
    let sonuc = ortalamadanBuyukleriBul([50, -26, 153, 7], ortalamaBul);
    expect(sonuc).toStrictEqual([50, 153]);
  });

  it("Çok sayıda elemanla doğru sonucu bekletmeden üretiyor mu?", () => {
    let sonuc = ortalamadanBuyukleriBul(numbers, ortalamaBul);
    expect(sonuc).toStrictEqual([9978, 9908, 2480599, 9894, 9998]);
  });
});
