<template>
    <div class="modal news-view show" tabindex="-1" role="dialog">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h4>형상 기억 고분자 기반 혈관 문합기 논문 국제 학술지 (Advanced Materials, IF 25.809) 게재</h4>
					<span>2019년 8월 27일</span>
				</div>
				<div class="modal-body">
					<img class="news-image" src="@/assets/img/promotion/img_news_5.jpg">
					<div class="news-body">
						㈜티엠디랩은 체온 반응성 형상 기억 고분자를 재료로 하는 혈관 문합기를 개발하였고 그 효과가 언급된 논문을 Material Science 분야 Top 3 journal인 ‘Advanced Materials’에 게재하였다 (논문 제목: Development of a Shape-Memory Tube to Prevent Vascular Stenosis).<br><br>
                        이 논문은 기존 혈관 재료의 전형적인 틀에서 벗어난 혁신적인 고분자 재료 (체온 반응 형상 기억 고분자)와 고식적인 원통형 혈관 그래프트 디자인에 혁신적인 유체 역학 원리를 적용 (“diffuser” 디자인) 하여 직경이 2 mm 정도 되는 graft를 만들고 돼지 혈관에 배치하여 성공적인 개통성을 보고한다.<br><br>
                        체온 반응성 형상 기억 고분자 기반의 혈관 문합기는 재료가 가지는 특성으로 원주 방향으로 graft 직경을 확장하여 이식 시 혈관 손상을 방지하고, 표면에 산화 질소 방출 펩타이드가 코팅되어 혈전증을 예방한다. 이는 폐쇄성 혈관 재형성이 발생하는 중 돼지의 혈관에서 18일 동안 개선된 개통성 입증을 통해 확인하였다. 이 발견을 통해 형상 기억 고분자를 이용한 혈관 graft의 디자인을 발전시키는데 도움이 될 뿐만 아니라 형상 기억 고분자의 체내 사용 시 안정성과 유효성을 입증할 수 있었다.
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