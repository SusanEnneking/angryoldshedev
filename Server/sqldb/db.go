package sqldb

import (
	"database/sql"
	"fmt"
	"os"
)

// ConnectDB opens a connection to the database
func ConnectDB() *sql.DB {
	userName := os.Getenv("USER_NAME")
	password := os.Getenv("MYSQL_PASSWORD")
	db, err := sql.Open("mysql", fmt.Sprintf("%s:%s/blogs", userName, password))
	if err != nil {
		panic(err.Error())
	}

	return db
}
