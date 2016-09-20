//compliment generator
function generator() {
	// adjectives for compliment
    var adj = ["beautiful", "delightful", "capable", "peerless", "shining", "eloquent", "legendary", "golden", "blessed", "stupendous", "superb", "lovely", "swell", "spectacular", "dashing", "majestic", "magnificent", "loved", "adored", "fabulous", "brave", "classy", "creative", "dazzling", "delicate", "delicious", "divine", "electrifying", "elegant", "enchanting", "enlightening", "enrapturing", "entertaining", "enthusiastic", "exceptional", "gorgeous", "eye-catching", "juicy","famous", "fantastic", "fashionable", "fearless", "flavorful", "fresh", "friendly", "fun", "funny", "gentle", "glistening", "glowing", "hallowed", "handsome", "hardworking", "heroic", "charming", "heavenly", "hilarious", "hot", "ingenious", "irreplaceable", "invigorating", "jazzy", "kindhearted", "luscious", "magical", "mesmerizing", "muscular", "optimistic", "outstanding", "peachy", "passionate", "rad", "ravishing", "regal", "revered", "saintly", "sassy", "saucy", "sexy", "smooth", "snazzy", "tender-hearted", "titillating", "valiant", "zany"];

	// nouns for compliment
    var noun = ["hamster", "llama", "grapefruit", "banana", "chinchilla", "crumpet", "macaroon", "puppy", "piece of pizza", "cupcake", "grape", "tomato", "potato", "mouse", "peach", "pineapple", "tulip", "kiwi", "papaya", "chihuahua", "panda", "piglet", "gumdrop", "hedgehog", "seal", "snickerdoodle", "pancake", "Superman", "chicken finger", "nibblet", "pebble", "unicorn", "rainbow", "waffle", "carrot", "gnome", "toe", "pinky", "mermaid", "barnacle", "wrinkle", "hotdog", "sea urchin", "sea urchin", "sea urchin", "sea urchin", "magnolia flower", "zebra", "blob", "alpaca", "hashtag", "Taylor Swift", "marshmallow", "oreo", "platypus", "pickle", "swagnugget", "didgeridoo", "noodle", "rolly polly", "tater tot", "piece of string cheese", "capybara", "cheerio", "nugget"]

    var i1 = parseInt(Math.random() * adj.length);	// adj 1 index
    var i2 = parseInt(Math.random() * adj.length);	// adj 2 index
    while (i2 == i1) {
        i2 = parseInt(Math.random() * adj.length);	// adjs not the same
    }
    var i3 = parseInt(Math.random() * noun.length);	// noun index
    var comp = "you " + adj[i1] + ", " + adj[i2] + " little " + noun[i3] + ", you!";
	$("#result").text(comp);	// display result

	var i4 = parseInt(Math.random() * 6) + 1;		// image index
	$("#happyimg").attr("src", "img/happypear" + i4 + ".png");	// display image
}