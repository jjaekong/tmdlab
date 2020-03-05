<template>
    <div class="modal news-view show" tabindex="-1" role="dialog">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h4>혈관 신생 유도 3차원 마이크로 채널 네트워크 논문, 국제 학술지 <br>(Nature Communication, IF 11.88) 게재</h4>
					<span>2020년 1월 30일</span>
				</div>
				<div class="modal-body">
					<img class="news-image" src="@/assets/img/promotion/img_news_10.jpg">
					<div class="news-body">
						㈜티엠디랩은 손상된 조직으로의 혈관 신생 유도를 돕는 하이드로겔 기반 마이크로 채널 네트워크를 개발하였고 그 효과를 Nature 자매지인 ‘Nature Communication’에 게재하였다 (논문 제목: Microchannel Network Hydrogel Induced Ischemic Anastomotic Blood Perfusion).<br><br>
                        손상된 부위로의 혈관 신생 유도는 오랫동안 해결되지 않은 문제였다. Pro-angiogenic molecule을 이용한 국소 치료가 가장 일반적인 접근법이나 염증성 커플링, 종양성 혈관 활성화 및 표적 외 순환을 포함하는 중요한 부작용이 있다고 알려져 있다.<br><br>
                        본 연구에서는 영양소 및 산소의 확산 한계를 3차원으로 극복하기 위해 젤라틴 하이드로겔에서 마이크로 채널 네트워크를 개발하였다. 3차원 채널 네트워크는 pro-angiogenic molecule없이 혈관이 손상된 임플란트 부위를 물리적으로 엔지니어링하기 위해 적용하였다. 개발된 하이드로겔을 마우스 및 돼지의 허혈 모델에 이식하였고 이웃하는 조직과의 문합 및 마이크로 채널 관류에 의해 심하게 손상된 조직이 재생되었음을 확인하였다. 이 효과는 내피 세포의 기능적 회복과 함께 마이크로 채널의 크기 특이적 재생 및 대식세포 분극에 의해 유도되었다. <br><br>
                        이 기술은 저산소증 및 염증 관련 질환 치료제의 개발 및 대퇴골두무혈성괴사에서 혈관 유도를 위한 임플란트 재형의 개발에 기여할 수 있을 것이다.
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