MCNode = function(n,c,h){
  h.get("https://api.mojang.com/users/profiles/minecraft/"+n, function(q){
    var b="";
    q.on("data", function(d){
      b+=d
    });
    q.on("end", function(){
      b=JSON.parse(b);
      h.get("https://sessionserver.mojang.com/session/minecraft/profile/"+b.id,function(q){
        u="";
        q.on("data", function(c){
          u+=c;
        });
        q.on("end", function(){
          c(JSON.parse(new Buffer(JSON.parse(u).properties[0].value,"base64").toString("ascii")))
        })
      })
    })
  })
};exports.request=r;