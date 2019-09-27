$(function() {

    var myVideo = document.getElementById("myVideo");
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true
        }).then(function(stream) {
            console.log(stream);

            myVideo.src = (window.URL).createObjectURL(stream);
            myVideo.play();
            var recorder=new MediaRecorder(stream);
            $("#cutVideo").click(function(){
                this.textContent == "录制" ? recorder.start() : recorder.stop();
                this.textContent = this.textContent == "录制" ? "停止" : "录制";
            })

            var buffers = [];
            recorder.ondataavailable = function(event) {
                buffers = event.data;

            }

            recorder.onstop = function() {

                var url3 = URL.createObjectURL(buffers);
                var player3 = document.getElementById('#my-recorddisplay');
                if (flvjs.isSupported()) {
                    var flvPlayer = flvjs.createPlayer({
                        type: 'video/webm',
                        "isLive": true, //<====加个这个
                        url: url3, //<==自行修改
                    });
                    flvPlayer.attachMediaElement(player3);
                    flvPlayer.load(); //加载
                    flvPlayer.play();
                }
                player3.src = url3;
                $("#get").attr({"href":url3,download:"luzhi.webm"});
                buffers = null;
            };

        }).catch(function(err) {
            console.log(`${err.name}:${err.message}`);
        });
    }

    $("#get").click(function(event) {
        if ($(this).attr("href") == "javascript:") {
            alert("请先录制视频")
        }

    });


    //截图
    var mySrc = "";

    function htmlToImage() {
        var canvas = document.getElementById("V2I_canvas");
        if (!canvas.getContext) {
            alert("您的浏览器暂不支持canvas");
            return false;
        } else {
            var context = canvas.getContext("2d");
            var video = document.getElementById("myVideo");
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            return mySrc = canvas.toDataURL("image/png");
        }
    }
    $("#screen_shot_btn").click(function(event) {
        htmlToImage();
        $("#image_el").attr("src", mySrc);
    });

    $("#screen_save_btn").click(function() {
        if ($("#image_el").attr("src") != "") {
            funDownload($("#image_el").get(0), "download.png")
        } else {
            alert("内容为空");
        }
    })


    var funDownload = function(domImg, filename) {
        // 创建隐藏的可下载链接
        var eleLink = document.createElement('a');
        eleLink.download = filename;
        eleLink.style.display = 'none';
        // 图片转base64地址
        var canvas = document.createElement('canvas');
        var width = domImg.naturalWidth;
        var height = domImg.naturalHeight;
        canvas.width = width;
        canvas.height = height;
        var context = canvas.getContext('2d');
        console.log(`${width}+${height}`);
        context.drawImage(domImg, 0, 0, width, height);
        // 如果是PNG图片，则context.toDataURL('image/png')
        eleLink.href = canvas.toDataURL('image/png');
        // 触发点击
        document.body.appendChild(eleLink);
        eleLink.click();
        // 然后移除
        document.body.removeChild(eleLink);
    };



})