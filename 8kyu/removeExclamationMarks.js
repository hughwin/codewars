function remove(s){
return s.replace(/!{1}$/gm, '')
}
remove("Hi!")