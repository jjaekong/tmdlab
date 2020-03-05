<template>
    <div class="modal news-view show" tabindex="-1" role="dialog">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h4>형상기억고분자를 이용한 스텐트 관련 특허 2건 출원</h4>
					<span>2018년 12월 19일</span>
				</div>
				<div class="modal-body">
					<img class="news-image" src="@/assets/img/promotion/img_news_1.jpg">
					<div class="news-body">
						형상기억고분자를 스텐트 개발과 관계된 특허 2건을 출원하였다. 첫번째 특허명은 “형상 기억 스텐트의 폐색부위 펼침시 <br>
						저분자 헤파린 방출구조체 (출원번호 10-2018-0164737)＂로 폐색된 혈관에 삽입 시 <br>
						헤파린이 스텐트로부터 방출되며 펼쳐지는 형상기억고분자 혈관 이식용 생체적합성 스텐트에 관한 내용이다. <br>
						두번째 특허명은  “ 형상 기억 스텐트의 생 불분해성 코팅제 조성물 (출원번호 10-2018-0164738)”로 <br>
						생 불분해성 형상기억고분자 스텐트에 관한 내용으로, 이 두가지 특허를 통해 생 분해성 및 생 불분해성 <br>
						형상기억고분자 혈관 스텐트에 관한 권리를 모두 확보할 수 있게 되었다는데 의의가 있다. 
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn" @click="close()">닫기</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	mounted: function() {
		document.body.classList.add('modal-open');
		var self = this;
		window.setTimeout(function() {
			self.$el.style.display = 'flex'
		}, 500)
	},
	destroyed: function() {
		document.body.classList.remove('modal-open')
	},
	methods: {
		close: function() {
			this.$router.push('/w/ko/promotion/news');
		},
	}
}
</script>