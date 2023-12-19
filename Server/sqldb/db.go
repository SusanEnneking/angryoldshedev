package sqldb

import (
	"database/sql"
	"fmt"
	"os"

	_ "github.com/go-sql-driver/mysql"
)

// ConnectDB opens a connection to the database
func ConnectDB() *sql.DB {
	userName := os.Getenv("MYSQL_USER")
	password := os.Getenv("MYSQL_PASSWORD")
	db, err := sql.Open("mysql", fmt.Sprintf("%s:%s@/blogs?parseTime=true", userName, password))
	if err != nil {
		panic(err.Error())
	}

	return db
}
