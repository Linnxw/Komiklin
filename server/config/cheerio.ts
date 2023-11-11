import cheerio from "cheerio"
import axios from "axios"
export const fetcher = async (url: string) => {
  try {
    const res = await axios.get(url,{
      headers: {
        'authority': 'www.google.com',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'accept-language': 'en-US,en;q=0.9',
        'cache-control': 'max-age=0',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
    }
    });
    const $ = cheerio.load(res.data);
    return $
  }catch(err){
    throw err
  }
}