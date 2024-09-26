```go
package main

import (
	"rebel"
	"life"
	"love"
	"seawolves"

	"os"
	"fmt"
)

func init() {
	os.Setenv("WISE_MAN_SAID", "Everything will be alright, just keep going forward ..")
}

func characteristics() map[string]interface{} {
	return map[string]interface{
		"coding": []string{"Go", "Python", "C", "C++", "Rust", "JavaScript", "PHP"},
		"fav_companies": []string{"Google", "RedHat", "AWS", "iBM"},
		"fields": []string{"Distributed Systems", "Virtualization", "Operating Systems", "Systems Security"},
		"fav_os": "linux ubuntu",
		"fav_app": "Notion",
	}
}

func fun_facts() {
	// fav_movies
	for i := 1; i < 6; i++ {
		fmt.Printf("Pirates of the Caribbean %d\n", i)
	}

	// fav_sports_and_team
	soccer := "Arsenal (Let's go gunners .....)"
	basketball := "LA Lakers"

	// fav_series
	s1 := "Brooklyn 99"
	s2 := "Family Guy"
	s3 := "Office (US version)"
}

// It's never to late to do what you have been dreaming of
// Be rebel, Be unique, Be yourself
func main() {
	// create a new me
	me := &rebel{
		Name: "Amir Hossein",
		Love: &love.Honey{
			Name: "Asal",
			ExpiresAt: nil,
			LoveAmount: love.Infinite,
		},
		Effort: rebel.Maximum + seawolves.Spirit,
		Type: []int{life.FunnyOne, life.FatOne, life.RebelOne},
		Interests: []string{"Computers", "Movies", "Rock & Roll (80s & 90s)", "Batman", "Guitar", "Asal"},
		Characteristics: characteristics(),
		Slogan: "Everything will be alright, just keep going",
	}
	
	// start life
	life.Start(me)
	defer life.Exit(me)
	
	// my life cycle
	for me.IsAlive() {
		go me.DreamBig()
		go me.KeepWorking(life.HardCore)
		go life.Enjoy()
	
		me.Learn(life.NewThing)
		
		if me.FuckedUp() {
			me.SeeMyLove()
		}
	}
}
```
