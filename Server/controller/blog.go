package controller

import (
	"fmt"
	"net/http"

	"github.com/SusanEnneking/angryoldshedev/server/model"
)

// BaseHandler will hold everything that controller needs
type BaseHandler struct {
	blogRepo model.BlogRepository
}

// NewBaseHandler returns a new BaseHandler
func NewBaseHandler(blogRepo model.BlogRepository) *BaseHandler {
	return &BaseHandler{
		blogRepo: blogRepo,
	}
}

func (h *BaseHandler) GetAll(w http.ResponseWriter, r *http.Request) {
	if blogs, err := h.blogRepo.GetAll(); err != nil {
		fmt.Println("Error", blogs)
	}

	w.Write([]byte("Hello, World"))
}
