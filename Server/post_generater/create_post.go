package post_generater

import (
	"context"
	"fmt"
	"os"
	"time"

	openai "github.com/sashabaranov/go-openai"
)

type Poster interface {
	Generate()
}

type Post struct {
	created_by string
	created_on time.Time
	generated  string
	topic      string
}

func (p Post) Generate(topic string) (Post, error) {
	token := os.Getenv("OPENAI_TOKEN")
	client := openai.NewClient(token)
	resp, err := client.CreateChatCompletion(
		context.Background(),
		openai.ChatCompletionRequest{
			Model: openai.GPT3Dot5Turbo,
			Messages: []openai.ChatCompletionMessage{
				{
					Role:    openai.ChatMessageRoleUser,
					Content: topic,
				},
			},
		},
	)
	post := Post{
		created_by: os.Getenv("USER_NAME"),
		created_on: time.Now(),
		topic:      topic,
	}
	if err != nil {
		fmt.Printf("ChatCompletion error: %v\n", err)
		return post, err
	}
	post.generated = resp.Choices[0].Message.Content
	return post, nil
}
