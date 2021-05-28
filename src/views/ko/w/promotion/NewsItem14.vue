<template>
    <div class="modal news-view show" tabindex="-1" role="dialog">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h4>혈관외벽 서포트 연구 논문, Small journal cover 선정 (2021.05)</h4>
					<span>2021년 05월 06일</span>
				</div>
				<div class="modal-body">
                    <img class="news-image" src="@/assets/img/promotion/PC_news_14.jpg">
                    <div class="news-body">
                        2021년 3월 17일 Small (IF 11.459)에 게재된 혈관외벽 서포트 연구 논문(Dilation-Responsive Microshape Programming Prevents Vascular Graft Stenosis)이 2021년 5월호(Vol.17 No.18) cover를 장식하였습니다.
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