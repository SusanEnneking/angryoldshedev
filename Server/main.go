package main

import (
	"fmt"
	"net/http"

	"github.com/SusanEnneking/angryoldshedev/server/controller"
	"github.com/SusanEnneking/angryoldshedev/server/repository"
	"github.com/SusanEnneking/angryoldshedev/server/sqldb"
)

func main() {
	db := sqldb.ConnectDB()
	defer db.Close()

	// Create repos
	blogRepo := repository.NewBlogRepo(db)

	h := controller.NewBaseHandler(blogRepo)

	http.HandleFunc("/", h.GetAll)

	s := &http.Server{
		Addr: fmt.Sprintf("%s:%s", "localhost", "8080"),
	}

	s.ListenAndServe()

}
