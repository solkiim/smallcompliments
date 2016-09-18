//compliment generator
function generator() {
    var adj = ["beautiful", "delightful", "capable", "peerless", "shining", "eloquent", "legendary", "golden", "blessed", "stupendous", "superb", "lovely", "swell", "spectacular", "dashing", "majestic", "magnificent", "loved", "adored", "fabulous", "brave", "classy", "creative", "dazzling", "delicate", "delicious", "divine", "electrifying", "elegant", "enchanting", "enlightening", "enrapturing", "entertaining", "enthusiastic", "exceptional", "gorgeous", "eye-catching", "juicy","famous", "fantastic", "fashionable", "fearless", "flavorful", "fresh", "friendly", "fun", "funny", "gentle", "glistening", "glowing", "hallowed", "handsome", "hardworking", "heroic", "charming", "heavenly", "hilarious", "hot", "ingenious", "irreplaceable", "invigorating", "jazzy", "kindhearted", "luscious", "magical", "mesmerizing", "muscular", "optimistic", "outstanding", "peachy", "passionate", "rad", "ravishing", "regal", "revered", "saintly", "sassy", "saucy", "sexy", "smooth", "snazzy", "tender-hearted", "titillating", "valiant", "zany"];

    var noun = ["hamster", "llama", "grapefruit", "banana", "chinchilla", "crumpet", "macaroon", "puppy", "piece of pizza", "cupcake", "grape", "tomato", "potato", "mouse", "peach", "pineapple", "tulip", "kiwi", "papaya", "chihuahua", "panda", "piglet", "gumdrop", "hedgehog", "seal", "snickerdoodle", "pancake", "Superman", "chicken finger", "Batman", "Hulk", "Spiderman", "Thor", "nibblet", "pebble", "unicorn", "rainbow", "waffle", "carrot", "gnome", "toe", "pinky", "mermaid", "barnacle", "Benedict Cumberbatch", "wrinkle", "hotdog", "sea urchin", "sea urchin", "sea urchin", "sea urchin", "magnolia flower", "zebra", "blob", "alpaca", "hashtag", "Taylor Swift", "marshmallow", "oreo", "platypus", "pickle", "swagnugget", "didgeridoo", "noodle", "rolly polly", "tater tot", "Cedric Diggory", "piece of string cheese", "capybara", "cheerio"]

    var n1 = parseInt(Math.random() * adj.length);
    var n2 = parseInt(Math.random() * adj.length);
    while (n2 == n1) {
        n2 = parseInt(Math.random() * adj.length);
    }
    var n3 = parseInt(Math.random() * noun.length);
    var comp = "you " + adj[n1] + ", " + adj[n2] + " little " + noun[n3] + ", you!";

    if (document.getElementById("result")) {
        document.getElementById("placeholder").removeChild(document.getElementById("result"));
    }

    var element = document.createElement("div");
    element.setAttribute("id", "result");
    element.appendChild(document.createTextNode(comp));
    document.getElementById("placeholder").appendChild(element);
}