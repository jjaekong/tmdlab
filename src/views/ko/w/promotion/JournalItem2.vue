<template>
    <div class="modal journal-view show" tabindex="-1" role="dialog">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h4>Nasolacrimal stent with shape memory as an <br>advanced alternative to silicone products</h4>
                    <span></span>
				</div>
				<div class="modal-body">
					<div class="journal-body">
                        <dl>
                            <dt>게재 정보:</dt>
                            <dd>Acta Biomaterilia (2019.11.07, IF 6.638)</dd>
                            <dt>요약:</dt>
                            <dd>눈물길이 막힌 토끼의 눈물길에 삽입하여 체온에 의한 팽창으로 눈물길 확보가 가능한 형상기억 고분자 기반의 그래프트를 만들고, 실리콘과 비교한 형상기억고분자의 물성, in vitro 세포독성 및 바이오 필름 (biofilm) 형성 억제, 그리고 in vivo 유효성을 확인함.</dd>
                        </dl>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn" @click="close()">닫기</button>
                    <a class="btn btn-details" href="https://www.sciencedirect.com/science/article/pii/S1742706119307366?via%3Dihub" target="_blank">
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