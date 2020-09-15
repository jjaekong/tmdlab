<template>
    <div class="modal journal-view show" tabindex="-1" role="dialog">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h4>Anti-Atherogenic Effect of Stem Cell Nanovesicles Targeting Disturbed Flow sites.</h4>
                    <span></span>
				</div>
				<div class="modal-body">
					<div class="journal-body">
                        <dl>
                            <dt>게재 정보:</dt>
                            <dd>Small (2020.04.16, IF 10.856)</dd>
                            <dt>요약:</dt>
                            <dd>죽상 동맥경화증 발생의 주원인인 이상혈류(disturbed flow)를 타겟팅하는 펩타이드(PREY)를 줄기세포에 기능화 한 후 나노베지클을 추출하고, 이를 사용하여 부분 경동맥 결찰 쥐와 돼지 모델에서 anti-inflammatory effect와 pro-endothelial recovery effect를 확인함으로써 나노 기술 기반의 내피 염증 표적화 치료법의 효능을 확인함.</dd>
                        </dl>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn" @click="close()">닫기</button>
                    <a class="btn btn-details" href="https://onlinelibrary.wiley.com/doi/full/10.1002/smll.202000012" target="_blank">
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