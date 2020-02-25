<template>
    <div class="modal journal-view" tabindex="-1" role="dialog" style="display: flex;">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Development of a Shape-Memory Tube to Prevent Vascular Stenosis</h5>
                    <span></span>
                </div>
                <div class="modal-body">
                    <dl>
                        <dt>게재정보:</dt>
                        <dd>Advanced Materials (2019.08.27, IF 25.809)</dd>
                        <dt>요약:</dt>
                        <dd>인체 온도에 반응하여 프로그래밍 된 형태로 복원할 수 있는 형상기억고분자 기반 기술을활용하여, 다양한 크기의 혈관에 쉽게 적용이 가능하고 추가적인 혈관 문합 시술이 요구되지 않는 새로운 개념의 형상기억 자동문합형 (automatic anastomosis type) 혈관 그래프트를 개발함.</dd>
                    </dl>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-block btn-list" @click="close()">닫기</button>
                    <a class="btn btn-details" href="https://onlinelibrary.wiley.com/doi/full/10.1002/adma.201904476" target="_blank">
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
		document.body.classList.add('modal-open')
	},
	destroyed: function() {
		document.body.classList.remove('modal-open')
	},
	methods: {
		close: function() {
			this.$router.push('/m/ko/promotion/journal');
		},
	}
}
</script>