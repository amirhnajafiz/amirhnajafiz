```go
    package main
    
    import (
    	"rebel"
    	"life"
    	"love"
    )
    
    // It's never to late to do what you have been dreaming of
    // Be rebel, Be unique, Be yourself
    func main() {
    	// create a new me
    	me := &rebel{
		Name: "Amirhossein",
		Love: &love.Honey{},
		Effort: rebel.Maximum,
		Interests: []string{"Computers", "Sleep", "Rock&Roll", "Batman"},
	}
	
	// start life
	life.Start(me)
	defer life.Exit(me)
	
	// my life cycle
	for me.IsAlive() {
		go me.DreamBig()
		go me.KeepWorking(life.HardCore)
		go life.Enjoy()
		
		if me.FuckedUp() {
			me.SeeLove()
		}
	}
    }
```
