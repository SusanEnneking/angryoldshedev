package repository

import (
	"database/sql"
	"log"
	"testing"
	"time"

	m "github.com/SusanEnneking/angryoldshedev/server/model"

	"github.com/DATA-DOG/go-sqlmock"
	"github.com/stretchr/testify/assert"
)

var b = &m.Blog{
	Id:            1,
	BodyId:        1,
	Autogenerated: true,
	Topic:         "something silly",
	Generated:     "something smart from openai",
	Written:       "some well worded question",
	CreatedOn:     time.Now(),
	CreatedBy:     "testing",
	Active:        true,
	Category:      "Technical",
}

func NewMock() (*sql.DB, sqlmock.Sqlmock) {
	db, mock, err := sqlmock.New()
	if err != nil {
		log.Fatalf("an error '%s' was not expected when opening a stub database connection", err)
	}

	return db, mock
}
func TestBlogGetAll(t *testing.T) {
	db, mock := NewMock()
	repo := NewBlogRepo(db)
	defer func() {
		repo.Close()
	}()
	query := `SELECT blog.id as id, body_id, auto_generated, topic, "generated", 
			written, blog.created_date as created_date, blog.created_by as created_by, blog.is_active as is_active,
			category.category as category
			FROM blog
			JOIN category
			ON blog.category_id = category.id`
	rows := sqlmock.NewRows([]string{"id", "body_id", "auto_generated", "topic", "generated", "written", "created_date", "created_by", "is_active", "category"}).
		AddRow(b.Id, b.BodyId, b.Autogenerated, b.Topic, b.Generated, b.Written, b.CreatedOn, b.CreatedBy, b.Active, b.Category)
	mock.ExpectQuery(query).WithArgs().WillReturnRows(rows)
	blog, err := repo.GetAll()
	assert.NotNil(t, blog)
	assert.NoError(t, err)
}