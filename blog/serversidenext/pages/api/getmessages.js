import {getData} from '../../utility/utility'

export default async function golang(req, res) {
  if(req.method=="GET"){
    await getData('https://lightchan.org/go/messages/get')
    .then(data => {
      console.log("return value from golang: ", data); // JSON data parsed by `data.json()` call
      res.status(200).json(data)
    });
  }else{
    res.status(200).json({ name: 'John Doe' })
  }
}
