<template>
    <div class="modal journal-view show" tabindex="-1" role="dialog">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h4>Microchannel Network Hydrogel Induced Ischemic Anastomotic Blood Perfusion.</h4>
                    <span></span>
				</div>
				<div class="modal-body">
					<div class="journal-body">
                        <dl>
                            <dt>게재 정보:</dt>
                            <dd>Nature Communication (2020.01.30, IF 11.88)</dd>
                            <dt>요약:</dt>
                            <dd>영양소 및 산소의 확산 한계를 3 차원으로 극복하기 위해 젤라틴 하이드로겔에서 마이크로 채널 네트워크를 개발하였고, 마우스 및 돼지의 허혈 모델에 개발된 하이드로겔을 이식하여 이웃하는 조직과의 문합 및 마이크로 채널 관류에 의해 심하게 손상된 조직의 재생을 확인.</dd>
                        </dl>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn" @click="close()">닫기</button>
                    <a class="btn btn-details" href="https://www.nature.com/articles/s41467-020-14480-0" target="_blank">
                        <img src="@/assets/img/ico_details.png" />
                        논문 상세 보기
                    </a>
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
			this.$router.push('/w/ko/promotion/journal');
		},
	}
}
</script>