```go
    package main
    
    import (
    	"rebel"
    	"life"
    	"love"
    )
    
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

<br />

### About me

My name is ***Amir Hossein***, I am a 21 years old computer engineer, web designer and Back-end developer.
Currently studing **Computer Engineering** at _Amirkabir University of Tehran_, Iran.
Working as a full-time Back-end developer at **Snapp-Cab**.
One year experience in **PHP/Laravel** developing.
Two years experience in **Front-end** developing, using _Vue.js_<br />

<br />

### Fields of interest

 - Software Engineering  
 - Computer Networks
 - DevOps
 - Teaching and Mentoring
