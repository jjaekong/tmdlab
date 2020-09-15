<template>
    <div class="modal journal-view show" tabindex="-1" role="dialog">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h4>External Self-Closing Tube to Occlude a Vessel Gradually as a Therapeutic Means of Portosystemic Shunt.</h4>
                    <span></span>
				</div>
				<div class="modal-body">
					<div class="journal-body">
                        <dl>
                            <dt>게재 정보:</dt>
                            <dd>Advances Therapeutics (2020.05.14)</dd>
                            <dt>요약:</dt>
                            <dd>체온 반응성 형상기억고분자와 염증을 유발하는 palmitic acid를 이용하여 튜브 형태의 간문맥대정맥 션트의 치료 의료기기를 만들었고, 토끼 정맥에서 혈관 폐쇄됨을 확인함.</dd>
                        </dl>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn" @click="close()">닫기</button>
                    <a class="btn btn-details" href="https://onlinelibrary.wiley.com/doi/10.1002/adtp.202000039" target="_blank">
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