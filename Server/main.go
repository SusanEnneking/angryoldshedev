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

	// Create repos
	blogRepo := repository.NewBlogRepo(db)
	defer func() {
		blogRepo.Close()
	}()
	h := controller.NewBaseHandler(blogRepo)

	http.HandleFunc("/blogs", h.GetAll)
	http.HandleFunc("/categories", h.Categories)

	s := &http.Server{
		Addr: fmt.Sprintf("%s:%s", "localhost", "8080"),
	}

	s.ListenAndServe()

}
