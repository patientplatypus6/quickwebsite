import {postData} from '../../utility/utility'

export default async function golang(req, res) {
  console.log('value of req.body:', req.body)
  console.log('value of req.body.message:', req.body.message)
  if(req.method=="POST"){
    await postData('https://lightchan.org/go/message/add', { message: req.body.message})
    .then(data => {
      console.log("return value from golang: ", data); // JSON data parsed by `data.json()` call
      res.status(200).json(data)   
    });
  }else{
    res.status(200).json({ name: 'John Doe' })
  }
}
