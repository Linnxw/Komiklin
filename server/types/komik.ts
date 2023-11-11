export interface DetailKomik{
  judulAlternatif: string 
  status: string 
  pengarang: string 
  ilustrator: string 
  grafis: string 
  jenis: string
  tema:string[]
  jumlahPembaca:string
  genre: string[]
  penjelasanSingkat: string 
}

export interface InfoKomik{
  title: string 
  cover: string 
  baner: string
  headerText: string
  chapter: {
    chapterAwal: string
    chapterAkhir: string 
  }
  rating: string 
  votesCount: string
  details: DetailKomik
  sinopsis: string
  lastChapter: string
}