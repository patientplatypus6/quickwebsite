import {getData} from '../../utility/utility'

export default async function golang(req, res) {
  if(req.method=="GET"){
    await getData('http://164.92.157.124:8082/messages/get', { message: req.body.message})
    .then(data => {
      console.log("return value from golang: ", data); // JSON data parsed by `data.json()` call
      res.status(200).json(data)
    });
  }else{
    res.status(200).json({ name: 'John Doe' })
  }
}
