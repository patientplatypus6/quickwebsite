package db

import(
  "fmt"
  _ "github.com/lib/pq"
  "database/sql"
  "context"
  "os"
  "github.com/jackc/pgx/v4/pgxpool"
)

const (
  host     = "164.92.157.124"
  port     = 5432
  user     = "pixel"
  password = "exploration"
  dbname   = "lightchan"
)

var connGLOBAL *pgxpool.Pool

func DB(){
  urlExample := "postgres://pixel:exploration@164.92.157.124:5432/lightchan"
  conn, err := pgxpool.Connect(context.Background(), urlExample)
  if err != nil {
	fmt.Fprintf(os.Stderr, "Unable to connect to database: %v\n", err)
		os.Exit(1)
	}
  //defer conn.Close()
  connGLOBAL = conn
  fmt.Printf("value of connGLOBAL %v", connGLOBAL)
}

func CreateTables() error {
  psqlInfo := fmt.Sprintf("host=%s port=%d user=%s "+
    "password=%s dbname=%s sslmode=disable",
    host, port, user, password, dbname)
  db, err := sql.Open("postgres", psqlInfo)
  err = db.Ping()
  if err != nil {
    panic(err)
  }
  if err != nil {
    panic(err)
  }
  defer db.Close()
  fmt.Println("Successfully connected!")
  var testTable = `
	CREATE TABLE IF NOT EXISTS TEST(
	  UserID int
	);
	CREATE TABLE IF NOT EXISTS MESSAGES(
          message varchar(255)
	);
  `
  dbret, errret := db.Exec(testTable)
  fmt.Printf("value of db %v", dbret)
  return errret
}

func Getmessages()[]string{
  fmt.Printf("inside Getmessages for db")
  rows, err2 := connGLOBAL.Query(context.Background(), "select * from messages")
        if err2 != nil {
                fmt.Fprintf(os.Stderr, "Query failed: %v\n", err2)
                os.Exit(1)
        }

       returnrows := []string{}
       for rows.Next() {
                var message string
                err := rows.Scan(&message)
                if err != nil {
                  panic(err)
                }
                returnrows = append(returnrows, message)
                fmt.Printf("%s\n", message)
        }

  return returnrows

}

func Addmessage(message string)[]string{
  fmt.Printf("inside Addmessage for db")
  fmt.Printf("value of message %v,", message)

  _, err := connGLOBAL.Exec(context.Background(), "insert into messages(message) values($1)", message)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Exec failed: %v\n", err)
		os.Exit(1)
	}

  rows, err2 := connGLOBAL.Query(context.Background(), "select * from messages")
        if err2 != nil {
                fmt.Fprintf(os.Stderr, "Query failed: %v\n", err2)
                os.Exit(1)
        }

       returnrows := []string{}
       for rows.Next() {
		var message string
		err := rows.Scan(&message)
		if err != nil {
		  panic(err)
		}
		returnrows = append(returnrows, message)
		fmt.Printf("%s\n", message)
	}

  return returnrows
}
