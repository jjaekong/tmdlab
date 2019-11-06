<template>
    <div class="modal news-view show" tabindex="-1" role="dialog">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h4>2019년 의료기기 CHAMP 교육과정 의료기기 입문 마스터 과정 수료 (2019.07.16 ~ 2019.07.18)</h4>
					<span>2019년 7월 16일</span>
				</div>
				<div class="modal-body">
					<img class="news-image" src="@/assets/img/promotion/img_news_4.jpg">
					<div class="news-body">
						2019년 7월 16일부터 18일까지 3일에 걸쳐 한국의료기기산업협회 (KMDIA)에서 주관하는 국가인적자원개발<br>
						컨소시엄 사업 (Consortium for HRD Ability Magnified Program, CHAMP) 교육을<br>
						(주) 티엡디랩 전 직원이 수료하였다. 교육을 통해 의료기기 규정, 인허가 제도부터 의료기기 사후관리까지<br>
						의료기기산업 전반에 걸친 의료기기 기본사항을 이해하고<br>
						의료기기산업계 종사자로서 역량을 강화할 수 있는 기회가 되었다. 
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