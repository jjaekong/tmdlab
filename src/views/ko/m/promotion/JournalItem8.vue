<template>
    <div class="modal journal-view" tabindex="-1" role="dialog" style="display: flex;">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Dilation-Responsive Microshape Programming Prevents Vascular Graft Stenosis</h5>
                    <span></span>
                </div>
                <div class="modal-body">
                    <dl>
                        <dt>게재정보:</dt>
                        <dd>Small (2021.03.17, IF 11.459)</dd>
                        <dt>요약:</dt>
                        <dd>형상기억 고분자를 이용한 혈관 외벽 랩핑 장치를 개발하여 동‧정맥 문합 부위의 혈관을 외부에서 포장함으로써 혈관의 급격한 확장을 막고 혈관 내부에서 협착이 일어나지 않게 유도함. 형상기억고분자 기반 기술을 활용한 최초의 혈관 외벽 스텐트로써 의의가 있으며, 토끼와 비글의 전임상 실험을 통해 안전성 및 기능성을 평가함(DOI: 10.1002/smll.202007297).</dd>
                    </dl>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-block btn-list" @click="close()">닫기</button>
                    <a class="btn btn-details" href="https://onlinelibrary.wiley.com/doi/full/10.1002/smll.202007297" target="_blank">
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