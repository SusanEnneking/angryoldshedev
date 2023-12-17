package repository

import (
	"database/sql"

	"github.com/SusanEnneking/angryoldshedev/server/model"
)

// UserRepo implements models.UserRepository
type BlogRepo struct {
	db *sql.DB
}

// NewBlogRepo ..
func NewBlogRepo(db *sql.DB) *BlogRepo {
	return &BlogRepo{
		db: db,
	}
}

func (r *BlogRepo) GetAll() (*model.Blog, error) {
	return &model.Blog{}, nil
}

func (r *BlogRepo) Save(user *model.Blog) error {
	return nil
}
