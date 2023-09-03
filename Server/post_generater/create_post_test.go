package post_generater

import (
	"fmt"
	"os"
	"testing"
)

func TestBlogGenerate(t *testing.T) {
	post := Post{}
	os.Setenv("OPENAI_TOKEN", "test token")
	os.Setenv("USER_NAME", "test user")
	post, err := post.Generate("Test question")
	if err != nil {
		fmt.Println(err)
	}
	fmt.Print(post.generated)

}
