(function () {
    // 公共变量
    let [x, y, z] = [5, 5, 5]
        , num = x * y * z;
    let oUl = document.querySelector("#main ul.list");
    let oAlert = document.getElementById("alert");
    let oCss = document.getElementById("css");
    let oMain = document.getElementById("main");
    let oAll = document.getElementById("all");
    let oBack = document.getElementById("back");
    let oFram = document.querySelector("#iframe iframe");
    let aLi = oUl.children;

    //效果集合
    let Fly = {

        //Grid层叠布局
        Grid() {

            if (Fly.Grid.ifExe) return;


            let jX = 360;
            let jY = 300;
            let jZ = 1000;

            let midX = 2;
            let midY = 2;
            let midZ = 2;

            let css = "";
            [...aLi].forEach((ele, i) => {

                let x = i % 25 % 5;
                let y = Math.floor(i % 25 / 5);
                let z = Math.floor(i / 25);

                let trX = (x - midX) * jX;
                let trY = (y - midY) * jY;
                let trZ = (midZ - z) * jZ;

                css += `#main ul.list.Grid li:nth-child(${i + 1}){
                     transform:translate3D(${trX}px,${trY}px,${trZ}px) !important;
                    }`;

            });

            oCss.innerHTML += css;
            Fly.Grid.ifExe = true;
        }
        //Helix螺旋布局
        , Helix() {

            if (Fly.Helix.ifExe) return;

            //圈数
            let rad = 4;
            let css = "";

            [...aLi].forEach((ele, i) => {


                let trX = 0;
                let trY = (i - num / 2) * 2 * rad;
                let trZ = 900;

                let roY = i * (rad * 360) / num;

                css += `#main ul.list.Helix li:nth-child(${i + 1}){
                    transform:rotateY(${roY}deg)translate3D(${trX}px,${trY}px,${trZ}px) !important;
                   }`;

                // ele.style.transform = `rotateY(${roY}deg)translate3D(${trX}px,${trY}px,${trZ}px)`;
            });

            oCss.innerHTML += css;
            Fly.Helix.ifExe = true;
        }
        //Table 元素周期表布局
        , Table() {

            if (Fly.Table.ifExe) return;
            //水平垂直间距
            let jX = 170;
            let jY = 210;

            //总共会占多少行
            let midY = Math.ceil(num / 18) / 2 + 2 - 1.5;
            let midX = 18 / 2 - 0.5;

            //定义前三行不规则布局的坐标
            let coordinate = [
                { x: 0, y: 0 }
                , { x: 17, y: 0 }
                , { x: 0, y: 1 }
                , { x: 1, y: 1 }
                , { x: 12, y: 1 }
                , { x: 13, y: 1 }
                , { x: 14, y: 1 }
                , { x: 15, y: 1 }
                , { x: 16, y: 1 }
                , { x: 17, y: 1 }
                , { x: 0, y: 2 }
                , { x: 1, y: 2 }
                , { x: 12, y: 2 }
                , { x: 13, y: 2 }
                , { x: 14, y: 2 }
                , { x: 15, y: 2 }
                , { x: 16, y: 2 }
                , { x: 17, y: 2 }
            ];

            let css = "";
            [...aLi].forEach((ele, i) => {

                let x = i < 18 ? coordinate[i].x : i % 18;
                let y = i < 18 ? coordinate[i].y : Math.floor(i / 18) + 2;

                let trX = (x - midX) * jX;
                let trY = (y - midY) * jY;

                css += `#main ul.list.Table li:nth-child(${i + 1}){
                    transform:translate3D(${trX}px,${trY}px,0px) !important;
                   }`;
                // ele.style.transform = `translate3D(${trX}px,${trY}px,0px)`;
            });
            oCss.innerHTML += css;
            Fly.Table.ifExe = true;
        }
        //Sphere 球体布局
        , Sphere() {

            if (Fly.Sphere.ifExe) return;
            let arr = [1, 3, 7, 9, 11, 14, 21, 16, 12, 10, 9, 7, 4, 1];
            let len = arr.length;

            let css = "";
            [...aLi].forEach((ele, i) => {

                //求出当前li是属于第 几 层
                let { ceng, ge } = getLayer(i, arr);

                // console.log(`当前序号是${i},第${ceng},第${ge}个`);
                //求出x的旋转角度
                let roX = -ceng * 180 / (len - 1) + 90;
                let roY = 360 / arr[ceng] * ge + ceng * 10;
                let trZ = 800;

                css += `#main ul.list.Sphere li:nth-child(${i + 1}){
                    transform:rotateY(${roY}deg) rotateX(${roX}deg) translateZ(${trZ}px) !important;
                   }`;
                // ele.style.transform = `rotateY(${roY}deg) rotateX(${roX}deg) translateZ(${trZ}px)`;

            });
            oCss.innerHTML += css;
            Fly.Sphere.ifExe = true;
        }
    };
    //初始布局 生成125个
    (function () {
        
        let fragment =document.createDocumentFragment();
        let oAlertTitle = oAlert.querySelector(".title span")
        ,oAlertImg = oAlert.querySelector(".img img")
        ,oAlertAuthor = oAlert.querySelector(".author span")
        ,oAlertInfo= oAlert.querySelector(".info span");
        for (let i = 0; i < num; i++) {

            let ranX = Math.floor(Math.random() * 6000 - 3000);
            let ranY = Math.floor(Math.random() * 6000 - 3000);
            let ranZ = Math.floor(Math.random() * 10000 - 5000);

            //当前Li的数据
            let thisData = data[i] || {
                title: "Wait"
                , author: "Wait"
                , time: "Wait"
                , topic: "案例添加中.敬请期待..."
                , dec: "案例添加中,敬请期待..."
                , src: "http://yys.163.com/"
                , img: "http://5b0988e595225.cdn.sohucs.com/images/20171013/fec49f59b98041a4a16886893447f746.jpeg"
            };

            //创建li标签
            let oLi = document.createElement("li");
            oLi.innerHTML =`
            <p class="title">${thisData.title}</p>
            <p class="author">${thisData.author}</p> 
            <p class="time">${thisData.time }</p> `;
            oLi.style.transform=`translate3D(${ranX}px,${ranY}px,${ranZ}px)`;
            //每个li加点击事件
            oLi.onclick=function(e){
                //阻止事件冒泡
                e.stopPropagation();
                //弹窗层显示
                //内容部分的修改
                oAlertTitle.innerHTML=`课题:${thisData.topic}`;
                oAlertAuthor.innerHTML=`主讲老师:${thisData.author}`;
                oAlertInfo.innerHTML=`描述:${thisData.dec}`;
                oAlertImg.src=thisData.img;
                //样式部分的修改
                oAlert.style.transition="0s";
                oAlert.style.display="block";
                oAlert.style.transform="scale(2)";
                oAlert.style.opacity="1";

                //重绘与动画变换
                oAlert.offsetLeft
                oAlert.style.transform = "scale(1)"
                oAlert.style.transition=".8s";

                //弹窗层的点击事件
                oAlert.onclick = function(e){
                    //阻止冒泡
                    e.stopPropagation();
                    if(!thisData.src)return;
                    oAll.classList.add("right");
                    oFram.src = thisData.src;
                    
                };
            };
            
            fragment.appendChild(oLi);
        }
        oUl.appendChild(fragment);
        oUl.offsetLeft;//重绘页面
        Fly.Table();
    })();

    //弹窗层的隐藏
    (function hideAlert(){
        oMain.onclick = function(){
            if (oAlert.style.display !== "block")return;
            //退出动画
            oAlert.style.transform="scale(0) rotateY(270deg)";
            oAlert.style.opacity = "0";
        };
        oBack.onclick =function(){
            oAll.classList.remove("right");
        };
    })();
    // 拖拽与滚轮
    (function () {
        let lastX
            , lastY
            , nX
            , nY
            , x_ = 0
            , y_ = 0
            , timer;

        let roX = 0
            , roY = 0
            , trZ = -2450;

        //给document加拖拽事件
        document.onmousedown = function (e) {
            
            //停止可能还没有借宿的惯性动画
            cancelAnimationFrame(timer);
            // 获取鼠标的初始位置
            lastX = e.clientX;
            lastY = e.clientY;

            // // 获取元素初始位置
            // let sRoY = roY
            //     , sRoX = roX;
            this.onmousemove = function (e) {

                //当前的位置
                nX = e.clientX;
                nY = e.clientY;
                //计算当前位置和前一次的位置之间的变化量
                x_ = nX - lastX;
                y_ = nY - lastY;

                // 获得元素位置变化之后的值
                /*roY = sRoY + x_ * 0.2;
                roX = sRoX - y_ * 0.2;*/
                roY += x_ * 0.1;
                roX -= y_ * 0.1;

                lastX = nX;
                lastY = nY;

                //添加到样式中
                oUl.style.transform = `translateZ(${trZ}px) rotateX(${roX}deg) rotateY(${roY}deg)`;
            };
        };
        document.onmouseup = function (e) {
            this.onmousemove = null;

            //惯性
            !function m() {
                x_ *= 0.95;
                y_ *= 0.95;

                if (Math.abs(x_) <= 0.5) {
                    x_ = 0;
                }
                if (Math.abs(y_) <= 0.5) {
                    y_ = 0;
                }
                roY += x_ * 0.1;
                roX -= y_ * 0.1;
                oUl.style.transform = `translateZ(${trZ}px) rotateX(${roX}deg) rotateY(${roY}deg)`;
                if (!x_ && !y_) return;
                timer = requestAnimationFrame(m);
            }();
        };

        //添加滚轮事件
        mousewheel(document, function (e, d) {

            //得到样式最终的值
            trZ += d * 150;

            //极限判断
            trZ = Math.min(trZ, 2200);
            trZ = Math.max(trZ, -10000);

            //设置css
            oUl.style.transform = `translateZ(${trZ}px) rotateX(${roX}deg) rotateY(${roY}deg)`;

        });

        /*
        @params
            *  dom对象
            *  事件函数,第一个形参是事件对象e,第二个形参代表方位
        @return
            *undefind
        */
        function mousewheel(ele, eFn) {
            if (document.createElement("div").onmousewheel === null) {
                ele.addEventListener("mousewheel", function (e) {
                    var d = e.wheelDelta / 120;
                    eFn.call(this, e, Math.floor(d));
                });
            } else {
                ele.addEventListener("DOMMouseScroll", function (e) {
                    var d = -e.dettail / 3;
                    eFn.call(this, e, d);
                });
            }
        };
    })();

    //左下按钮点击事件
    (function () {
        let aBtn = document.querySelectorAll("#btn li");
        let fnArr = ["Table", "Sphere", "Helix", "Grid"];

        aBtn.forEach((ele, i) => {
            ele.onclick = function () {
                let name = fnArr[i];
                oUl.className = "list " + name;
                Fly[name]();
            };
        });
    })();

    //辅助函数
    function getLayer(i, arr) {

        let sum = 0;
        let result = {};
        for (let j = 0; j < arr.length; j++) {
            sum += arr[j];
            if (sum > i) {
                result.ceng = j;
                result.ge = arr[j] - (sum - i);
                return result;
            }
        }
    }
    

})();

/*//测试代码
    let div = document.createElement("div");
    div.style.cssText = "position:fixed;top:" + e.clientY + "px;left:" + e.clientX + "px;width:2px;height:2px;background:red;";
    document.body.appendChild(div);*/

/*//缓动
        (function m() {
             //每次变换1/10
            trZ += target *0.4;

            //设置css
            oUl.style.transform = `translateZ(${trZ}px) rotateX(${roX}deg) rotateY(${roY}deg)`;

            //极限判断
            trZ = Math.min(trZ, 2200);
            trZ = Math.max(trZ, -10000);
            if(++n>30)return;
            requestAnimationFrame(m);

        })();*/