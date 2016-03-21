
$(function(){
//  header点击导航字体 字体变色
	$(".list").click(function(){
		$(this).find("a").addClass("on").parent().siblings().find("a").removeClass("on");
	})
	$(".list1_Pli").click(function(){
		$(this).addClass("off").siblings().removeClass("off");
	})
	
//	功能 :   productList.html鼠标滑过动画效果
	$(".content1_pli").hover(
		function () {
			var txt = $(this).find(".title_pli");
			var txt2 = $(this).find(".text_pli");
				txt.stop().fadeOut('fast', function() {
					txt2.stop().fadeIn('fast', function() {

					});
				});
		},
		
		function () {
			var txt = $(this).find(".title_pli");
			var txt2 = $(this).find(".text_pli");
			txt2.stop().fadeOut('fast', function() {
				txt.stop().fadeIn('fast', function() {

				});
			});

		}
	);
	
	//显示报名弹出框
	$('.openPopup').click(function(){
		$('.popupPage').css('display','block');
		//报名弹出框
		$('.popupBox_pde').css('display','block');
		//报名成功弹出框
		$('.popupBox-2_pde').css('display','none');
	});
	
	//关闭报名弹出框
	$('.closePopup').click(function(){
		$('.popupPage').css('display','none');
	});
	
	//关闭报名成功弹出框
	$('.closePopup-2').click(function(){
		$('.popupPage').css('display','none');
		$('.popupBox_pde').css('display','block');
		$('.popupBox-2_pde').css('display','none');
	});
	
	//radio选种及切换效果
	$(".radio_pde").click(function(){
		$(this).addClass("checked_pde").siblings().removeClass("checked_pde");
		$(".radio_pde").each(function(){
			if($(this).hasClass("checked_pde")){
				$(this).attr('src','img/checked_pde.png');
				$(this).next().attr('checked',true);
			}else{
				$(this).attr('src','img/unchecked_pde.png');
				$(this).next().attr('checked',false);
			}
		});
	});
	
})


/**
 * 功能：动画效果
 */
function testAnim(x){
	$('.' + x).removeClass('flash animated').addClass('flash animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend' , function(){
		$(this).removeClass('flash animated');
	});
};


/**
 * 功能：验证输入框内容是否符合手机号正则
 * 返回值：是手机号返回true，不是返回false
 */
function isPhone(obj){
	var str = obj.value;
	var phoneReg = /^1[34578]\d{9}$/ ;//手机号的正则	
	if(phoneReg.exec(str)){
		return true;
	}
	return false;
}


/**
 * 功能：验证＋提交
 * 返回值：验证通过返回true，失败返回false
 */
function submitApf(){
	if(
		document.getElementById('name').value == "" ||
		document.getElementById('school').value == "" ||
		document.getElementById('major').value == "" ||
		document.getElementById('sex').value == "" ||
		document.getElementById('phone').value == "" ||
		document.getElementById('grade').value == ""
	){
		//切换提示语
		$('.tip-1_pde').css('display','block');
		$('.tip-2_pde').css('display','none');
		//flash动效
		testAnim('tip-1_pde');
		return false;
	}else if(!isPhone(document.getElementById('phone'))){
		//切换提示语
		$('.tip-1_pde').css('display','none');
		$('.tip-2_pde').css('display','block');
		//flash动效
		testAnim('tip-2_pde');
		
	}else{
		//验证通过
		//显示报名成功弹出框
		$('.popupBox_pde').css('display','none');
		$('.popupBox-2_pde').css('display','block');
		//return true;
		//Nnotice!! Programmer!! 如果添加提交功能请将上一行（return true;）注释解除。
	}
	return false;
}



