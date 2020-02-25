<template>
    <div class="modal news-view show" tabindex="-1" role="dialog">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h4>형상 기억 고분자 기반 누관 스텐트 논문 국제 학술지 (Acta Biomaterilia, IF 6.638) 게재</h4>
					<span>2019년 11월 7일</span>
				</div>
				<div class="modal-body">
					<img class="news-image" src="@/assets/img/promotion/img_news_6.jpg">
					<div class="news-body">
						㈜티엠디랩은 비루관 협착 및 폐쇄 시 형상기억고분자 기반의 누관 스텐트의 효과가 언급된 논문을 국제 학술지 ‘Acta Biomaterila’에 게재하였다 (논문 제목: Nasolacrimal stent with shape memory as an advanced alternative to silicone products). 비루관 협착 및 폐쇄는 눈물이 지나가는 길이 막혀 눈물이 잘 배출되지 않고 눈물이 고여 밖으로 흘러 넘치게 되어 사물이 흐리게 보이며 일상생활에 많은 불편을 느끼게 되는 질환으로, 염증이 심해지면 급성 누낭염이 발생하여 수술이 불가피해진다. 또한 최근 미세먼지가 사회적인 문제로 대두되는 가운데 환자 수가 급격히 증가하고 있다.<br><br>
                        기존의 비루관 확장용 스텐트로 사용되는 실리콘 튜브는 육아종 형성, 비강 출혈, 관의 이탈, 결막 자극, 바이오 필름 형성 등의 부작용을 일으키고 이탈, 감염 등의 문제점과 더불어 시술 시 불편함이 있어 매우 낮은 만족도를 보인다. 따라서 형상기억고분자 누도 튜브를 개발하여 현재 임상에서 사용 중인 누도 실리콘 튜브의 부작용을 극복하고 수입 의존도를 낮추며 더 나아가 기능성 소재의 우수성을 바탕으로 수입의 증대를 도모하고자 하였다.<br><br>
                        본 연구에서는 형상기억 고분자 기술을 활용하여 눈물길이 막힌 토끼의 눈물길에 삽입하여 체온에 의한 팽창으로 눈물길 확보가 가능한 그래프트를 개발하였다. 연구전담부서에서 전임상 연구결과를 바탕으로 보고한 논문이며, 실리콘과 비교한 형상기억고분자의 물성, in vitro 세포독성 및 바이오 필름 (biofilm) 형성 억제, 그리고 in vivo 유효성을 확인하였다.
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