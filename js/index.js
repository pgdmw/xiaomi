window.onload=function(){
	
	//购物车
	let cart=document.querySelector(".cart");
	let cartList=document.querySelector(".cart-list");
	let cartCon=document.querySelector(".cart-con");
//	console.log(cart,cartList);
	cart.onmouseover=function(){
//		cartCon.style.display="block";
		cartList.style.height="100px";
		cartList.style.boxShadow="0 5px 10px 0 rgba(0,0,0,0.15)";
		cartList.style.background="#FFFFFF";
		cart.style.background="#FFFFFF";
		cart.style.color="#ff6700";
	}
	cart.onmouseout=function(){
//		cartCon.style.display="none";
		cartList.style.height="0";
		cartList.style.boxShadow="";
		cart.style.background="#424242";
		cart.style.color="#B0B0B0";
	}
	
	//侧拉
	let cart1=document.querySelectorAll(".banner .site-category-list .category-list");
	let leftList=document.querySelectorAll(".left-list");
	console.log(cart1,leftList);
	for(let i=0;i<cart1.length;i++){
		cart1[i].onmouseover=function(){
			for(let j=0;j<leftList.length;j++){
				leftList[j].style.display="none";
			}
			leftList[i].style.display="block";
			cart1[i].style.background="#ff6700";
		}
		cart1[i].onmouseout=function(){
			leftList[i].style.display="none";
			cart1[i].style.background="";
		}
	}
	
	//导航栏下拉
	let cart2=document.querySelectorAll(".site-header .header-nav .header-con .nav-item");
	let navMenu=document.querySelectorAll(".navMenu");
	let a=document.querySelectorAll(".site-header .header-nav .header-con .nav-item .link");
	console.log(cart2,leftList,a);
	for(let i=1;i<cart2.length-2;i++){
		cart2[i].onmouseover=function(){
			for(let j=0;j<navMenu.length;j++){
//				navMenu[j].style.display="none";
				navMenu[j].style.height="0";
				navMenu[j].style.boxShadow="";
				navMenu[j].style.borderTop="0";
			}
//			navMenu[i-1].style.display="block";
			navMenu[i-1].style.height="226px";
			navMenu[i-1].style.borderTop="1px solid #E0E0E0";
			navMenu[i-1].style.boxShadow="0 3px 4px rgba(0,0,0,0.18)";
//			a[i].style.color="#ff6700";
		}
		cart2[i].onmouseout=function(){
			navMenu[i-1].style.height="0";
			navMenu[i-1].style.boxShadow="";
			navMenu[i-1].style.borderTop="0";

//			navMenu[i-1].style.display="none";
//			a[i].style.color="#333333";
		}
	}
	
	
	//小米闪购倒计时
	let boxs=document.querySelectorAll(".flashPurchase .span4 li .countdown .box");
	console.log(boxs);
	let futurn=new Date();
	futurn.setMonth(9,31);
	futurn.setHours(23,59,59);
	let futurntime=futurn.getTime();
	console.log(futurn,futurntime);
	let t3=setInterval(function(){
		let nowday=new Date();
		let nowtime=nowday.getTime();
		let times=Math.round((futurntime-nowtime)/1000);
		console.log(times);
		let hours=Math.floor(times/60/60);
		boxs[0].innerHTML=hours;
		let min=Math.floor(times/60%60);
		boxs[1].innerHTML=min;
		let sec=Math.floor(times%60);
		boxs[2].innerHTML=sec;
	},1000)
	
	
	
//	家电
	let li=document.querySelectorAll(".homeelec .box-hd .more ul li");
	let ul=document.querySelectorAll(".homeelec .span16 ul");
	console.log(li,ul);
	for(let i=0;i<li.length;i++){
		li[i].onmouseover=function(){
			for(let j=0;j<ul.length;j++){
				li[j].style.color="#424242";
				li[j].style.borderBottom="2px solid rgba(0,0,0,0)";
				ul[j].style.display="none";
			}
			ul[i].style.display="block";
			li[i].style.color="#FF6700";
			li[i].style.borderBottom="2px solid #FF6700";
		}
		li[i].onmouseout=function(){
			li[i].style.display="block";
		}
	}
	
//	搜索
	let searchText=document.querySelector(".header-search .search-form .search-text");
	let searchInfo=document.querySelector(".header-search .search-form .search-info");
	let keywordList=document.querySelector(".header-search .search-form .keyword-list");
	let hotWords=document.querySelector(".header-search .search-form .search-hot-words");
	console.log(searchText,keywordList);
	console.log(hotWords);
	searchText.onfocus=function(){
		searchText.style.borderColor="#FF6700";
		searchInfo.style.borderColor="#FF6700";
		keywordList.style.display="block";
		hotWords.style.display="none";
	}
	searchText.onblur=function(){
		searchText.style.borderColor="#e0e0e0";
		searchInfo.style.borderColor="#e0e0e0";
		keywordList.style.display="none";
		hotWords.style.display="block";
	}
	
	
	//轮播
	let imgs=document.querySelectorAll(".banner .container .banner-img");
	let banner=document.querySelector(".banner .container");
	let items=document.querySelectorAll(".pages .pages-item");
	let lbtn=document.querySelector(".dircetion .ui-pre");
	let rbtn=document.querySelector(".dircetion .ui-next");
	let num=0;
	imgs[0].style.opacity=1;
	items[0].classList.add("active");
	console.log(imgs,banner,items,lbtn,rbtn);
	for(let i=0;i<items.length;i++){
		//鼠标单击时
		items[i].onclick=function(){
			for(let j=0;j<imgs.length;j++){
				imgs[j].style.opacity=0;
				items[j].classList.remove("active");
			}
			imgs[i].style.opacity=1;
			items[i].classList.add("active");
			num=i;
		}
	}
	//自动轮播
	let t=setInterval(move,3000);
	function move(){
		num++;
		if(num==imgs.length){
			num=0;
		}
		for(let j=0;j<imgs.length;j++){
			imgs[j].style.opacity=0;
			items[j].classList.remove("active");
		}
		imgs[num].style.opacity=1;
		items[num].classList.add("active");
	}
	
	//鼠标移入banner，停止时间间隔函数
	banner.onmouseover=function(){
		clearInterval(t);
	}
	//鼠标移出banner,继续时间间隔函数
	banner.onmouseout=function(){
		t=setInterval(move,3000);
	}
	
	//点击右箭头,同move
	rbtn.onclick=function(){
		move();
	}
	lbtn.onclick=function(){
		movel();
	}
	
	function movel(){
		num--;
		if(num<0){
			num=imgs.length-1;
		}
		for(let j=0;j<imgs.length;j++){
			imgs[j].style.opacity=0;
			items[j].classList.remove("active");
		}
		imgs[num].style.opacity=1;
		items[num].classList.add("active");
	}
	
	window.onload=function(){
		clearInterval(t);
	}
	window.onfocus=function(){
		t=setInterval(move,3000);
	}
	
	//内容轮播
	//图书
	let imgs2=document.querySelectorAll(".content .box-bd .content-list .box-bd-con .list1 li");
	let dots2=document.querySelectorAll(".content .box-bd .book .pages-wrapper .xm-pagers .page");
	let banner2=document.querySelector(".content .box-bd .con1");
	let lbtn2=document.querySelector(".book .xm-controls .ui-pre i");
	let rbtn2=document.querySelector(".book .xm-controls .ui-next i"); 
	console.log(imgs2,dots2,banner2,lbtn2,rbtn2);
	banner_lr(dots2,imgs2,banner2,lbtn2,rbtn2,"active",1500);
	
	//主题
	let imgs3=document.querySelectorAll(".content .box-bd .content-list .box-bd-con .list2 li");
	let dots3=document.querySelectorAll(".content .box-bd .theme .pages-wrapper .xm-pagers .page");
	let banner3=document.querySelector(".content .box-bd .con2");
	let lbtn3=document.querySelector(".theme .xm-controls .ui-pre i");
	let rbtn3=document.querySelector(".theme .xm-controls .ui-next i"); 
	console.log(imgs3,dots3,banner3,lbtn3,rbtn3);
	banner_lr(dots3,imgs3,banner3,lbtn3,rbtn3,"active",1500);
	
	//游戏
	let imgs4=document.querySelectorAll(".content .box-bd .content-list .box-bd-con .list3 li");
	let dots4=document.querySelectorAll(".content .box-bd .game .pages-wrapper .xm-pagers .page");
	let banner4=document.querySelector(".content .box-bd .con3");
	let lbtn4=document.querySelector(".game .xm-controls .ui-pre i");
	let rbtn4=document.querySelector(".game .xm-controls .ui-next i"); 
	console.log(imgs4,dots4,banner4,lbtn4,rbtn4);
	banner_lr(dots4,imgs4,banner4,lbtn4,rbtn4,"active",1500);
	
	//应用
	let imgs5=document.querySelectorAll(".content .box-bd .content-list .box-bd-con .list4 li");
	let dots5=document.querySelectorAll(".content .box-bd .app .pages-wrapper .xm-pagers .page");
	let banner5=document.querySelector(".content .box-bd .con4");
	let lbtn5=document.querySelector(".app .xm-controls .ui-pre i");
	let rbtn5=document.querySelector(".app .xm-controls .ui-next i"); 
	console.log(imgs5,dots5,banner5,lbtn5,rbtn5);
	banner_lr(dots5,imgs5,banner5,lbtn5,rbtn5,"active",1500);
	
	
	//小米闪购
	let leftB1=document.querySelector(".flashPurchase .controls .left");
	let rightB1=document.querySelector(".flashPurchase .controls .right");
	let uls1=document.querySelector(".flashPurchase .span16 ul");
	let widths1=parseInt(getComputedStyle(uls1,null).width)/2;
	trans(leftB1,rightB1,uls1,widths1,2);
	console.log(leftB1,rightB1,uls1,widths1);

	
	
	//为你推荐
	let leftB=document.querySelector(".recommend .controls .left");
	let rightB=document.querySelector(".recommend .controls .right");
	let con=document.querySelector(".recommend .recommend-bd ul");
	
	let widths=parseInt(getComputedStyle(con,null).width)/4;
	trans(leftB,rightB,con,widths,4);
	console.log(leftB,rightB,con,widths);
}
