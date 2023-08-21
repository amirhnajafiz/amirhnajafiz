```go
    package main
    
    import (
    	"rebel"
    	"life"
    	"love"
    )

    func skills() map[string]interface{} {
	return map[string]interface{
		"coding": []string{"Go","Python","C","C++","JavaScript","PHP"},
		"tools": []string{"Docker","Kubernetes","ELK","OpenShift","Ansible"},
		"academic": []string{"Cloud Computing","Computer Networks","Operating Systems"},
	}
    }
    
    // It's never to late to do what you have been dreaming of
    // Be rebel, Be unique, Be yourself
    func main() {
    	// create a new me
    	me := &rebel{
		Name: "Amirhossein",
		Love: &love.Honey{
			Name: "Asal",
			ExpiresAt: nil,
			LoveAmount: love.Infinite,
		},
		Effort: rebel.Maximum,
		Type: []int{life.FunnyOne, life.FatOne, life.StupidOne},
		Interests: []string{"Computers", "Movies", "Rock & Roll (80s & 90s)", "Batman", "Guitar"},
		Skills: skills(),
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
