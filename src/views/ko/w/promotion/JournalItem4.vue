<template>
    <div class="modal journal-view show" tabindex="-1" role="dialog">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h4>Hydrogel Crosslinking-Programmed Release of <br>Nitric Oxide Regulates Source-Dependent <br>Angiogenic Behaviors of Human Mesenchymal <br>stem Cell</h4>
                    <span></span>
				</div>
				<div class="modal-body">
					<div class="journal-body">
                        <dl>
                            <dt>게재 정보:</dt>
                            <dd>Science Advances (2020.02.26, IF 12.8)</dd>
                            <dt>요약:</dt>
                            <dd>microbial transglutaminase-crosslinkable gelatin gel (mTG gel) 기반의 3차원 nitric oxide (NO) gel에서 골수유래줄기세포 (Bone marrow-derived mesenchymal stem cells, BMSCs)와 지방유래줄기세포 (Adipose tissue-derived mesenchymal stem cells, ADSCs)의 혈관 안정화 및 혈관 신생 효과를 확인함</dd>
                        </dl>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn" @click="close()">닫기</button>
                    <a class="btn btn-details" href="https://advances.sciencemag.org/content/6/9/eaay5413" target="_blank">
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