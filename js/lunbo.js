
//通过透明度实现的轮播
//参数：
//参数1:轮播点元素集合
//参数2:图片元素集合
//参数3:banner盒子元素
//参数4:左箭头元素
//参数5:右箭头元素
//参数6:轮播点选中时类名(string)
//参数7:自动轮播的时间间隔(number)ms
	function banner_oi(dots,imgs,banner,lbtn,rbtn,active,time){
	//2.定义变量
		let num=0;
		//3.初始状态：第一张图片显示/层级提高
	//	imgs[0].style.zIndex=2;
		imgs[0].style.opacity=1;
		dots[0].classList.add(active);  //添加active属性
//		dots[0].style.background="#FFFFFF";
		//循环，点击点轮播(移入轮播点图片发生改变)
		for(let i=0;i<dots.length;i++){
			dots[i].onmouseover=function(){
			//其余图片层级降低变回1/其余的轮播点样式改变
				for(let j=0;j<imgs.length;j++){
	//				imgs[j].style.zIndex=1;
					imgs[j].style.opacity=0;
//					dots[j].style.background="#333333";
					dots[j].classList.remove(active);  //移出active属性
				}
				//对应图片的层级提高
	//			imgs[i].style.zIndex=2;
				imgs[i].style.opacity=1;
				//轮播点样式改变
//				dots[i].style.background="#FFFFFF";
				dots[i].classList.add(active);
				//当鼠标移走后接着鼠标移入时的轮播点继续轮播
				num=i;
			}
		}
		
	//5.实现自动轮播	
	//	let num=0;
		let t=setInterval(move,time);
		function move(){
			num++;
			if(num==imgs.length){
				num=0;
			}
			//其余图片层级降低变回1/其余的轮播点样式改变
			for(let j=0;j<imgs.length;j++){
	//			imgs[j].style.zIndex=1;
				imgs[j].style.opacity=0;
				dots[j].classList.remove(active);
			}
	//		imgs[num].style.zIndex=2;
			imgs[num].style.opacity=1;
			dots[num].classList.add(active);
		}
		
		//鼠标移入banner，停止时间间隔函数
		banner.onmouseover=function(){
			clearInterval(t);
		}
		//鼠标移出banner,继续时间间隔函数
		banner.onmouseout=function(){
			t=setInterval(move,time);
		}
		
	//点击左右箭头轮播	
		//点击右箭头，同move
		rbtn.onclick=function(){
			move();
		}
		//点击左箭头，执行movel
		lbtn.onclick=function(){
			movel();
		}
		function movel(){
			num--;
			if(num<0){
				num=imgs.length-1;
			}
			//其余图片层级降低变回1/其余的轮播点样式改变
			for(let j=0;j<imgs.length;j++){
	//			imgs[j].style.zIndex=1;
				imgs[j].style.opacity=0;
				dots[j].classList.remove(active);
			}
	//		imgs[num].style.zIndex=2;
			imgs[num].style.opacity=1;
			dots[num].classList.add(active);
		}
		
		//窗口失去焦点时，暂停时间间隔函数
		window.onblur=function(){
			clearInterval(t);
		}
		//窗口获得焦点时，继续时间间隔函数
		window.onfocus=function(){
			t=setInterval(move,time);
		}
	}
	


	function banner_lr(dots,imgs,banner,lbtn,rbtn,active,time){
		let now=0;
		let next=0;
		let t;
		//定义开关，当开关是true时，可点击
//		let flarg=true;
		//去单位
		let widths=parseInt(getComputedStyle(banner,null).width);
		console.log(widths);
		
		//2.设置初始值
		imgs[0].style.left=0;
		dots[0].classList.add(active);
		
		//6.右箭头
		rbtn.onclick=function(){
//			if(!flag){
//				return;
//			}
//			flag=false;
			move();
	}
		function move(){
			next++;
			if(next==imgs.length){
//				next=0;
				next=imgs.length-1;
				return;
			}
			imgs[now].style.left=0;
			imgs[next].style.left=widths+"px";
			animate(imgs[now],{left:-widths},function(){
				dots[now].classList.remove(active);
//				flag=true;
			});
			animate(imgs[next],{left:0},function(){
				for(let j=0;j<dots.length;j++){
					dots[j].classList.remove(active);
				}
				dots[next].classList.add(active);
//				flag=true;
			});
			now=next;
		}
		//7.左箭头
		lbtn.onclick=function(){
			//当flag=true,!flag=flase，可以点击执行函数
			//当!flag=true,flag=flase，不可以点击执行函数
//			if(!flag){
//				return;
//			}
//			flag=false;
			movel();
		}
		function movel(){
			next--;
			if(next==-1){
//				next=imgs.length-1;
				next=0;
				return;
			}
			imgs[now].style.left=0;
			imgs[next].style.left=-widths+"px";
			animate(imgs[now],{left:widths},function(){
				dots[now].classList.remove(active);
//				flag=true;
			});
			animate(imgs[next],{left:0},function(){
				for(let j=0;j<dots.length;j++){
					dots[j].classList.remove(active);
				}
				dots[next].classList.add(active);
//				flag=true;
			});
			now=next;
		}
	}



	//平移轮播
	function trans(leftB,rightB,con,widths,numbers){
		//2.点击右键头
	let num=0;
	rightB.onclick=function(){
		num++;
		if(num===numbers){
			num=numbers-1;
			
			return;
		}
		console.log(num);
		con.style.transform="translateX("+(-widths*num)+"px)";
	}
	
	//3.点击左箭头
	leftB.onclick=function(){
		num--;
		if(num===-1){
			num=0;
			return;
		}
		con.style.transform="translateX("+(-widths*num)+"px)";
	}
	}
