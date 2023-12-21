package controller

import (
	"encoding/json"
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

type ReturnValues struct {
	Errcode int         `json:"errcode"`
	Message string      `json:"message"`
	Data    interface{} `json:"data"`
}

func (h *BaseHandler) GetAll(w http.ResponseWriter, r *http.Request) {
	addHeaders(w)
	blogs, err := h.blogRepo.GetAll()
	if err != nil {
		json.NewEncoder(w).Encode(ReturnValues{
			Errcode: 1,
			Message: "Error",
			Data:    err.Error(),
		})
		return
	}
	json.NewEncoder(w).Encode(ReturnValues{
		Errcode: 0,
		Message: "OK",
		Data:    blogs,
	})
}

func addHeaders(w http.ResponseWriter) {
	w.Header().Add("Connection", "keep-alive")
	w.Header().Add("Access-Control-Allow-Origin", "http://localhost:3000")
	w.Header().Add("Access-Control-Allow-Methods", "POST, OPTIONS, GET")
	w.Header().Add("Access-Control-Allow-Headers", "content-type")
	w.Header().Add("Access-Control-Max-Age", "86400")
}
