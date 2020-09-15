<template>
    <div class="modal journal-view show" tabindex="-1" role="dialog">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h4>Shape Memory Tube Plug for Fine-control of Intraocular Pressure by Glaucoma Devices.</h4>
                    <span></span>
				</div>
				<div class="modal-body">
					<div class="journal-body">
                        <dl>
                            <dt>게재 정보:</dt>
                            <dd>ACS Biomaterials Science &amp; Engineering (2020.06.08, IF 4.152)</dd>
                            <dt>요약:</dt>
                            <dd>체온 반응성 형상기억고분자 기반의 녹내장 튜브 플러그를 만들었고, 팽창 전 후의 유연하고 미세한 안압 제어를 가능하게 하여 효율적인 체액 배출을 가능하게 함을 토끼 모델에서 확인함.</dd>
                        </dl>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn" @click="close()">닫기</button>
                    <a class="btn btn-details" href="https://pubs.acs.org/doi/abs/10.1021/acsbiomaterials.0c00649" target="_blank">
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