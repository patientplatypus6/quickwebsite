package routes

import(
  "fmt"
  "net/http"
  "io/ioutil"
  "encoding/json"
  "goserver/db"
)

type Message struct {
    Message string `json:"message"`
}

type Messages struct{
    Messages []string `json:"messages"`
}

type ReturnStruct struct{
    Response string
}

func Ping(w http.ResponseWriter, r *http.Request){
	fmt.Print("inside route ping!")
}

func Getmessages(w http.ResponseWriter, r *http.Request){
  fmt.Print("inside getmessages")
  w.Header().Set("Content-Type", "application/json")
  var returnrows = db.Getmessages()
  var msgs Messages
  msgs.Messages = returnrows
  err := json.NewEncoder(w).Encode(msgs)
  if err != nil {
    http.Error(w, err.Error(), 500)
    return
  }
}

func Addmessage(w http.ResponseWriter, r *http.Request){

  fmt.Print("inside addmessage")
  w.Header().Set("Content-Type", "application/json")

  b, err := ioutil.ReadAll(r.Body)
  defer r.Body.Close()
  if err != nil {
    http.Error(w, err.Error(), 500)
    return
  }

  // Unmarshal
  var msg Message
  err = json.Unmarshal(b, &msg)
  if err != nil {
      http.Error(w, err.Error(), 500)
      return
  }

  // Marshal
 // output, err := json.Marshal(msg)
 // if err != nil {
 //   http.Error(w, err.Error(), 500)
 //   return
 // }

  var returnrows = db.Addmessage(msg.Message)

  var msgs Messages
  msgs.Messages = returnrows
  err2 := json.NewEncoder(w).Encode(msgs)
  if err2 != nil {
    http.Error(w, err.Error(), 500)
    return
  }

  //fmt.Printf("value of returnrows from db additions: %s", returnrows)

  //fmt.Printf("value of output: %s", output)
 // fmt.Printf("value of message: %s", msg.Message)
 // fmt.Printf("type of output: %T", output)
  //w.Write(output)
//  var m Message
//  err := json.NewDecoder(r.Body).Decode(&m)
//  if err != nil {
//    http.Error(w, err.Error(), http.StatusBadRequest)
//    return
//  }
//  message, _ := json.Marshal(&m)
//  fmt.Println("here is the value of the incoming message")
//  fmt
}
