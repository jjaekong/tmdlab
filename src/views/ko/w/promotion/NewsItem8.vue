<template>
    <div class="modal news-view show" tabindex="-1" role="dialog">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h4>중소벤처기업부에서 주관하는 창업성장기술개발사업 ‘혁신형 창업과제’ 선정</h4>
					<span>2019년 11월 25일</span>
				</div>
				<div class="modal-body">
					<!-- <img class="news-image" src="@/assets/img/promotion/img_news_4.jpg"> -->
					<div class="news-body">
						㈜티엠디랩은 중소벤처기업부가 지원하는 창업성장기술개발사업 ‘혁신형 창업과제’로 최종 선정되었다. 이번 사업 개발 기간은 2019년 11월부터 2021년 11월까지 총 24개월이며 총 4억원의 연구비를 지원받게 되었다. 이 과제에서는 비루관 협착 및 폐쇄 치료를 위한 형상 기억 고분자 기반의 누도 튜브를 개발 및 실용화를 위한 연구를 수행하게 된다.
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn"  @click="close()">닫기</button>
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