package main

import (
    "fmt"
    "html"
    "log"
    "net/http"
    "goserver/logger"
    "goserver/routes"
    "goserver/db"
)

func main() {
    logger.PrintLog("now initializing server...")
    logger.PrintLog("now creating database...")
    db.DB()
    db.CreateTables()

    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        fmt.Fprintf(w, "Hello, %q", html.EscapeString(r.URL.Path))
    })

    http.HandleFunc("/hi", func(w http.ResponseWriter, r *http.Request){
        fmt.Fprintf(w, "Hi")
    })

    http.HandleFunc("/ping", func(w http.ResponseWriter, r *http.Request){
	fmt.Println("inside ping!")
	routes.Ping(w, r)
    })

    http.HandleFunc("/message/add", func(w http.ResponseWriter, r *http.Request){
        routes.Addmessage(w, r)
    })

    http.HandleFunc("/messages/get", func(w http.ResponseWriter, r *http.Request){
        routes.Getmessages(w, r)
    })

    log.Fatal(http.ListenAndServe(":8082", nil))
}
