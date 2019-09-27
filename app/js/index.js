/* let p1 = new Promise(function (res, rej) {
    $.ajax({
        url: "data/json.txt",
        dataType: 'json',
        success: data => { res(data) },
        error: err => { rej(err) }
    })
})

let p2 = new Promise(function (res, rej) {
    $.ajax({
        url: "data/arr.txt",
        dataType: 'json',
        success: data => { res(data) },
        error: err => { rej(err) }
    })
})


Promise.all([p1, p2]).then(res => {
    let [res1, res2] = res;

    console.log(res21);
}, err => {
    console.log(err)
}); */



/*
let show =async ()=>{
    let res1 =  await  $.ajax({url: "data/arr.txt",dataType: 'json',success: data => { console.log(data) },error: err => { console.log(err)  } });
    let res2 = await $.ajax({url: "data/json.txt",dataType: 'json',success: data => { console.log(data)  },error: err => { console.log(err)  } });
};

show();*/

$(function(){
        $("button").click(function(event) {
            console.log($)
             window.location.hash = "#tip2";
             window.location.hash = "";
             window.location.hash = "#tip1"
         });
    })




D:\Apache24\bin>net start apache
发生系统错误 2。

系统找不到指定的文件。














