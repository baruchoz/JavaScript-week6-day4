//  Make a program that filters a list of strings and returns a list with only your friends name in it.

//  If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

//  Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]


function friend(friends){
    var real_friends = []
    var len = friends.length

    //var name_len =friends[x].length
    for (x=0; x < len; x++) {
        if (friends[x].length == 4) {
            real_friends.push(friends[x])
        }
    }return real_friends
}